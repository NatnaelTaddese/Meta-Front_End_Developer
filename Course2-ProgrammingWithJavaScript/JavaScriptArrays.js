// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake'];

function logDairy(object = dairy) {
    for (var product of object) {
        console.log(product);
    }
}

logDairy(dairy);
// Task 2
const animal = {

canJump: true

};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan(object = bird) {
    for( key of Object.keys(object) ) {
        console.log(key, ": ", object[key])
}
}

birdCan(bird);

// Task 3
function animalCan(object = bird) {
     for( key in object ) {
        console.log(key, ": ", object[key])
}   
}

animalCan(bird);
