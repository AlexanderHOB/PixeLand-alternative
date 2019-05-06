// LOADER

// Loader
class Loader {
	markerOne = 0;
	markerTwo = 0;
	constructor(object) {
		this.loader = document.getElementById(object.id);
		this.nixe = document.querySelector(object.nixe);
	}

	nixeLoad(){
		setTimeout(()=>{
			if(this.markerTwo != 0){
				this.nixeDone();
			}else {
				window.addEventListener('load', function(){
					this.nixeDone();
				});
			}
			
		}, 4000);
	}

	changeMarker(){
		this.markerTwo++;
	}

	nixeDone(){
		this.nixe.style.opacity = '0';
		setTimeout(()=>{
			this.nixe.style.display = 'none';
		}, 1000);
		this.markerOne = 1;
	}

	done() {
		this.loader.style.opacity = '0';
		setTimeout(()=>{
			this.loader.style.display = 'none';
			NProgress.done();
		}, 1000);
	};

	start(){
		if(this.markerOne == 1){
			NProgress.start();
			this.loader.style.display = 'flex';
			this.loader.style.opacity = '1';
			setTimeout(()=>{
				this.done();
			}, 1000);
		}
	}
}