class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }
  insert(value) {
    const newNode = new Node(value)
    if(!this.root) {
      this.root = newNode
    } else {
      let currentNode = this.root
      while(true) {
        if(value < currentNode.value) {
          if(!currentNode.left) {
            currentNode.left = newNode
            return this
          }
          currentNode = currentNode.left
        } else {
          if(!currentNode.right) {
            currentNode.right = newNode
            return this
          }
          currentNode = currentNode.right
        }
      }
    }
  }
  search(value) {
    let currentNode = this.root
    while(value !== currentNode.value) {
      if(value < currentNode.value) {
        if(value === currentNode.left.value) {
          return currentNode.left
        }
        currentNode = currentNode.left
      } else {
        if(value === currentNode.right.value) {
          return currentNode.right
        }
        currentNode = currentNode.right
      }
    }
    return currentNode
  }
}

let myTree = new BinarySearchTree()
myTree.insert(10)
myTree.insert(4)
myTree.insert(20)
myTree.insert(2)
myTree.insert(8)
myTree.insert(17)
myTree.insert(170)