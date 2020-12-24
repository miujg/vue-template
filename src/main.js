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

let virtualDom2 = createElement('ul', {class: 'ul'}, [
  createElement('li', {class: 'li'}, ['a']),
  createElement('li', {class: 'li'}, ['2']),
  createElement('li', {class: 'li'}, []),
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

// let patchs = diff(virtualDom1, virtualDom2)



/**
 * 节点类定义
 */
class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}


/**
 * 二叉搜索树
 */
class BinarySearchThree {
  constructor() {
    this.root = null
  }

  insert(key) {
    if(this.root == null) {
      // 第一个节点，作为根节点
      this.root = new Node(key)
    } else {
      this.insertNode(this.root, key)
    }
  }

  insertNode(node, key) {
    if( key < node.key ) {
      // 左侧插入
      if(node.left == null) node.left = new Node(key)
      else this.insertNode(node.left, key)
    } else {
      // 右侧插入
      if(node.right == null) node.right = new Node(key)
      else this.insertNode(node.right, key)
    }
  }

  // 中序遍历 左 -》 中 -》 右
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  inOrderTraverseNode(node, callback) {
    // 基线条件
    if(node != null) {
      this.inOrderTraverseNode(node.left, callback)
      callback(node.key)
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  // 先序 中 -》 左 -》 右
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  preOrderTraverseNode(node, callback) {
    if(node != null) {
      callback(node)
      this.preOrderTraverseNode(node.left, callback)
      this.preOrderTraverseNode(node.right, callback)
    }
  }

  // 后序 左-》右-》中
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  postOrderTraverseNode(node, callback) {
    if(node != null) {
      this.postOrderTraverseNode(node.left, callback)
      this.postOrderTraverseNode(node.right, callback)
      callback(node)
    }
  }
  
  // 最小值
  min() {
    // 获取最左边的节点
    
  }
  // 最大值
  max() {
    // 获取右边的节点

  }
  // 特定值
  search(key) {
    return this.searchNode(this.root, key)
  }
  searchNode(node, key) {
    if(node == null) return null
    if(node.key == key) return node
    if(key < node.key) {
      return this.searchNode(node.left, key)
    } else {
      return this.searchNode(node.right, key)
    }
  }
}

const tree = new BinarySearchThree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(6)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)

const printNode = val => val
tree.postOrderTraverse(printNode)

console.log(tree.search(100))








