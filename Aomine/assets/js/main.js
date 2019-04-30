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
	nixe: '.logo-img'
});

// Nixe
const nixe = new Nixe({
	nixe: '.logo-img',
	nixeImg1: 'assets/img/nixe/nixe-hands-up.png',
	nixeImg2: 'assets/img/nixe/Nixe-cartel.png'
});

// Typewriter
const typewriter = new Typewriter({
	id: '#typewriter',
	text: [
	'marca',
	'empresa',
	'idea'
	]
});

// ON LOAD
window.addEventListener('load', function(){
	// Loader
	loader.done();
	NProgress.done();

	// Scrollspy
	scrollspy.ini();

	// Typewriter
	typewriter.init();
});

// ON SCROLL
window.addEventListener('scroll', function(){
	// Scrollspy
	scrollspy.spy();

	// Header
	header.scroll();

	// Nixe
	nixe.scroll();
})

// ON RESIZE
window.addEventListener('resize', function(){
	// Scrollspy
	scrollspy.ini();
});

//DOM LOADED
// window.addEventListener('DOMContentLoaded', function(){});

// Media Queries
	// Media Queries General
	const sidenavMQ = e => {
		var instances;
		if (e.matches) {
			// Sidenav
			$nav.style.transform = 'translateX(-105%)';
			instances = M.Sidenav.init($nav);
			for(let i of $navItems){
				i.classList.add('waves');
			}
		}else{
			// Sidenav
			$body.style.overflow = '';
			$nav.style.transform = 'translateX(0px)';
			for(let i of $navItems){
				i.classList.remove('waves');
			}
		}
	}

	$desktopBpMd.addListener(sidenavMQ);
	sidenavMQ($desktopBpMd);

	// Media Queries Nixe
	const nixeMQ = e => {
		if (e.matches) {
			nixe.changeValues({
				nixe: '.nixe-responsive',
				nixeImg1: 'assets/img/nixe/Nixe-up.png',
				nixeImg2: 'assets/img/nixe/Nixe.png'
			});
		}else{
			nixe.changeValues({
				nixe: '.logo-img',
				nixeImg1: 'assets/img/nixe/nixe-hands-up.png',
				nixeImg2: 'assets/img/nixe/Nixe-cartel.png'
			});
		}
	}

	$desktopBpMd.addListener(nixeMQ);
	nixeMQ($desktopBpMd);


