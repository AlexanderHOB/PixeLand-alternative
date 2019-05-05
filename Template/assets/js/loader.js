// LOADER

// Loader
class Loader {
	marker = 0;
	constructor(object) {
		this.loader = document.getElementById(object.id);
		this.nixe = document.querySelector(object.nixe);
	}

	nixeDone() {
		this.nixe.style.opacity = '0';
		setTimeout(()=>{
			this.nixe.style.display = 'none';
		}, 1000);
		this.marker = 1;
	}

	done() {
		this.loader.style.opacity = '0';
		setTimeout(()=>{
			this.loader.style.display = 'none';
			NProgress.done();
		}, 1000);
	};

	start(){
		if(this.marker == 1){
			NProgress.start();
			this.loader.style.display = 'flex';
			this.loader.style.opacity = '1';
			setTimeout(()=>{
				this.done();
			}, 1000);
		}
	}
}