class Blog {
	constructor(object){
		this.postText = document.querySelectorAll(object.blogPostText),
		this.postBtn = document.querySelectorAll(object.btnLeerMas);
		this.postTextBackUp = [];
		this.postTextNew = [];
		this.postTextCount= [];
		this.postTextIndex = 0;
		this.postTextIndexCount = 0;
		this.postBtnCount = [];
	}

	init(scrollspy){
		for(let i of this.postText){
			if (i.innerHTML.length > 180) {
				this.postTextCount[this.postTextIndexCount] = this.postTextIndex;
				this.postBtnCount[this.postTextIndex] = 0;
				this.postTextBackUp[this.postTextIndex] = i.innerHTML;
				this.postTextNew[this.postTextIndex] = this.postTextBackUp[this.postTextIndex].slice(0, 180)+'...';
				i.innerHTML = this.postTextNew[this.postTextIndex];
				this.postTextIndexCount++;
			}else{
				this.postBtn[this.postTextIndex].style.display = 'none';
			}
			this.postTextIndex++;
		}
		
		for(let i of this.postTextCount){
			this.postBtn[i].addEventListener('click', ()=>{
				if (this.postBtnCount[i] == 0) {
					this.postText[i].innerHTML = this.postTextBackUp[i];
					this.postBtn[i].innerHTML = 'Leer Menos';
					this.postBtnCount[i]++;
				}else{
					this.postText[i].innerHTML = this.postTextNew[i];
					this.postBtn[i].innerHTML = 'Leer Mas';
					this.postBtnCount[i]--;
				}

				scrollspy.init();
			});
		}
	}
}