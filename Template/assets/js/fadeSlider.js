class FadeSlider {
	constructor(object){
		this.sliderImg = document.querySelectorAll(object.sliderImg),
		this.nextItem = document.querySelector(object.nextItem),
		this.previousItem = document.querySelector(object.previousItem),
		this.interval = object.interval;
		this.sliderActive = object.sliderActive;
		this.sliderCount = 0;
		this.sliderIndex = 0;
		this.controllerIndex = 0;
	}

	init(){
		this.autoPlay = setInterval(()=>{
			this.showNextItem();
		}, this.interval);
		this.sliderImgCount = this.sliderImg.length - 1;
		this.nextItem.addEventListener('click', ()=>{
			this.showNextItem();
		});
		this.previousItem.addEventListener('click', () => {
			this.showPreviousItem();
		});
	}

	showNextItem(){
		this.sliderImg[this.sliderCount].classList.remove(this.sliderActive);
		if (this.sliderCount < this.sliderImgCount) {
			this.sliderCount++;
		}else {
			this.sliderCount = 0;
		}
		this.sliderImg[this.sliderCount].classList.add(this.sliderActive);
		clearInterval(this.autoPlay);
		this.autoPlay = setInterval(()=>{
			this.showNextItem()
		}, this.interval);
	}

	showPreviousItem(){
		this.sliderImg[this.sliderCount].classList.remove(this.sliderActive);
		if (this.sliderCount > 0) {
			this.sliderCount--;
		}else {
			this.sliderCount = this.sliderImgCount;
		}
		this.sliderImg[this.sliderCount].classList.add(this.sliderActive);
		clearInterval(this.autoPlay);
		this.autoPlay = setInterval(()=>{
			this.showNextItem()
		}, this.interval);
	}
}