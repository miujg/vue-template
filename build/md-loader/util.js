const { parse, compileTemplate, compileScript,  } = require('@vue/compiler-sfc')


// 提取代码里面的template
function stripTemplate(content) {
  const { descriptor } = parse(content)
  const template = content.replace(/<(script|style)[\s\S]+<\/\1>/g, '').trim()
  return template
}

// 提取script
function stripScript(content) {
  const result = content.match(/<(script)>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : '';
}

// 提取style
function stripStyle(content) {
  const result = content.match(/<(style)\s*>([\s\S]+)<\/\1>/);
  return result && result[2] ? result[2].trim() : '';
}

// 生成component
function genInlineComponentText(html, script, sourse) {
  // 首先编译template
  console.log(html)
  // const {descriptor} = parse(sourse)
  const {descriptor} = parse(`<h1>jgmiu</h1>`)
  const compiled = compileTemplate(descriptor)
  return `(function() {
    ${compiled.code}
    return {
      render
    }
  })()`
}

module.exports = {
  stripTemplate,
  stripScript,
  stripStyle,
  genInlineComponentText
}
