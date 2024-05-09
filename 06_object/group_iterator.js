class GroupIterator {
    #index = 0
    #getIndexFn
    #sizeFn

    constructor(getIndexFn, sizeFn) {
        this.#getIndexFn = getIndexFn
        this.#sizeFn = sizeFn
    }

    next() {
        if (this.#index == this.#sizeFn()) {
            return {done: true}
        }

        this.#index++
        return {
            value: this.#getIndexFn(this.#index - 1),
            done: false
        }
    }
}

module.exports.GroupIterator = GroupIterator