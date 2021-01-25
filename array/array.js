class MyArray {
  constructor() {
    this.length = 0
    this.data = {}
  }
  get(index) {
    console.log(this.data[index])
    return this.data[index]
  }
  push(item) {
    this.data[this.length] = item
    this.length++
    console.log(this.data)
    return this.data
  }
  pop() {
    const lastItem = this.data[this.length - 1]
    delete this.data[this.length - 1]
    this.length--
    console.log(lastItem)
    return lastItem
  }
  delete(index) {
    const item = this.data[index]
    this.shiftIndex(index)
    
    console.log(this.data)
    return item
  }
  shiftIndex(index) {
    for(let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]
    }
    delete this.data[this.length - 1]
    this.length--
  }
  shift() {
    const firstItem = this.data[0]
    this.shiftIndex(0)
    console.log(firstItem)
    return firstItem
  }
  unshift(item) {
    for(let i = this.length - 1; i >= 0; i--) {
      this.data[i + 1] = this.data[i]
    }
    this.data[0] = item
    this.length++
    console.log(this.data)
    return this.data
  }
}

const myArray = new MyArray()

myArray.push('Raúl')
myArray.push('Daniela')
myArray.push('Andrea')
myArray.shift()
myArray.unshift('Karla')

