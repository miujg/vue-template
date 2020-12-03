class Element {
  constructor(type, props, children) {
    this.type = type
    this.props = props
    this.children = children
  }
}

function createElement(type, props, children) {
  return new Element(type, props, children)
}

/**
 * 添加属性
 * @param {*} el 真实节点
 * @param {*} key 属性名
 * @param {*} value 属性值
 */
function addAttr(el, key, value) {
  el.setAttribute(key, value)
}

// 虚拟dom 递归转换为真实dom
function render(virtualDom) {
  console.log(virtualDom)
  let el = document.createElement(virtualDom.type)

  Object.keys(virtualDom.props).forEach(key => {addAttr(el, key, virtualDom.props[key])})

  virtualDom.children.forEach(child => {
    child = (child instanceof Element) ? render(child) : document.createTextNode(child)
    el.appendChild(child)
  })
  return el
}

function renderDom(el) {
  document.getElementById('app').appendChild(el)
}

export {
  createElement, render, renderDom, Element
}
