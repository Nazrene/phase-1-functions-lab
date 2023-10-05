function distanceFromHqInBlocks(blocks) {
    return Math.abs(blocks -42);
}

function distanceFromHqInFeet(blocks) {
    return distanceFromHqInBlocks(blocks) *264;
}

function distanceTravelledInFeet(startBlock, endBlock) {
    return Math.abs(startBlock - endBlock) * 264;
}

function calculatesFarePrice(startBlock, endBlock) {
    const distance = distanceTravelledInFeet(startBlock, endBlock);
    
    if (distance<=400) {
        return 0;
    } else if (distance > 400 && distance <= 2000) {
        return (distance -400) * 0.02;
    } else if (distance > 2000 && distance <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}

console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInFeet(43));
console.log(distanceTravelledInFeet(43, 48));
console.log(calculatesFarePrice(43, 48));
console.log(calculatesFarePrice(43, 30));
// Code your solution in this file!
