const fs = require('fs');

module.exports = {
    readInput: dir => fs.readFileSync(dir).toString(),
    sum: arr => arr.reduce((a, b) => a + b),
    multiply: arr => arr.reduce((a, b) => a * b),
    parseNumberFile: dir => fs.readFileSync(dir).toString().split('\n').map(x => +x),
    ArrayEquals: (a, b) => {
        if (a === undefined) return false;
        var i = a.length;
        if (i != b.length) return false;
        while (i--) {
            if (typeof a[i] === 'object' && !this.Arrayequals(a[i], b[i])) return false;
            if (a[i] !== b[i]) return false;
        }
        return true;
    }
};