// VARIABLES DOM
const $body = document.body,
$nav = document.querySelector('.nav'),
$navItems = document.querySelectorAll('.nav-item');

// BREAKPOINTS
const $desktopBpMd = window.matchMedia('only screen and (max-width: 991px)');

// INSTANCIANDO OBJETOS

// Loader
const loader = new Loader({
	id: 'loader',
	nixe: '.loader-nixe'
});
// loader.nixeLoad();

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

// portafolio-slider
const portafolioSlider = new FadeSlider({
	sliderImg: '.slider-img',
	nextItem: '.slider-arrow-next',
	previousItem: '.slider-arrow-previous',
	interval: 5000,
	sliderActive: 'slider-active'
});

// Blog
const blogLeerMas = new Blog({
	blogPostText: '.blog-post-text',
	btnLeerMas: '.btn-leer-mas'
});

// Messenger
// const messenger = new Messenger({
// 	body: $body,
// 	messenger: '.messenger',
// 	messengerToggle: '.messenger-toggle',
// 	messengerFacebookM: '.messenger-facebook-m',
// 	messengerChat: '.messenger-chat'
// });
// messenger.init();

//year
const year=new Year({
	id: 'year'
})

// ON LOAD
window.addEventListener('load', function(){
	// Loader
	// loader.changeMarker();
	loader.nixeDone();

	// Scrollspy
	scrollspy.init();

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
	scrollspy.init();
});

//DOM LOADED
window.addEventListener('DOMContentLoaded', function(){
	// portafolio-slider
	portafolioSlider.init();

	// BLog Leer más
	blogLeerMas.init(scrollspy);

	// Year
	year.getYear();

	// Messenger
	// messenger.chatNone();
});

// MEDIA QUERIES
// MQ Header
const headerMQ = e => {
	if (e.matches) {
		loader.start();
	}else{
		loader.start();
	}
}

$desktopBpMd.addListener(headerMQ);
headerMQ($desktopBpMd);

// MQ Sidenav
const sidenavMQ = e => {
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

$desktopBpMd.addListener(sidenavMQ);
sidenavMQ($desktopBpMd);

// MQ Nixe
const nixeMQ = e => {
	if (e.matches) {
		nixe.changeValues({
			nixe: '.nixe-responsive',
			nixeImg1: 'assets/img/nixe/Nixe-responsive-up.png',
			nixeImg2: 'assets/img/nixe/Nixe-responsive.png'
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


