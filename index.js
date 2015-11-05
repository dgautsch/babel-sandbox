/* jshint esnext:true */

// Classes
class Car {
	constructor(color, type) {
		this.wheels = 4;
		this.attributes = {
			wheels: 4,
			color: color,
			type: type
		};
	}

	getAttributes() {
		console.log('This ' + this.attributes.type + ' has the following attributes: ');
		console.dir(this);
	}
}


var simpleCar = new Car('blue', 'classic coupe');
var simpleTruck = new Car('red', 'truck');

simpleCar.getAttributes();
simpleTruck.getAttributes();

// Extending Classes
class MegaCar extends Car {
	constructor(color, type) {
		super(color, type);
		this.supercharged = true;
	}
	goFaster() {
		console.log('Vroom!!!!');
	}
}

var bugatti = new MegaCar('red', 'really fast car');

bugatti.getAttributes();
bugatti.goFaster();

// Let Variables and Scope
var myVariable = 'something else';
function letTest() {
	let myVariable = 'something';
	console.log(myVariable);
}

letTest();
console.log(myVariable);

// Constants
const API_KEY = "aaas9df89js*#*h8sdfsdfkj";

// API_KEY = ":SLKDFJ:LSKDFJ";

// Static class methods






// Arrow Functions

// Destructuring
