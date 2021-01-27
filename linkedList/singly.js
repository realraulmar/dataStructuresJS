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
    let currentNode = new Node(value)
    this.tail.next = currentNode
    this.tail = currentNode
    this.length++

  }
}

let mySinglyLinkedList = new MySinglyLinkedList
mySinglyLinkedList.append(2)
mySinglyLinkedList.append(3)
console.log(mySinglyLinkedList)