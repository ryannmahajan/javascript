const {GroupIterator} = require('./group_iterator');

class Group {
    #store = []

    constructor() {
        this[Symbol.iterator] = function(){
            return new GroupIterator((index)=>this.#store[index], () => this.#store.length)
        }
    }

    static from(iterable) {
        let ret = new Group()
        for (let val of iterable) {
            ret.add(val)
        }
        return ret
    }

    has(val) {
        return this.#store.includes(val)
    }

    add(val) {
        if (!this.has(val)) {
            this.#store.push(val)
        }
    }

    delete(val) {
        const index = this.#store.indexOf(val);
        if (index > -1) {
            this.#store.splice(index, 1); 
        }
    }

    toString() {
        return this.#store.toLocaleString()
    }
  }
  
//   let group = Group.from([10, 20]);
//   console.log(group.has(10));
//   // → true
//   console.log(group.has(30));
//   // → false
//   group.add(10);
//   group.delete(10);
//   console.log(group.has(10));
  // → false

// for (let value of Group.from(["a", "b", "c"])) {
// console.log(value);
// }
//   // → a
//   // → b
//   // → c

module.exports = {
    Group
}