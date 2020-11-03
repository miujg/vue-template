
import Mock from 'mockjs'
import * as mockList from './mockList'

function createMock() {
    for(let key in mockList) {
        let temp = mockList[key] 
        console.log(temp)
        Mock.mock(temp.url, temp.type, () => {
            return temp.cb()
        })
    }
}

export {
    createMock
}