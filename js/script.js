
/*****
Job Role Dropdown
*****/

const jobRoleElement = document.querySelector('#title'); 
const textBox = document.querySelector('#other-title'); //creating the textbox for the "other" job title
textBox.hidden = true; //hide the textbox until the "other" job title is selected

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

//declaring variables in the t-shirt section
const designElement = document.querySelector('#design');
const designOptions = document.querySelectorAll('#design option');
const colorDiv = document.querySelector('#colors-js-puns');
colorDiv.hidden = true; //hide the color div until a theme is selected
const colorElement = document.querySelector('#color');
const colorOptions = document.querySelectorAll('#color option');

designElement.addEventListener('change', (e) => {
	for (let i = 0; i < colorOptions.length; i++) {
		if (e.target.value === 'js puns') {
	  		colorDiv.hidden = false;
	  		colorOptions[0].selected = true;
	  		colorOptions[0].hidden = false;
	  		colorOptions[1].hidden = false;
	  		colorOptions[2].hidden = false;
	  		colorOptions[3].hidden = true;
	  		colorOptions[4].hidden = true;
	  		colorOptions[5].hidden = true;
		} else if (e.target.value === 'heart js') {
	  		colorDiv.hidden = false;
	  		colorOptions[3].selected = true;
	  		colorOptions[0].hidden = true;
	  		colorOptions[1].hidden = true;
	  		colorOptions[2].hidden = true;
	  		colorOptions[3].hidden = false;
	  		colorOptions[4].hidden = false;
	  		colorOptions[5].hidden = false;
		} else {
			  colorDiv.hidden = true;
		}
	}
});



/*****
Register for Activities Section
*****/
//declaring variables in the activities section
const activitySection = document.querySelector('.activities');
const activityChoices = document.querySelectorAll('label input');
let totalCostValue = 0; //the initial cost if attending 0 activities
const totalCost = document.createElement('h3');
activitySection.appendChild(totalCost);

activitySection.addEventListener('change', (e) => {
	let clicked = e.target;
	let clickedTime = clicked.getAttribute('data-day-and-time'); //finding the day and time of the clicked activity
	for (let i = 0; i < activityChoices.length; i++) {
		const checkboxTime = activityChoices[i].getAttribute('data-day-and-time');
		if (clickedTime === checkboxTime && clicked !== activityChoices[i]) {
			if (clicked.checked) {
        activityChoices[i].disabled = true; //block the user from selecting an activity with the same date and time
      } else {
        activityChoices[i].disabled = false;
      }
		}
	}
	let clickedCost = parseInt(clicked.getAttribute('data-cost')); //change the costs to numerical values
	if (clicked.checked === true) {
		totalCostValue += clickedCost; //add the cost of the selected activity to the totalCostValue variable
	} else {
		totalCostValue -= clickedCost; //subtract the cost of the deselected activity to the totalCostValue variable
	}
	totalCost.textContent = `Total: $${totalCostValue}`;
});



/*****
Payment Info Section
*****/

//declaring variables in the payment info section
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
Name Validation
*****/

const name = document.querySelector('#name');
const nameLabel = document.querySelector('label[for="name"]');
const nameErrorMessage = document.createElement('h4');
nameErrorMessage.innerHTML = 'Please enter your name';
nameErrorMessage.style.color = 'blue';
nameErrorMessage.style.margin = '10px 0 0 0';
nameErrorMessage.hidden = false;
nameLabel.appendChild(nameErrorMessage);

const nameValidator = () => {
	let nameValue = name.value;
	const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[ a-zA-Z]*)*$/;
	if (nameValue.length === 0) {
    name.style.border = '';
    nameErrorMessage.innerHTML = 'Please enter your name';
    nameErrorMessage.style.color = 'blue';
  	nameErrorMessage.hidden = false;
  	return false;
  } else if (nameValue.length > 0 && nameRegex.test(nameValue) === false) {
  	name.style.border = '2.5px solid red';
    nameErrorMessage.innerHTML = 'Please enter a valid name';
    nameErrorMessage.style.color = 'red';
  	nameErrorMessage.hidden = false;
  	return false;
  } else {
  	name.style.border = '';
    nameErrorMessage.hidden = true;
    return true;
  }
}

name.addEventListener('keyup', nameValidator);



/*****
Email Validation
*****/

const email = document.querySelector('#mail');
const emailLabel = document.querySelector('label[for="mail"]');
const emailErrorMessage = document.createElement('h4');
emailErrorMessage.innerHTML = 'Please enter your email address';
emailErrorMessage.style.color = 'blue';
emailErrorMessage.style.margin = '10px 0 0 0';
emailErrorMessage.hidden = false;
emailLabel.appendChild(emailErrorMessage);

