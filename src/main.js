/**
 * 虚拟dom实现原理
 */
import {createElement, render, renderDom} from './element.js'
import diff from './diff.js'

// 创建虚拟dom
let virtualDom1 = createElement('ul', {class: 'ul'}, [
  createElement('li', {class: 'li'}, ['1']),
  createElement('li', {class: 'li'}, ['2']),
  createElement('li', {class: 'li'}, ['3']),
])

let virtualDom2 = createElement('ul', {class: 'list'}, [
  createElement('li', {class: 'li'}, ['a']),
  createElement('li', {class: 'li'}, ['2']),
  createElement('li', {class: 'li'}, ['c']),
])

// 虚拟dom 转变为真实的dom
// let dom = render(virtualDom)

// 将真实的dom插入到页面
// renderDom(dom)

// Dom diff 比较虚拟dom的区别
// 作用，通过比较两个dom，创建补丁。然后更新dom
// dom diff通过对象比较，返回patch对象 

// dom diff优化：
// 1. 同级别对比
// 2. key
// 遍历方式：先序深度优先遍历

let patchs = diff(virtualDom1, virtualDom2)




