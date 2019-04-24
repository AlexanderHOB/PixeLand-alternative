// LOADER

// Loader
class Loader {

	constructor(object) {
		this.loader = document.getElementById(object.id);
	}

	done() {
		this.loader.style.opacity = '0';
		setTimeout(()=>{
			this.loader.style.display = 'none';
		}, 1000);
	};
}