/**
 * 自定义post-css插件
 * 功能：px2rem
 */

/**
 * 概念
 * 1.root
 * 2.rule || atRule
 * 3.decl
 */

const postcss = require('postcss')

// UeWidth 表示设计稿宽度
module.exports = postcss.plugin('px2rem', function(opts = {ueWidth: 750}) {

  // width 设计稿上元素的宽度
  const calcRem = (width) => {
    return `${(100 * width) / opts.ueWidth }rem`
  }
  
  return function(root, result) {
    root.walkRules(rule => {
      rule.walkDecls(decl => {
        const req = /-?[0-9]+px/g

        decl.value = decl.value.replace(req, (str) => {
          return calcRem(Number(str.replace('px', '')))
        })

      })
    })
    
  }
})