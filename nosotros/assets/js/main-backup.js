// INSTANCIANDO OBJETOS

// Loader
const loader = new Loader({
	id: 'loader'
});
NProgress.start();


// ON LOAD
window.addEventListener('load', function(){
	// Loader
	loader.done();
	NProgress.done();
});