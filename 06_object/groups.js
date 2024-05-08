class Group {
    #store = []

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
  }
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  group.delete(10);
  console.log(group.has(10));
  // → false