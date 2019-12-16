import axios from 'axios'
import qs from 'qs'
import store from '../store'
import md5 from 'js-md5'

axios.interceptors.request.use(
  (config) => {
    if (config.method.toLocaleLowerCase() === 'post') {
      config.data = qs.stringify(config.data)
      config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    } else {
      config.headers['Content-Type'] = 'application/json'
    }
    if (localStorage.getItem('device')) {
      try {
        config.headers['Device-Id'] = md5(JSON.parse(localStorage.getItem('device')).uuid)
      } catch (e) {
        console.log(e)
      }
    }
    if (localStorage.getItem('os')) {
      if (localStorage.getItem('runtime')) {
        if (localStorage.getItem('device')) {
          config.headers['Device-Features'] = JSON.stringify({
            appVersion: JSON.parse(localStorage.getItem('runtime')).version,
            appName: JSON.parse(localStorage.getItem('os')).name,
            imei: JSON.parse(localStorage.getItem('device')).imei,
            model: JSON.parse(localStorage.getItem('device')).model,
            uuid: JSON.parse(localStorage.getItem('device')).uuid,
            imsi: JSON.parse(localStorage.getItem('device')).imsi
          })
        }
      }
    }
    if (store.state.userToken !== '') {
      config.headers['User-Token'] = store.state.userToken
    }
    if (store.state.token !== '') {
      config.headers['Access-Token'] = store.state.token
    }
    return Promise.resolve(config)
  },
  (error) => {
    if (window.plus) {
      window.plus.nativeUI.closeWaiting()
    }
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (res) => {
    if (window.plus) {
      window.plus.nativeUI.closeWaiting()
    }
    return Promise.resolve(res)
  },
  (error) => {
    // Do something with res error
    if (window.plus) {
      window.plus.nativeUI.closeWaiting()
    }
    return Promise.reject(error)
  }
)

const fetch = (methods, sendUrl, data = {}) => {
  if (window.plus) {
    window.plus.nativeUI.showWaiting()
    setTimeout(() => {
      window.plus.nativeUI.closeWaiting()
    }, 5000)
  }
  const httpDefaultOpts = {
    // http默认配置
    method: methods,
    url: sendUrl,
    timeout: 10000
  }
  if (methods.toLocaleLowerCase() === 'get') {
    httpDefaultOpts.params = data
  } else {
    httpDefaultOpts.data = data
  }

  const promise = new Promise((resolve, reject) => {
    axios(httpDefaultOpts)
      .then((res) => {
        resolve(res)
      }).catch((err) => {
        reject(err)
      })
  })
  return promise
}
export default fetch
