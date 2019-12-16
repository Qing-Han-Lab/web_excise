import config from './config'
let host = config.domain

let url = {}
// 获取js解析
const analysis = resolve => {
  resolve.keys().forEach(key => {
    let address = resolve(key).default
    for (let key2 in address) {
      if (address.hasOwnProperty(key2)) {
        address[key2] = host + address[key2]
      }
    }
    Object.assign(url, address)
  })
}

analysis(require.context('@/api', true, /\.js$/))

export default url
