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

// ON SCROLL
// window.addEventListener('scroll', function(){
// })

// ON RESIZE
// window.addEventListener('resize', function(){
// });

//DOM LOADED
// window.addEventListener('DOMContentLoaded', function(){
// });


