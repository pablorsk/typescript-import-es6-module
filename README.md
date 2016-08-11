# typescript_node_module_example

How to build a [typescript library](https://github.com/pablorsk/typescript-node-module-example) for just install npm -i and extend their classes.

## What to expect with this example?

```bash
npm install animal_module_example
```

```javascript
// app.ts file
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

// importing a specific module

import { Things } from 'animal_module_example';
let mybox = new Things.Box();
console.log('mybox size:',  mybox.size);
```

## Expected result

```bash
$ node app.js
Slithering...
Sammy the Python moved 5m.
Galloping...
Tommy the Palomino moved 34m.
```

## Notes

- All .js files are automatically generated (check tsconfig.json)
