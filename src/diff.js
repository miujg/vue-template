/**
 * 比较规则
 * 1. type相同的情况下比较属性。返回补丁格式： {type: 'ATTRS', attrs: {class: 'xx'}}
 * 2. 新的节点不存在{type: 'REMOVE', index: xxx}
 * 3. 节点类型不一样直接替换
 * 4. 节点文本内容不一样 {type: 'TEXT', text: 'xxx'}
 */

import { Element } from './element'

const ATTRS = 'ATTRS'
const TEXT = 'TEXT'

/**
 *  属性比较
 * @param {*} oldAttrs 
 * @param {*} newAttrs 
 */
function diffAttr(oldAttrs, newAttrs) {
  let patch = {}
  for(let key in oldAttrs) {
    if(oldAttrs[key] !== newAttrs[key]) patch[key] = newAttrs[key]
  }

  for(let key in newAttrs) {
    if(!oldAttrs[key]) patch[key] =newAttrs[key]
  }

  return patch
}

function diffChildred(oldNode, newNode, index, patchs) {
  let i = index + 1
  oldNode.children.forEach((child, idx) => {
    walk(child, newNode.children[idx], i, patchs)
  })

}

/**
 * 遍历对象
 * @param {*} oldNode 老节点
 * @param {*} newNode 新节点
 * @param {*} index 节点索引
 * @param {*} patchs 补丁对象
 */
function walk(oldNode, newNode, index, patchs) {
  let currentPatchs = []
  
  if(!(oldNode instanceof Element) && !(newNode instanceof Element)) {
    if(oldNode !== newNode) currentPatchs.push({type: Text, text: newNode})
  } else if(oldNode.type === newNode.type) {
    // 比较属性
    let attrs = diffAttr(oldNode.props, newNode.props)
    Object.keys(attrs).length > 0 ? currentPatchs.push({type: ATTRS, attrs}) : null
    // 比较children
    diffChildred(oldNode, newNode, index, patchs)
  }


  if(currentPatchs.length > 0) patchs[index] = currentPatchs
}

function diff(oldTree, newTree) {
  let patchs = {},
    index = 0

  walk(oldTree, newTree, index, patchs)
  console.log(patchs)

  return patchs
}

export default diff