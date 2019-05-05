class Typewriter {
	constructor(object){
		this.output = document.querySelector(object.id);
		this.texts = object.text;
		this.countText = 0;
		this.text = this.texts[this.countText];
		this.count = this.text.length;
		this.max = this.count;
		this.countTextTotal = this.texts.length - 1;
		this.output.innerHTML = this.text;
	}

	init(){
		setTimeout(()=>{
			this.requestTwo = setInterval(() => this.loopTwo(--this.count), 60);
		}, (((this.max - 1) * 60)  + 60) + 3000);
	}

	loopOne(count){
		let nowLeter = (-count + (this.max - 1)) % this.max;
		this.output.innerHTML += this.text[nowLeter];
		if (count <= 0) {
			clearInterval(this.requestOne);
			this.count = this.text.length;
			setTimeout(()=>{
				this.requestTwo = setInterval(() => this.loopTwo(--this.count), 60);
			}, (((this.max - 1) * 60)  + 60) + 3000);
		}
	}

	loopTwo(count){
		let newText = this.text.substr(0, count);
		this.output.innerHTML = newText;
		if (count <= 0) {
			clearInterval(this.requestTwo);
			if (this.countText < this.countTextTotal) {
				this.text = this.texts[++this.countText]
			}else {
				this.countText = 0;
				this.text = this.texts[this.countText]
			}
			this.count = this.text.length;
			this.max = this.count;
			this.requestOne = setInterval(() => this.loopOne(--this.count), 60);
		}
	}
}