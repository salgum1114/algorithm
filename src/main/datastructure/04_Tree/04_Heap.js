class Heap {
    constructor(params) {
        this.array = [];
        this.size = 0;
    }

    insert(data) {
        if (this.size === 0) {
            this.array[0] = data;
            this.size++;
            return this;
        }

        let lastIndex = this.size++;
        this.array[lastIndex] = data;
        let parentIndex = Math.floor((lastIndex - 1) / 2);
        while (this.array[lastIndex] > this.array[parentIndex]) {
            this.swap(lastIndex, parentIndex);
            lastIndex = parentIndex;
            parentIndex = Math.floor((lastIndex - 1) / 2);
        }
    }

    delete() {
        if (this.size === 0) {
            console.log('No data');
            return this;
        }

        if (this.size === 1) {
            delete this.array[0];
            this.size--;
            return this;
        }

        let deleteNode = this.array[0];
        this.swap(0, this.size-1);
        delete this.array[this.size-1];
        this.size--;

        let root = 0;
        let left;
        let right;
        while (root <= this.size-1) {
            left = (root + 1) * 2 - 1;
            right = (root + 1) * 2;

            if (this.size <= left) {
                break;
            } else if (this.size <= right) {
                if (this.array[root] < this[left]) {
                    this.swap(left, root);
                    root = left;
                } else {
                    break;
                }
            } else {
                if (this.array[root] < this.array[left] && this.array[root] < this.array[right]) {
                    if(this.array[left] < this.array[right]) {
                        this.swap(right, root);
                        root = right;
                    } else {
                        this.swap(left, root);
                        root = left;
                    }
                } else if (this.array[root] < this.array[left]) {
                    this.swap(left, root);
                    root = left;
                } else if (this.array[root] < this.array[right]) {
                    this.swap(right, root);
                    root = right;
                } else {
                    break;
                }
            }
        }

        return deleteNode;
    }

    swap(first, second) {
        let temp = this.array[first];
        this.array[first] = this.array[second];
        this.array[second] = temp;
    }

    print() {
        console.log(this.array);
    }
}

module.exports = Heap;