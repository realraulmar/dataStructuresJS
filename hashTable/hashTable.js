class HashTable {
  constructor(size) {
    this.data = new Array(size)
  }
  hashMethod(key) { // arbitrary hash function
    let hash = 0
    for(let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash
  }
  set(key, value) {
    const address = this.hashMethod(key)
    if(!this.data[address]) {
      this.data[address] = []
    }
    this.data[address].push([key, value])

    console.log(this.data)
    return this.data
  }
  get(key) {
    const address = this.hashMethod(key)
    const currentBucket = this.data[address]
    if(currentBucket) {
      for(let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          console.log(currentBucket[i][1])
          return currentBucket[i][1]
        }
      }
    }
    return undefined
  }
  delete(key) {
    const address = this.hashMethod(key)
    const currentBucket = this.data[address]
    if(currentBucket) {
      for(let i = 0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          const deletedItem = currentBucket[i]
          currentBucket.splice(i,1)
          console.log(deletedItem)
          return deletedItem
        }
      }
    }
    return undefined
  }
  getAllKeys() {
    const keys = []
    for(let bucket of this.data) {
      if(bucket) {
        for(let item of bucket) {
          console.log(item[0])
          keys.push(item[0])
        }
      }
    }
    console.log(keys)
    return keys
  }
}

const myHashTable = new HashTable(50) //generating a 50 slot table

myHashTable.set('raul', 2000)
console.log('************************')
myHashTable.set('diego', 1990)
console.log('************************')
myHashTable.set('mariana', 1998)
console.log('************************')
myHashTable.get('diego')
myHashTable.get('mariana')
myHashTable.get('raul')
console.log('************************')
myHashTable.delete('diego')
console.log('************************')
myHashTable.set('jorge', 1999)
console.log('************************')
myHashTable.set('diego', 1990)
console.log('************************')
myHashTable.getAllKeys()