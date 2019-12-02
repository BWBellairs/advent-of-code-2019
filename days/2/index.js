const common = require('../../common.js');

let input = common.readInput('./days/2/input.txt').split(',').map(val => +val);
let inputCopy = input.slice();
input.splice(1, 2, 12, 2); // Task set to change some values in input
function part1() {
    let pointerPosition = 0;
    let opcode = input[0];
    
    function fetch(amount, positions=false) {
        let toReturn = [];
        for (let i = 0; i < amount; i++) {
            pointerPosition ++;
            let position = input[pointerPosition]
            toReturn.push(positions ? position : input[position])
        }
        return toReturn;
    }
    let value;
    do {
        switch (opcode) {
            case 1: {
                value = common.sum(fetch(2));
                input[fetch(1, true)[0]] = value;
                break;
            }
            case 2: {
                value = common.multiply(fetch(2));
                input[fetch(1, true)[0]] = value;
                break;
            }
        }
        pointerPosition ++;
        opcode = input[pointerPosition]
    } while (opcode !== 99)
    return input[0];
}


function part2() {
    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            input = inputCopy.slice();
            input.splice(1, 2, i, j);
            if (part1() === 19690720) return 100 * i + j;
        }
    }

}

module.exports = [part1, part2]