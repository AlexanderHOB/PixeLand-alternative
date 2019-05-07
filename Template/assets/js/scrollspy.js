// Scrollspy

class Scrollspy {

	constructor(object) {
		this.header = document.querySelector(object.header),
		this.section = document.querySelectorAll(object.sections);
		this.active = object.active;
		this.sections = [];
	}

	init() {
		this.headerH = this.header.offsetHeight;
		this.section.forEach((e) => {
			this.sections[e.id] = e.offsetTop;
		});
	}

	spy() {
		this.scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
		for (let i in this.sections) {
			if (this.sections[i] <= this.scrollPosition + this.headerH) {
				document.querySelector('.' + this.active).classList.remove(this.active);
				document.querySelector('a[data-spy*=' + i + ']').classList.add(this.active);
			}
		}
	}
}