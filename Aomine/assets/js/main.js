// Variables DOM
const $body = document.body,
$nav = document.querySelector('.nav'),
$navItems = document.querySelectorAll('.nav-item');

// Breakpoints
const $desktopBpMd = window.matchMedia('only screen and (max-width: 991px)');

// Instanciando Objetos
// Loader
const loader = new Loader({
	id: 'loader'
});
NProgress.start();

// Scrollspy
const scrollspy = new Scrollspy({
	header: '.header',
	sections: 'section',
	active: 'nav-link-active'
});


// On Load
window.addEventListener('load', function(){
	// Loader
	loader.done();
	NProgress.done();

	// Scrollspy
	scrollspy.ini();
});

// On Scroll
window.addEventListener('scroll', function(){
	// Scrollspy
	scrollspy.spy();
})

// On Resize
window.addEventListener('resize', function(){
	// Scrollspy
	scrollspy.ini();
});

//DOM Loaded
window.addEventListener('DOMContentLoaded', function(){
	// Media Queries
	const mql = e => {
		var instances;
		if (e.matches) {
			$nav.style.transform = 'translateX(-105%)';
			instances = M.Sidenav.init($nav);
			for(let i of $navItems){
				i.classList.add('waves');
			}
		}else{
			$body.style.overflow = '';
			$nav.style.transform = 'translateX(0px)';
			for(let i of $navItems){
				i.classList.remove('waves');
			}
		}
	}

	$desktopBpMd.addListener(mql);
	mql($desktopBpMd);
});


