// md-loader

const fs = require('fs')
const path = require('path')
const filePath = path.resolve(__dirname, './test.md')
const source = fs.readFileSync(filePath, {encoding: 'utf-8'})
const { compileTemplate, parse, compileScript, compileStyle } = require('@vue/compiler-sfc')
const { stripTemplate, stripScript, stripStyle, genInlineComponentText  } = require('./util')

const md = require('./config')

function md2vue(source) {
  console.log(source)

  return `${source}`

  // md =》 html
  let content = md.render(source)

  const startTag = '<!--element-demo:';
  const startTagLen = startTag.length;
  const endTag = ':element-demo-->';
  const endTagLen = endTag.length;

  let componenetsString = '';
  let id = 0; // demo 的 id
  let output = []; // 输出的内容
  let start = 0; // 字符串开始位置

  let commentStart = content.indexOf(startTag);
  let commentEnd = content.indexOf(endTag, commentStart + startTagLen);

  while (commentStart !== -1 && commentEnd !== -1) {
    output.push(content.slice(start, commentStart));
    const commentContent = content.slice(commentStart + startTagLen, commentEnd);
    // 提取 template
    let html = stripTemplate(commentContent)
    // 提取 script
    let script = stripScript(commentContent)
    let demoComponentContent = genInlineComponentText(html, script, commentContent)
    const demoComponentName = `element-demo${id}`
    output.push(`<${demoComponentName} />`)
    componenetsString += `${JSON.stringify(demoComponentName)}: ${demoComponentContent},`
    id++;
    start = commentEnd + endTagLen;
    commentStart = content.indexOf(startTag, start);
    commentEnd = content.indexOf(endTag, commentStart + startTagLen);
  }
  let pageScript = '';
  if(componenetsString) {
    pageScript = `<script>
      export default {
        name: 'component-doc',
        components: {
          ${componenetsString}
        }
      }
    </script>`
  }

  return `
    <template>
      <section class="content element-doc">
        ${output.join('')}
      </section>
    </template>
    ${pageScript}
  `
}

module.exports = md2vue
