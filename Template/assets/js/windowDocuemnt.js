// WINDOW / DOCUMENT EVENTS

// Completely Loaded
window.addEventListener('load', function() {
	// Loading
	$loading.style.opacity = '0';
	setTimeout(()=>{
		$loading.style.display = 'none';
	}, 1000);
	NProgress.done();

	// Nav slide down
	const validationNav = e => {
		if (e.matches) {
			$nav.style.height = '0px';
			$navToggle.addEventListener('click', navToggle);
		}else{
			$nav.style.height = 'auto';
			$nav.classList.remove('drop');
			$navToggle.classList.remove('open', 'close');
			$navToggle.removeEventListener('click', navToggle);
		}
	}
	$desktopBpSm.addListener(validationNav);
	validationNav($desktopBpSm);

	// Header Height
	headerH = $header.offsetHeight;

	const validationHeader = e => {
		if (e.matches) {
			$header.classList.add('header-active');
		}else{
			if(document.documentElement.scrollTop == 0){	
				$header.classList.remove('header-active');
			}
		}
	}
	$desktopBpSm.addListener(validationHeader);
	validationHeader($desktopBpSm);

	// Chat none
	chatNone();
});

//DOM Loaded
// window.addEventListener('DOMContentLoaded', function() {
// });


// Window resize
window.addEventListener('resize', function(){
	// ScrollSpy
	$section.forEach((e) => {
		sections[e.id] = e.offsetTop;
	});
	scrollSpy();
});

//Document Scroll
document.addEventListener('scroll', function(){
	// ScrollSpy
	scrollSpy();

	// Cambiar color
	const validationHeaderScroll = e => {
		if (!e.matches) {
			if(scrollPosition > 0){	
				$header.classList.add('header-active');
			}else{
				$header.classList.remove('header-active');
			}
		}
	}
	$desktopBpSm.addListener(validationHeaderScroll);
	validationHeaderScroll($desktopBpSm);

})