const emailValidator = () => {
 	let emailValue = email.value;
 	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailValue.length === 0) {
    email.style.border = '';
    emailErrorMessage.innerHTML = 'Please enter your email address';
    emailErrorMessage.style.color = 'blue';
  	emailErrorMessage.hidden = false;
  	return false;
  } else if (emailValue.length > 0 && emailRegex.test(emailValue) === false) {
  	email.style.border = '2.5px solid red';
    emailErrorMessage.innerHTML = 'Please enter a valid email address';
    emailErrorMessage.style.color = 'red';
  	emailErrorMessage.hidden = false;
  	return false;
  } else {
  	email.style.border = '';
    emailErrorMessage.hidden = true;
    return true;
  }
}

email.addEventListener('keyup', emailValidator);



/*****
Activities Validation
*****/

const activityLabel = document.querySelector('.activities legend');
const activityErrorMessage = document.createElement('h5');
activityErrorMessage.innerHTML = 'You must select at least one activity';
activityErrorMessage.style.margin = '10px 0 -5px 0';
activityErrorMessage.hidden = true;
activityLabel.appendChild(activityErrorMessage);

const activityValidator = () => {
  for (let i = 0; i < activityChoices.length; i++) {
    if (activityChoices[i].checked) {
      activityErrorMessage.hidden = true;
      return true;
    }
  }
  activityErrorMessage.style.color = 'red';
  activityErrorMessage.hidden = false;
  return false;
}

activitySection.addEventListener('click', activityValidator);



/*****
Payment Validation
*****/

//Credit Card Number Validation
const cardNumberInput = document.querySelector('#cc-num');
const cardNumberErrorMessage = document.createElement('h5');
cardNumberErrorMessage.innerHTML = 'The card number must be between 13 and 16 digits long';
cardNumberErrorMessage.hidden = true;
creditCard.appendChild(cardNumberErrorMessage);

const creditCardNumberValidator = () => {
	let cardValue = /^\d{13,16}$/;
	if (cardValue.test(cardNumberInput.value) === true) {
		cardNumberInput.style.border = '';
		cardNumberErrorMessage.hidden = true;
		return true;
	} else {
		cardNumberInput.style.border = '2.5px solid red';
		cardNumberErrorMessage.style.color = 'red';
		cardNumberErrorMessage.hidden = false;
		return false;
	}
}

cardNumberInput.addEventListener('keyup', creditCardNumberValidator);


//Zip Code Validation
const zipCodeInput = document.querySelector('#zip');
const zipCodeErrorMessage = document.createElement('h5');
zipCodeErrorMessage.innerHTML = 'The zip code must be 5 digits long';
zipCodeErrorMessage.hidden = true;
creditCard.appendChild(zipCodeErrorMessage);

const zipCodeValidator = () => {
	let zipCodeValue = /^\d{5}$/;
	if (zipCodeValue.test(zipCodeInput.value) === true) {
		zipCodeInput.style.border = '';
		zipCodeErrorMessage.hidden = true;
		return true;
	} else {
		zipCodeInput.style.border = '2.5px solid red';
		zipCodeErrorMessage.style.color = 'red';
		zipCodeErrorMessage.hidden = false;
		return false;
	}
}

zipCodeInput.addEventListener('keyup', zipCodeValidator);


//CVV Validation
const cvvInput = document.querySelector('#cvv');
const cvvErrorMessage = document.createElement('h5');
cvvErrorMessage.innerHTML = 'The CVV number must be 3 digits long';
cvvErrorMessage.hidden = true;
creditCard.appendChild(cvvErrorMessage);

const cvvValidator = () => {
	let cvvValue = /^\d{3}$/;
	if (cvvValue.test(cvvInput.value) === true) {
		cvvInput.style.border = '';
		cvvErrorMessage.hidden = true;
		return true;
	} else {
		cvvInput.style.border = '2.5px solid red';
		cvvErrorMessage.style.color = 'red';
		cvvErrorMessage.hidden = false;
		return false;
	}
}

cvvInput.addEventListener('keyup', cvvValidator);



/*****
Prevent form submission if one the validators is invalid
*****/

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
	
  if (!nameValidator()) {
    e.preventDefault();
    name.style.border = '2.5px solid red';
  	nameErrorMessage.innerHTML = 'Please enter a valid name';
  	nameErrorMessage.style.color = 'red';
  	nameErrorMessage.hidden = false;
  }

  if (!emailValidator()) {
    e.preventDefault();
    email.style.border = '2.5px solid red';
  	emailErrorMessage.innerHTML = 'Please enter a valid email address';
  	emailErrorMessage.style.color = 'red';
  	emailErrorMessage.hidden = false;
  }

  if (!activityValidator()) {
    e.preventDefault();
  }

  if (paymentElement.value === 'credit card') {
  	if (!creditCardNumberValidator()) {
	    e.preventDefault();
	  }

	  if (!zipCodeValidator()) {
	    e.preventDefault();
	  }

	  if (!cvvValidator()) {
	    e.preventDefault();
	  }
  }

})