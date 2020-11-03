const files = require.context('.', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
    if (key === './index.js') return
    const item = files(key).default || files(key)
    let moduleKey = Object.keys(item)[0]
    modules[moduleKey] = item[moduleKey]
})

export default modules