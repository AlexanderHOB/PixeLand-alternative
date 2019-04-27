// VARIABLES DOM
const $body = document.body,
$nav = document.querySelector('.nav'),
$navItems = document.querySelectorAll('.nav-item');

// BREAKPOINTS
const $desktopBpMd = window.matchMedia('only screen and (max-width: 991px)');

// INSTANCIANDO OBJETOS

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

// Header
const header = new Header({
	header: '.header',
	active: 'header-active',
	nixe: '.logo-img',
	nixeImg1: 'assets/img/nixe-hands-up.png',
	nixeImg2: 'assets/img/Nixe-cartel.png'
});


// ON LOAD
window.addEventListener('load', function(){
	// Loader
	loader.done();
	NProgress.done();

	// Scrollspy
	scrollspy.ini();
});

// ON SCROLL
window.addEventListener('scroll', function(){
	// Scrollspy
	scrollspy.spy();

	// Header
	header.scroll();
})

// ON RESIZE
window.addEventListener('resize', function(){
	// Scrollspy
	scrollspy.ini();
});

//DOM LOADED
window.addEventListener('DOMContentLoaded', function(){
	// Media Queries
	const mql = e => {
		var instances;
		if (e.matches) {
			// Sidenav
			$nav.style.transform = 'translateX(-105%)';
			instances = M.Sidenav.init($nav);
			for(let i of $navItems){
				i.classList.add('waves');
			}

			// Header
			header.setNixe('.brand-img');
		}else{
			// Sidenav
			$body.style.overflow = '';
			$nav.style.transform = 'translateX(0px)';
			for(let i of $navItems){
				i.classList.remove('waves');
			}

			// Header
			header.setNixe('.logo-img');
		}
	}

	$desktopBpMd.addListener(mql);
	mql($desktopBpMd);
});


