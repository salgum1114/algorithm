'use strict';

class Fibonacci {
    constructor() {
        this.save = [];
        this.fibo = [0, 1]
    }

    memoization(n) {
        if(n <= 1) {
            return n;
        } else {
            // 첫번째 방법
            let index = n - 2;
            if(this.save[index]) {
                return this.save[index];
            } else {
                return this.save[index] = this.memoization(n-1) + this.memoization(n-2);
            }

            // 두번째 방법
            // let saved1 = this.save[n - 1] || this.memoization(n - 1);
            // let saved2 = this.save[n - 2] || this.memoization(n - 2);
            // let result = saved1 + saved2;
            // this.save[n] = result;
            // console.log(saved1, saved2, result);
            // return result;
        }
    }

    loopExecute(n) {
        if(n <= 1) {
            return n;
        } else {
            for(var i = 2; i <= n; i++) {
                this.fibo[i] = this.fibo[i-1] + this.fibo[i-2];
            }
            return this.fibo[n];
        }
    }

    execute(n) {
        if(n <= 1) {
            return n;
        } else {
            let result = this.execute(n-1) + this.execute(n-2);
            return result;
        }
    }
}

module.exports = Fibonacci;