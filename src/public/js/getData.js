import axios from "axios";

const a = 'xx'
const instance = axios.create({
    // baseURL: 'http://10.10.0.135:8899'
  })
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  
function getData(){
    instance({
        method: 'get',
        url: '/user/findProfile'
    }).then(res => {
        console.log(res,88)
    })
}
export default getData