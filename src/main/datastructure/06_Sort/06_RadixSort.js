class RadixSort {
    constructor() {
        this.buckets = [[]];
    }

    sortLSD(array, max) {
        let mod = 10;
        for (let i = 0; i < max; i++, mod *= 10) {
            for (let j = 0; j < array.length; j++) {
                const bucket = parseInt(array[j] % mod); // bucket으로 그루핑하기 위한 모드 연산
                if (this.buckets[bucket] == null ) {
                    this.buckets[bucket] = [];
                }
                this.buckets[bucket].push(array[j]);
            }
            let pos = 0;
            for (let j = 0; j < this.buckets.length; j++) { // buckets 에 저장된 bucket들을 배열에 적용
                let value;
                if (this.buckets[j] != null) {
                    while ((value = this.buckets[j].shift()) != null) {
                        array[pos++] = value;
                    }
                }
            }
        }

        return array;
    }

    sortMSD(array, max) {

    }
}

module.exports = RadixSort;