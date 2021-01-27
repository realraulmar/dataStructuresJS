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
    this.ne
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

}

let mySinglyLinkedList = new MySinglyLinkedList