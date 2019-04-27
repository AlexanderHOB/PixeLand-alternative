// HEADER

class Header {
	contador = 0;
	constructor(object){
		this.header = document.querySelector(object.header);
		this.nixe = document.querySelector(object.nixe);
		this.nixeImg1 = object.nixeImg1;
		this.nixeImg2 = object.nixeImg2;
		this.active = object.active;
	}

	setNixe(nixe) {
		this.nixe = document.querySelector(nixe);
	}

	scroll() {
		this.scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
		if (this.scrollPosition != 0) {
			if (this.contador == 0) {
				this.nixe.src = this.nixeImg2;
				this.contador++;
				this.header.classList.add(this.active);
			}
		}else {
			this.nixe.src = this.nixeImg1;
			this.contador--;
			this.header.classList.remove(this.active);
		}
	}
}