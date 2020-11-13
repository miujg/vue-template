
// 自动注入mock
import Mock from 'mockjs'

function createMock() {
    const files = require.context('.', true, /\.js$/)
    files.keys().forEach(key => {
        if (key.indexOf('mock') == -1) return
        const item = files(key).default || files(key)
        Mock.mock(item.url, item.type, (option) => item.cb(option))
    })
}

export {
    createMock
}