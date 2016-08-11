// *********************
// importing all modules
// *********************

import * as somestuff from 'animal_module_example';

class Snake extends somestuff.Animal {

    constructor(name: string) { super(name); }

    move(distanceInMeters: number = 5) {
        console.log('Slithering...');
        super.move(distanceInMeters);
    }
}

let sam = new Snake('Sammy the Python');
sam.move();

// ***************************
// importing a specific module
// ***************************

import { Things } from 'animal_module_example';
let mybox = new Things.Box();
console.log('mybox size:',  mybox.size);
