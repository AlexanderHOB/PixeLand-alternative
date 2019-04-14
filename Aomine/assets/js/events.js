// EVENTS

// Messenger Service
$messengerToggle.addEventListener('click', function(){
	$body.classList.add('close-helper-body');
	setTimeout(()=>{
		$body.classList.contains('close-helper-body') ? $body.classList.add('close-body') : null;
	}, 1);
	$messenger.classList.add('messenger-up');
	$messenger.classList.add('messenger-close');
});

$messengerFacebookM.addEventListener('click', function(){
	$body.classList.add('close-messenger-body');
	setTimeout(()=>{
		$body.classList.add('close-chat-body');
	}, 1);
	$messengerChat.classList.add('messenger-chat-up');
	$messengerChat.style.display = 'block';
});

$body.addEventListener('click' ,function(){
	if (this.classList.contains('close-body') && !this.classList.contains('close-messenger-body')) {
		if ($messenger.classList.contains('messenger-close')) {
			$messenger.classList.contains('messenger-up') ? $messenger.classList.remove('messenger-up') : null;
			$messenger.classList.remove('messenger-close');
			if ($messengerChat.classList.contains('messenger-chat-up')) {
				$messengerChat.classList.remove('messenger-chat-up');
				$messengerChat.classList.add('messenger-chat-down');
				setTimeout(chatNone, 500);
			}
		}
		bodyRemove();
	}else if(this.classList.contains('close-messenger-body')){
		$messenger.classList.remove('messenger-up');
		if (this.classList.contains('close-chat-body')) {
			$messenger.classList.remove('messenger-close');
			$messengerChat.classList.remove('messenger-chat-up');
			$messengerChat.classList.add('messenger-chat-down');
			setTimeout(chatNone, 500);
			bodyRemove();
		}
	}
});