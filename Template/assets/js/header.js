// HEADER

class Header {
	contador = 0;
	constructor(object){
		this.header = document.querySelector(object.header);
		this.active = object.active;
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