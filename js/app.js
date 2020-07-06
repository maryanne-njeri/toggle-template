let angleDown = document.getElementById('angleDown');

angleDown.addEventListener('click', function() {
	let showItem = document.querySelector('.sub-items');

	if (showItem.style.display === 'none') {
		showItem.style.display = 'block';
	} else{
		showItem.style.display = 'none';
	}
});


let toggle = document.getElementById('toggle');

toggle.addEventListener('click', function() {
	let aside = document.querySelector('.sideBar');

	if (aside.style.display === 'none') {
		aside.style.display = 'block';
	} else{
		aside.style.display = 'none';
	}
});