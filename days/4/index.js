const common = require('../../common.js');

function part1() {
    let total = 0;
    for (let i = 171309; i <= 643603; i++) {
        let iArray = (''+i).split('').map(item => +item);
        if (
            iArray.some((item, index) => item === iArray[index - 1]) &&
            iArray.every((item, index) => item >= iArray[index - 1] || index === 0)
        ) total++;
    }
    return total
}

function part2() {
    let total = 0;
    for (let i = 171309; i <= 643603; i++) {
        let joined = ''+i;
        let iArray = (''+i).split('').map(item => +item);
        if (
            iArray.some(item => !joined.includes((''+item).repeat(3)) && joined.includes((''+item).repeat(2)) ) &&
            iArray.some((item, index) => item === iArray[index - 1]) &&
            iArray.every((item, index) => item >= iArray[index - 1] || index === 0)
        ) total++;
    }
    return total
}

module.exports = [part1, part2];