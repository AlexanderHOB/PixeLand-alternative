//year
const year=new Year({
	id: 'year'
})

//DOM Loaded
window.addEventListener('DOMContentLoaded', function() {
	const loader = new Loader({
		id: 'loader'
	});
	loader.start();

	year.getYear();
});