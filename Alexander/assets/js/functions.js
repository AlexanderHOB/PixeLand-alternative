//FUNCIONES

// nav toggle
function navToggle(){
	// Button animation
	if (this.classList.contains('open')) {
		this.classList.remove(navToggleStatus);
		navToggleStatus = 'close';
	} else if (this.classList.contains('close')) {
		this.classList.remove(navToggleStatus);
		navToggleStatus = 'open';
	}
	void this.offsetWidth;
	this.classList.add(navToggleStatus);

	// Slide down
	navH = $nav.scrollHeight + 'px';
	$nav.classList.toggle('drop');
	$nav.classList.contains('drop') ? $nav.style.height = navH : $nav.style.height = '0px';

}

function navRemove(){
	$nav.style.height = '0px';
	$nav.classList.remove('drop');
	$navToggle.classList.remove(navToggleStatus);
	navToggleStatus = 'close';
	void $navToggle.offsetWidth;
	$navToggle.classList.add(navToggleStatus);

}

// ScrollSpy
function scrollSpy(){
	scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
	for (let i in sections) {
		if (sections[i] <= scrollPosition + headerH) {
			document.querySelector('.nav-link-active').classList.remove('nav-link-active');
			document.querySelector('a[data-spy*=' + i + ']').classList.add('nav-link-active');
		}
	}
}

// Messenger Service
function chatNone(){
	$messengerChat.style.display = 'none';
	$messengerChat.classList.contains('messenger-chat-down') ? $messengerChat.classList.remove('messenger-chat-down'): null;
}

function bodyRemove(){
	$body.classList.remove('close-body', 'close-messenger-body', 'close-chat-body', 'close-helper-body');
}