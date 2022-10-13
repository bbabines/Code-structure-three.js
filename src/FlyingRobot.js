import Robot from "./Robot.js";

// This class builds upon the previous class Robot. Do that by using the "extends" syntax
export default class FlyingRobot extends Robot {
	constructor(name, legs) {
		// To override the constructor you need to call "super()".
		super(name, legs);
	}

	sayHi() {
		console.log("something else");
	}

	takeOff() {
		console.log(`Have a good flight ${this.name}`);
	}

	land() {
		console.log(`Welcome back ${this.name}`);
	}
}
