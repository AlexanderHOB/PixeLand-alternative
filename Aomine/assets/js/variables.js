// VARIABLES

//Body
const $body = document.body;

// Loading
const $loading = document.querySelector('.loading');

//Nav
const $header = document.querySelector('.header'),
$navToggle = document.querySelector('.nav-toggle'),
$nav = document.querySelector('.nav'),
$navLinks = document.querySelectorAll('.nav-link'),
$navItems = document.querySelectorAll('.nav-item'),
$section = document.querySelectorAll('section');
var headerH,
navH,
navToggleStatus = 'open',
sections = [],
scrollPosition;

// Breakpoints
$desktopBpSm = window.matchMedia('only screen and (max-width: 767px)');


//ScrollSpy
$section.forEach((e) => {
	sections[e.id] = e.offsetTop;
});

// Messenger Service
const $messenger = document.querySelector('.messenger'),
$messengerToggle = document.querySelector('.messenger-toggle'),
$messengerFacebookM = document.querySelector('.messenger-facebook-m'),
$messengerChat = document.querySelector('.messenger-chat');