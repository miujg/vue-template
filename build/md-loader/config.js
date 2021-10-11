const mdContainer = require('markdown-it-container');
// 配置参考 https://markdown-it.docschina.org/
const md = require('markdown-it')({
  html: true
})
// 注册插件
md.use(mdContainer, 'demo', {
  validate(params) {
    return params.trim().match(/^demo\s*(.*)$/);
  },
  render(tokens, idx) {
    const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
    if (tokens[idx].nesting === 1) {
      const description = m && m.length > 1 ? m[1] : '';
      const content = tokens[idx + 1].type === 'fence' ? tokens[idx + 1].content : '';
      return `<div>
      ${description ? `<div>${md.render(description)}</div>` : ''}
      <!--element-demo: ${content}:element-demo-->
      `;
    }
    return '</div>';
  }
})
module.exports = md