// LOADER

// Loader
class Loader {
	marker = 0;
	constructor(object) {
		this.loader = document.getElementById(object.id);
	}

	done() {
		this.loader.style.opacity = '0';
		setTimeout(()=>{
			this.loader.style.display = 'none';
		}, 1000);
		this.marker = 1;
	};

	start(){
		if(this.marker == 1){
			this.loader.style.display = 'flex';
			this.loader.style.opacity = '1';
			setTimeout(()=>{
				this.done();
			}, 1000);
		}
	}
}