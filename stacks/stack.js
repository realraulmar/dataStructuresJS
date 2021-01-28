class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}
class Stack {
  constructor() {
    this.top = null
    this.bottom = null
    this.length = 0
  }
  peek() {
    return this.top
  }
  push(value) {
  const newNode = new Node(value)

  if(this.length === 0) {
    this.bottom = newNode
    this.top = newNode
  } else {
    this.top.next = newNode
    this.top = newNode
  }
  this.length++
  return this
  }
  pop() {
  if(this.length <= 0) {
    return console.error('There are no nodes in the stack')
  }
  const nodeBeforeTop = this.getOneBeforeTop()
  const nodeToRemove = nodeBeforeTop.next
  // might be optional
  delete nodeBeforeTop.next
  this.top = nodeBeforeTop
  this.length--
  return nodeToRemove
  }
  getOneBeforeTop() {
  let counter = 1
  let currentNode = this.bottom
    while (counter !== this.length - 1) {
      currentNode = currentNode.next
      counter++
    }
  return currentNode
  }
}

let myStack = new Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.pop()