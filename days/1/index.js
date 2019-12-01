const common = require('../../common.js');

let masses = common.parseNumberFile('./days/1/input.txt');

function part1() {
    return masses.reduce( (total, mass) => total + (Math.floor(mass / 3) - 2))
}

function calculateFuel(mass) {
    let totalFuel = 0;
    let dependantFuel = (Math.floor(mass / 3) - 2);
    while (dependantFuel > 0) {
        totalFuel += dependantFuel;
        dependantFuel = (Math.floor(dependantFuel / 3) - 2);
    }
    return totalFuel
}   

function part2() {
    return common.sum( masses.map(mass => calculateFuel(mass) ));
}

module.exports = [part1, part2]