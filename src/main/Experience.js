import * as THREE from "three";
import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import Camera from "./Camera.js";

let instance = null;

export default class Experience {
	constructor(canvas) {
		if (instance) {
			return instance;
		}
		instance = this;

		// Global Access.
		window.experience = this;

		// Options
		this.canvas = canvas;

		// Setup
		this.sizes = new Sizes();
		this.time = new Time();
		this.scene = new THREE.Scene();
		this.camera = new Camera(this);

		// Sizes: Resize event
		this.sizes.on("resize", () => {
			this.resize();
		});

		// Time: Tick event
		this.time.on("tick", () => {
			this.update();
		});
	}

	resize() {
		this.camera.resize();
	}

	update() {
		this.camera.update();
	}
}
