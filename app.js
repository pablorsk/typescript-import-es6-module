"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var somestuff = require('animal_module_example');
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log('Slithering...');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(somestuff.Animal));
var sam = new Snake('Sammy the Python');
sam.move();
var animal_module_example_1 = require('animal_module_example');
var mybox = new animal_module_example_1.Things.Box();
console.log('mybox size:', mybox.size);
