
// 自动注入mock
import Mock from 'mockjs'

function createMock() {
    const files = require.context('.', true, /\.js$/)
    files.keys().forEach(key => {
        if (key === './index.js') return
        const item = files(key).default || files(key)
        Mock.mock(item.url, item.type, () => item.cb())
    })
}

export {
    createMock
}