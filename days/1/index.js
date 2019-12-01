const common = require('../../common.js');

module.exports = {
    run: () => {
        let masses = common.parseNumberFile('./days/1/input.txt');
        return masses.reduce( (total, mass) => total + (Math.floor(mass / 3) - 2), 0)
    }
}