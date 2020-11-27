/**
 * 将所有 px 转换为 rem
 * @param {*} source 源代码
 */

const fs = require('fs')

function loader(source) {
  const req = /-?[0-9]+px/g

  let result = source.replace(req, (str) => {
      let num = str.replace('px', '')
      return `px2rem(${num})` 
  })

  return result
}

module.exports = loader