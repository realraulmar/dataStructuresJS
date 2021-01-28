class Node {
  constructor(value) {
    this.value = value
    this.next = null
    this.prev = null
  }
}

class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    }
    this.tail = this.head

    this.length = 1
  }
  append(value) {
    const newNode = new Node(value)
    newNode.prev = this.tail
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }
  prepend(value) {
    const newHead = new Node(value)
    newHead.next = this.head
    newHead.prev = null
    this.head.prev = newHead
    this.head = newHead
    this.length++
    return this
  }
  insert(index, value) {
    if(index >= this.length) {
      return this.append(value)
    } else if(index <= 0) {
      return this.prepend(value)
    }

    const newNode = new Node(value)
    const firstPointer = this.getIndex(index - 1)
    const holdingPointer = firstPointer.next
    firstPointer.next = newNode
    newNode.next = holdingPointer
    newNode.prev = firstPointer
    holdingPointer.prev = newNode
    this.length++
    return this
  }
  getIndex(index) {
    let counter = 0
    let currentNode = this.head
    while(counter !== index) {
      currentNode = currentNode.next
      counter++
    }
    return currentNode
  }
  remove(index) {
    if(index >= this.length || index < 0) {
      return console.error(`No existe el nodo ${index}`)
    }
    const beforeNodeToRemove = this.getIndex(index - 1)
    const nodeToRemove = this.getIndex(index)
    const holdingPointer = nodeToRemove.next
    beforeNodeToRemove.next = holdingPointer
    holdingPointer.prev = beforeNodeToRemove
    this.length--
    return this
  }
}

let myDoublyLinkedList = new MyDoublyLinkedList(1)

myDoublyLinkedList.append(2)
myDoublyLinkedList.append(3)
myDoublyLinkedList.append(4)
myDoublyLinkedList.prepend(0)
myDoublyLinkedList.insert(3, 2.5)
myDoublyLinkedList.remove(3)
