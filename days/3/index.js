const common = require('../../common');
let input = common.readInput('./days/3/input.txt').split('\n').map(x => x.split(','));
console.log(input);
let positions = [];
function part1() {
    input.forEach(instructions => {
        let tempPositions = [[0, 0]];
        let newPosition = tempPositions[0].slice();
        let index = 1;
        instructions.forEach(instruction =>  
        {
            
            let direction = instruction.slice(0, 1);
            let amount = +instruction.slice(1);
            for (let i = 1; i <= amount; i++) {
                switch (direction) {
                    case 'U': newPosition[1] ++; break;
                    case 'D': newPosition[1] --; break;
                    case 'R': newPosition[0] ++; break;
                    case 'L': newPosition[0] --; break;
                }
                tempPositions.push(newPosition);
                newPosition = tempPositions[index].slice();
                index++;
            }
        })
        positions.push(tempPositions);
        tempPositions = [[0, 0]];
    })
    let intersects = [];
    positions[0].forEach((coords, index) => {
        let intersection = positions[1].find(adjacentCoords => coords[0] === adjacentCoords[0] && coords[1] === adjacentCoords[1]);
        if (intersection && intersection[0] && intersection[1]) intersects.push(coords)
    })
    
    return intersects.map(coords => Math.abs(coords[0]) + Math.abs(coords[1])).sort((a,b) => a-b)[0];
    
}

module.exports = [part1]