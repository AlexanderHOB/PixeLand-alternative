
class Messenger {
	constructor(object){
		this.body = object.body;
		this.messenger = document.querySelector(object.messenger);
		this.messengerToggle = document.querySelector(object.messengerToggle);
		this.messengerFacebookM = document.querySelector(object.messengerFacebookM);
		this.messengerChat = document.querySelector(object.messengerChat);
	}

	init(){
		this.messengerToggle.addEventListener('click', () => {
			this.body.classList.add('close-helper-body');
			setTimeout(()=>{
				this.body.classList.contains('close-helper-body') ? this.body.classList.add('close-body') : null;
			}, 1);
			this.messenger.classList.add('messenger-up');
			this.messenger.classList.add('messenger-close');
		});

		this.messengerFacebookM.addEventListener('click', () => {
			this.body.classList.add('close-messenger-body');
			setTimeout(()=>{
				this.body.classList.add('close-chat-body');
			}, 1);
			this.messengerChat.classList.add('messenger-chat-up');
			this.messengerChat.style.display = 'block';
		});

		this.body.addEventListener('click', () => {
			if (this.body.classList.contains('close-body') && !this.body.classList.contains('close-messenger-body')) {
				if (this.messenger.classList.contains('messenger-close')) {
					this.messenger.classList.contains('messenger-up') ? this.messenger.classList.remove('messenger-up') : null;
					this.messenger.classList.remove('messenger-close');
					if (this.messengerChat.classList.contains('messenger-chat-up')) {
						this.messengerChat.classList.remove('messenger-chat-up');
						this.messengerChat.classList.add('messenger-chat-down');
						setTimeout(()=>{
							this.chatNone();
						}, 500);
					}
				}
				this.bodyRemove();
			}else if(this.body.classList.contains('close-messenger-body')){
				this.messenger.classList.remove('messenger-up');
				if (this.body.classList.contains('close-chat-body')) {
					this.messenger.classList.remove('messenger-close');
					this.messengerChat.classList.remove('messenger-chat-up');
					this.messengerChat.classList.add('messenger-chat-down');
					setTimeout(()=>{
						this.chatNone();
					}, 500);
					this.bodyRemove();
				}
			}
		});
	}

	chatNone(){
		console.log(this.messengerChat);
		this.messengerChat.style.display = 'none';
		this.messengerChat.classList.contains('messenger-chat-down') ? this.messengerChat.classList.remove('messenger-chat-down'): null;
	}

	bodyRemove(){
		this.body.classList.remove('close-body', 'close-messenger-body', 'close-chat-body', 'close-helper-body');
	}
}