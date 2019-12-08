const common = require('../../common');
let input = common.readInput('./days/3/input.txt').split('\n').map(x => x.split(','));
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

function part2() {
    function getPoints(instructions) {
        let points = {};
        let position = [0, 0];
        let Steps = 0;
        instructions.forEach((instruction, index) => {
            for (let i = 0; i < +instruction.slice(1); i++ ) {
                switch (instruction.slice(0, 1)) {
                    case 'U': position[1] ++; break;
                    case 'D': position[1] --; break;
                    case 'R': position[0] ++; break;
                    case 'L': position[0] --; break;
                }
                Steps++;
                points[position] = Steps;
            }
            
        })
        return points;
    }
    // Get all coordinates visited from each of the wires
    let [wireOnePoints, wireTwoPoints] = [getPoints(input[0]), getPoints(input[1])];
    // Find intersections by using the coordnates keys
    let allCoordinates = [...Object.keys(wireOnePoints), ...Object.keys(wireTwoPoints)];
    allCoordinates.splice(allCoordinates.indexOf('0,0'), 1);
    // return only duplicate intersections aka intersections
    let intersectionCoordinates = []
    for (let i = 0; i < allCoordinates.length; i++) {
        if (allCoordinates.indexOf(allCoordinates[i]) < i) intersectionCoordinates.push(allCoordinates[i]);
    }
    console.log(intersectionCoordinates)
    // Map the coordinates of intersections into number of steps travelled to that intersection
    // The lowest number of steps to get to it is returned
    let intersectionStepss = intersectionCoordinates.map(item => wireOnePoints[item] + wireTwoPoints[item]);
    // Sort for the lowest Steps
    return intersectionStepss.sort((a,b) => a-b)[0];
}

module.exports = [part1, part2]