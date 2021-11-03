// eslint配置，可查看官网： http://eslint.cn/docs/user-guide/configuring
module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  // 解析器 将代码转换为ESTree
  // parser: "@typescript-eslint/parser",
  // 解析器 配置
  parserOptions: {
    // 配置ecamaScript版本
    ecmaVersion: 2020,
    // parser: "@typescript-eslint/parser",
    // script 默认， 如果代码是esm配置为module
    sourceType: "module",
    // 
  },
  // 第三方插件配置，配置插件名称的时候可以省略 eslint-plugin-的前缀
  plugins: [
    // "@typescript-eslint"
  ],

  // 规则继承
  // 配置文件的路径、可共享配置的名称（eslint:recommended或eslint:all）
  extends: [
    // "eslint:recommended",
    'plugin:vue/vue3-essential',
    '@vue/standard',
    '@vue/typescript/recommended'

    // "plugin:@typescript-eslint/recommended"
    // "plugin:vue/vue3-recommended",
    // "plugin:prettier/recommended",
  ],
  // 规则配置： off(0) 关闭  warn(1) error(2)
  rules: {
    // "@typescript-eslint/no-explicit-any": "off",
    // "@typescript-eslint/ban-types": "off",
    // "eslint-disable-next-line": "off"
    // '@typescript-eslint/no-inferrable-types': 'off'
  },
};
