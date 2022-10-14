import * as dat from "lil-gui";

export default class Debug {
	constructor() {
		// This will add the GUI if someone adds "#debug" in the window location (URL)
		this.active = window.location.hash === "#debug";

		if (this.active) {
			this.ui = new dat.GUI();
		}
	}
}
