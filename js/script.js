
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


const defaultMessage = document.createElement('option');
defaultMessage.textContent = 'Please select a T-shirt theme';
defaultMessage.selected = true;
colorElement.insertBefore(defaultMessage, colorElement.firstElementChild);


if (defaultMessage.hidden === false) {
  colorElement.hidden = false;
  for (let i = 0; i < colorOptions.length; i++) {
  	defaultMessage.hidden = true;
  	colorOptions[i].hidden = true;
  }
}


designElement.addEventListener('change', (e) => {

	for (let i = 0; i < colorOptions.length; i++) {
		if (e.target.value === 'js puns') {
	  		colorOptions[0].selected = true;
	  		colorOptions[0].hidden = false;
	  		colorOptions[1].hidden = false;
	  		colorOptions[2].hidden = false;
	  		colorOptions[3].hidden = true;
	  		colorOptions[4].hidden = true;
	  		colorOptions[5].hidden = true;
		} else if (e.target.value === 'heart js') {
	  		colorOptions[3].selected = true;
	  		colorOptions[0].hidden = true;
	  		colorOptions[1].hidden = true;
	  		colorOptions[2].hidden = true;
	  		colorOptions[3].hidden = false;
	  		colorOptions[4].hidden = false;
	  		colorOptions[5].hidden = false;
		} else {
			  	defaultMessage.selected = true;
			  	colorOptions[i].hidden = true;
		}
	}
});



/*****
Register for Activities Section
*****/

const activitySection = document.querySelector('.activities');
const activityChoices = document.querySelectorAll('.activities input');
let totalCostValue = 0;
const totalCost = document.createElement('h3');
activitySection.appendChild(totalCost);

activitySection.addEventListener('change', (e) => {
	let clicked = e.target;
	let clickedTime = clicked.getAttribute('data-day-and-time');
	for (let i = 0; i < activityChoices.length; i++) {
		const checkboxTime = activityChoices[i].getAttribute('data-day-and-time');
		if (clickedTime === checkboxTime && clicked !== activityChoices[i]) {
			if (clicked.checked) {
        activityChoices[i].disabled = true;
      } else {
        activityChoices[i].disabled = false;
      }
		}
	}
	let clickedCost = parseInt(clicked.getAttribute('data-cost'));
	if (clicked.checked === true) {
		totalCostValue += clickedCost;
	} else {
		totalCostValue -= clickedCost;
	}
	totalCost.textContent = `Total: $${totalCostValue}`;
});



/*****
Payment Info Section
*****/

const paymentElement = document.querySelector('#payment');
const paymentMethods = document.querySelectorAll('#payment option');
const defaultChoice = document.querySelector('option[value="select method"]');
const creditCard = document.querySelector('#credit-card');
const paypal = document.querySelector('#paypal');
const bitcoin = document.querySelector('#bitcoin');
defaultChoice.remove();
creditCard.selected = true;
paypal.hidden = true;
bitcoin.hidden = true;

paymentElement.addEventListener('change', (e) => {
	if (e.target.value === 'credit card') {
		creditCard.hidden = false;
		paypal.hidden = true;
		bitcoin.hidden = true;
	} else if (e.target.value === 'paypal') {
		paypal.hidden = false;
		creditCard.hidden = true;
		bitcoin.hidden = true;
	} else {
		bitcoin.hidden = false;
		creditCard.hidden = true;
		paypal.hidden = true;
	}
});



/*****
Form Validation
*****/

name = document.querySelector('#name');

const nameValidator = () => {
	let nameValue = name.value;
	if (nameValue.length > 0) {
		name.style.borderColor = 'white';
		return true;
	} else {
		name.style.borderColor = 'red';
		return false;
	}
}

name.addEventListener('keyup', nameValidator);