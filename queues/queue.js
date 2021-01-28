class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class Queue {
  constructor() {
    this.front = null
    this.back = null
    this.length = 0
  }
  enqueue(value) {
    const newNode = new Node(value)

    if(this.length === 0) {
      this.front = newNode
      this.back = newNode
    } else {
      this.back.next = newNode
      this.back = newNode
    }
    this.length++
    return this
  }
  dequeue() {
    if(this.length <= 0) {
      this.back = null
      return console.error('There are no nodes to dequeue')
    }
    const nodeToRemove = this.front
    this.front = this.front.next
    this.length--
    return nodeToRemove
  }
  peek() {
    return this.front
  }
}

let myQueue = new Queue()

myQueue.enqueue(1)
myQueue.enqueue(2)
myQueue.enqueue(3)
myQueue.enqueue(4)
myQueue.peek()