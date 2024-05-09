const {Group} = require('../06_object/groups')

class PGroup {
    static empty = new PGroup(new Group())
    #group

    constructor(group) {
        this.#group = group
    }

    add(val) {
        const ret = Group.from(this.#group);
        ret.add(val)
        return new PGroup(ret)
    }

    delete(val) {
        const ret = Group.from(this.#group);
        ret.delete(val)
        return new PGroup(ret)
    }

    has(val) {
        return this.#group.has(val)
    }

    toString(){
        return this.#group.toString()
    }
    
  }
  
  let a = PGroup.empty.add("a");
  let ab = a.add("b");
  let b = ab.delete("a");
  
  console.log(b.has("b"));
  // → true
  console.log(a.has("b"));
  // → false
  console.log(b.has("a"));
  // → false