// LOADER

// Loader
class Loader {
	constructor(object) {
		this.loader = document.getElementById(object.id);
	}
	start() {
		window.addEventListener('load', ()=>{
			this.loader.style.opacity = '0';
			setTimeout(()=>{
				this.loader.style.display = 'none';
			}, 1000);
		});
	};
}

// nProgress
NProgress.start();
window.addEventListener('load', ()=>{
	NProgress.done();
});