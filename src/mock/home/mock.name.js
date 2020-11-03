import Mock from 'mockjs'
const Random = Mock.Random

const url = '/mjg/test',
    type = 'get'


const cb = () => {
    return {
        code: 200,
        msg: 'success',
        data: createData()
    }
}

function createData() {
    return {
        name: Random.cname(),
        age: Random.natural(1, 100),
        email: Random.email(),
        desc: Random.ctitle()
    }
}

export {
    url,
    type,
    cb,
}