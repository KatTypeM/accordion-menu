// Theme Name: Accordion menu
// Author: Jason DeBay


// Javascript

const radioUnchecked = document.querySelectorAll("input[name=accordion-group]");
radioUnchecked.forEach(function(e){
	e.addEventListener("focusout", (event) => {
		e.checked = false;
	});
});


