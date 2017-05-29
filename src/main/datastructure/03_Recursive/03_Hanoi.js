'use strict';
var Stack = require('../01_Stack/01_Stack.js');

class Hanoi {

    print(from, to) {
        console.log(from+'번 기둥 맨 위의 원판을 '+to+'번 기둥으로 이동');
    }

    stackExecute(n, from, by, to) {
        let stack = new Stack();
        while(true) {
            while(n > 1) {
                stack.push(to);
                stack.push(by);
                stack.push(from);
                stack.push(n);
                n--;
                stack.push(to);
                to = by;
                by = stack.pop();
            }

            this.print(from, to);

            if(!stack.isEmpty()) {
                n = stack.pop();
                from = stack.pop();
                by = stack.pop();
                to = stack.pop();

                this.print(from, to);

                n--;
                stack.push(from);
                from = by;
                by = stack.pop();
            } else {
                break;
            }
        }
    }

    execute(n, from, by, to) {
        if (n <= 1) {
            this.print(from, to);
            return;
        }
        this.execute(n-1, from, to, by);
        this.print(from, to);
        this.execute(n-1, by, from, to);
    }
}

module.exports = Hanoi;