/*****
Job Role Dropdown
*****/

const jobRoleElement = document.querySelector('#title');
const textBox = document.querySelector('#other-title');
textBox.hidden = true;

jobRoleElement.addEventListener('change', (e) => {
	if (e.target.value == 'other') {
			textBox.hidden = false;
	} else {
			textBox.hidden = true;
	}
});


/*****
T-Shirt Info Section
*****/

let designElement = document.querySelector('#design');
let designOptions = document.querySelectorAll('#design option');
let colorElement = document.querySelector('#color');
let colorOptions = document.querySelectorAll('#color option');
colorElement.hidden = true;


const defaultMessage = document.createElement('option');
defaultMessage.textContent = 'Please select a T-shirt theme';
defaultMessage.selected = true;
colorElement.prepend(defaultMessage);


if (defaultMessage.hidden == false) {
  colorElement.hidden = false;
  for (let i = 0; i < colorOptions.length; i++) {
  	defaultMessage.hidden = true;
  	colorOptions[i].hidden = true;
  }
}


designElement.addEventListener('change', (e) => {
	if (e.target.value = 'js puns') {
		for (let i = 0; i < 3; i++) {
	  	defaultMessage.remove();
	  	colorOptions[i].hidden = false;
  	}
	} else if (e.target.value = 'heart js') {
			for (let i = 0; i >= 3; i++) {
		  	defaultMessage.remove();
		  	colorOptions[i].hidden = false;
	  	}
	} else {
			for (let i = 0; i < colorOptions.length; i++) {
		  	defaultMessage.hidden = false;
		  	colorOptions[i].hidden = true;
	  	}
	}
});

