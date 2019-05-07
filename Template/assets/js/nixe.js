// NIXE
class Nixe {
	constructor(object){
		this.nixe = document.querySelector(object.nixe);
		this.nixeImg1 = object.nixeImg1;
		this.nixeImg2 = object.nixeImg2;
		this.contador = 0;
	}

	changeValues(object) {
		this.nixe = document.querySelector(object.nixe);
		this.nixeImg1 = object.nixeImg1;
		this.nixeImg2 = object.nixeImg2;
	}
	scroll() {
		this.scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
		if (this.scrollPosition != 0) {
			if (this.contador == 0) {
				this.nixe.src = this.nixeImg2;
				this.contador++;
			}
		}else {
			this.nixe.src = this.nixeImg1;
			this.contador--;
		}
	}
}