// 1 --> 2 --> 3 --> 4 --> 5 --> null

// Estructura de la linked list
// let singlyLinkedList = {
//   head: {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   }
// }

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class MySinglyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    }
    this.tail = this.head

    this.length = 1
  }
  append(value) {
    const newNode = new Node(value)
    this.tail.next = newNode
    this.tail = newNode
    this.length++
    return this
  }
  prepend(value) {
    const newHead = new Node(value)
    newHead.next = this.head
    this.head = newHead

    this.length++
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
    this.length--
    return this
  }
}

let mySinglyLinkedList = new MySinglyLinkedList(1)
mySinglyLinkedList.append(2)
mySinglyLinkedList.append(3)
mySinglyLinkedList.append(4)
mySinglyLinkedList.prepend(0)
mySinglyLinkedList.insert(3,2.5)
mySinglyLinkedList.remove(3)
console.log(mySinglyLinkedList)