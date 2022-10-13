export default class Robot {
	// name, legs are variables of the constructor
	constructor(name, legs) {
		// "this" provides context for variables within the class to be used later as variables
		this.name = name;
		this.legs = legs;

		console.log(`I am ${this.name}. Thank you creator.`);
	}

	// Functions within classes are called methods
	sayHi() {
		console.log(`Hello! My name is ${this.name}`);
	}
}
