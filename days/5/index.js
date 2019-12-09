const common = require('../../common.js');

let input = common.readInput('./days/5/input.txt').split(',').map(val => +val);
let inputCopy = input.slice();

function parseOpCode(input) {
    let inputString = ""+input;
    let modes = inputString.slice(-5, -2).padStart(3, 0).split('').map(mode => mode === '1' ? true : false);
    let opcode = +(inputString.slice(-2));
    console.log(opcode +  ' is opcode, modes are ' + modes);
    return [opcode, modes.reverse()]; // Modes are reversed because they start right to left, left of opcode
}

function part1() {
    let pointerPosition = 0;
    console.log(input)
    let [ opcode, modes ] = parseOpCode(input[0]);

    function fetch(amount, positions) {
        let toReturn = [];
        for (let i = 0; i < amount; i++) {
            pointerPosition ++;
            let position = input[pointerPosition]
            toReturn.push(positions[i] ? position : input[position])
            console.log(toReturn[i] + " was returned in " + (positions[i] ? 'immediate mode' : 'position mode'))
        }
        return toReturn;
    }
    let value;
    let paramInput;
    let paramOutput;
    do {
        switch (opcode) {
            case 1: {
                value = common.sum(fetch(2, modes));
                input[fetch(1, [!modes[2]])[0]] = value;
                break;
            }
            case 2: {
                value = common.multiply(fetch(2, modes));
                input[fetch(1, [!modes[2]])[0]] = value;
                break;
            }
            case 3: {
                input[fetch(1, [!modes[0]])[0]] = 1;
                break;
            }
            case 4: {
                console.log(input[fetch(1, [!modes[0]])[0]]);
                break;
            }
        }
        pointerPosition ++;
        [ opcode, modes ] = parseOpCode(input[pointerPosition]);
    } while (opcode !== 99)
}

module.exports = [part1]