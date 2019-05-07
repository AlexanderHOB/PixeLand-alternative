// HEADER

class Header {
	constructor(object){
		this.header = document.querySelector(object.header);
		this.active = object.active;
		this.contador = 0;
	}

	scroll() {
		this.scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
		if (this.scrollPosition != 0) {
			if (this.contador == 0) {
				this.contador++;
				this.header.classList.add(this.active);
			}
		}else {
			this.contador--;
			this.header.classList.remove(this.active);
		}
	}
}