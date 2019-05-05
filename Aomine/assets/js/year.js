// Year
class Year{
	constructor(object){
		this.id=document.getElementById(object.id);
		this.date=new Date();

	}
	getYear(){
		this.id.innerHTML=this.date.getFullYear();
	}
}