import Vue from 'vue'

// 动态引入component，默认引入所有components
// 组件名第一个字母为大写字母

const components = {}

// 路径解析
const analysis = (resolve) => {
  resolve.keys().forEach((key) => {
    let k = key.substring(2, key.length - 4)
    let fk = []
    fk = k.split('/')
    k = fk[fk.length - 1]
    components[k] = resolve(key)
  })
}

analysis(require.context('@/components/', true, /\.vue$/))

for (const key in components) {
  if (components.hasOwnProperty(key)) {
    let name = ''
    name = key.substring(0, 1)
    name = name.toLocaleUpperCase()
    name += key.substring(1)
    Vue.component(name, components[key].default)
  }
}

// 该组件目录为公共组件，所有私有组件单独在views里自建目录
