
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
	  		//show the colors that are only available for the "js puns" theme
	  		colorOptions[0].hidden = false;
	  		colorOptions[1].hidden = false;
	  		colorOptions[2].hidden = false;
	  		//hide the colors that are only available for the "I love js" theme
	  		colorOptions[3].hidden = true;
	  		colorOptions[4].hidden = true;
	  		colorOptions[5].hidden = true;
		} else if (e.target.value === 'heart js') {
	  		colorDiv.hidden = false;
	  		colorOptions[3].selected = true;
	  		//hide the colors that are only available for the "js puns" theme
	  		colorOptions[0].hidden = true;
	  		colorOptions[1].hidden = true;
	  		colorOptions[2].hidden = true;
	  		//show the colors that are only available for the "I love js" theme
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
	//looping through all of the activities
	for (let i = 0; i < activityChoices.length; i++) {
		const checkboxTime = activityChoices[i].getAttribute('data-day-and-time'); //finding the day and time of each activity
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
//remove the "select payment method" option in the dropdown, but show the other three
defaultChoice.remove();
creditCard.selected = true;
paypal.hidden = true;
bitcoin.hidden = true;

paymentElement.addEventListener('change', (e) => {
	//only show the credit card information when "credit card" is selected in the dropdown
	if (e.target.value === 'credit card') {
		creditCard.hidden = false;
		paypal.hidden = true;
		bitcoin.hidden = true;
		//only show the paypal information when "paypal" is selected in the dropdown
	} else if (e.target.value === 'paypal') {
		paypal.hidden = false;
		creditCard.hidden = true;
		bitcoin.hidden = true;
		//only show the bitcoin information when "bitcoin" is selected in the dropdown
	} else {
		bitcoin.hidden = false;
		creditCard.hidden = true;
		paypal.hidden = true;
	}
});



/*****
Name Validation
*****/

//declaring variables in the name section
const name = document.querySelector('#name');
const nameLabel = document.querySelector('label[for="name"]');
//creating the error message and appending it below the "name" label
const nameErrorMessage = document.createElement('h4');
nameErrorMessage.innerHTML = 'Please enter your name';
nameErrorMessage.style.color = 'blue';
nameErrorMessage.style.margin = '10px 0 0 0';
nameErrorMessage.hidden = false;
nameLabel.appendChild(nameErrorMessage);

//validating the name value
const nameValidator = () => {
	let nameValue = name.value; //user input
	const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[ a-zA-Z]*)*$/; //the regular expression that the name format must follow
	//conditional statement for when the input is blank
	if (nameValue.length === 0) {
    name.style.border = '';
    nameErrorMessage.innerHTML = 'Please enter your name';
    nameErrorMessage.style.color = 'blue';
  	nameErrorMessage.hidden = false;
  	return false;
  	//conditional statement for when there is an input but it does not follow the regex format
  } else if (nameValue.length > 0 && nameRegex.test(nameValue) === false) {
  	name.style.border = '2.5px solid red';
    nameErrorMessage.innerHTML = 'Please enter a valid name';
    nameErrorMessage.style.color = 'red';
  	nameErrorMessage.hidden = false;
  	return false;
  	//conditional statement for when there is an input and it follows the regex format
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

//declaring variables in the email section
const email = document.querySelector('#mail');
const emailLabel = document.querySelector('label[for="mail"]');
//creating the error message and appending it below the "email" label
const emailErrorMessage = document.createElement('h4');
emailErrorMessage.innerHTML = 'Please enter your email address';
emailErrorMessage.style.color = 'blue';
emailErrorMessage.style.margin = '10px 0 0 0';
emailErrorMessage.hidden = false;
emailLabel.appendChild(emailErrorMessage);

//validating the email value
const emailValidator = () => {
 	let emailValue = email.value; //user input
 	const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //the regular expression that the email format must follow
  //conditional statement for when the input is blank
  if (emailValue.length === 0) {
    email.style.border = '';
    emailErrorMessage.innerHTML = 'Please enter your email address';
    emailErrorMessage.style.color = 'blue';
  	emailErrorMessage.hidden = false;
  	return false;
  	//conditional statement for when there is an input but it does not follow the regex format
  } else if (emailValue.length > 0 && emailRegex.test(emailValue) === false) {
  	email.style.border = '2.5px solid red';
    emailErrorMessage.innerHTML = 'Please enter a valid email address';
    emailErrorMessage.style.color = 'red';
  	emailErrorMessage.hidden = false;
  	return false;
  	//conditional statement for when there is an input and it follows the regex format
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

//declaring the activityLabel variable in the activities section
const activityLabel = document.querySelector('.activities legend');
//creating the error message and appending it below the "activity" label
const activityErrorMessage = document.createElement('h5');
activityErrorMessage.innerHTML = 'You must select at least one activity';
activityErrorMessage.style.margin = '10px 0 -5px 0';
activityErrorMessage.hidden = true;
activityLabel.appendChild(activityErrorMessage);

//validating the activities section
const activityValidator = () => {
  //loop through the activity choices and hide the error message if at least one of the activities is checked
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

//declaring variables in the credit card number section
const cardNumberDiv = document.querySelector('#credit-card').children[0];
const cardNumberInput = document.querySelector('#cc-num');
//creating the error message and appending it below the "cardNumberDiv" variable
const cardNumberErrorMessage = document.createElement('h4');
cardNumberErrorMessage.innerHTML = 'The card number must be between 13 and 16 digits long';
cardNumberErrorMessage.style.marginTop = '0px';
cardNumberErrorMessage.hidden = true;
cardNumberDiv.appendChild(cardNumberErrorMessage);

//validating the credit card number
const creditCardNumberValidator = () => {
 	let cardNumberValue = cardNumberInput.value; //user input
 	let cardNumberRegex = /^\d{13,16}$/; //the regular expression that the credit card number format must follow
  //conditional statement for when the input is blank
  if (cardNumberValue.length === 0) {
    cardNumberInput.style.border = '';
    cardNumberErrorMessage.innerHTML = '';
  	cardNumberErrorMessage.hidden = true;
  	return false;
  	//conditional statement for when there is an input but it does not follow the regex format
  } else if (cardNumberValue.length > 0 && cardNumberRegex.test(cardNumberValue) === false) {
  	cardNumberInput.style.border = '2.5px solid red';
    cardNumberErrorMessage.innerHTML = 'The card number must be between 13 and 16 digits long';
    cardNumberErrorMessage.style.color = 'red';
  	cardNumberErrorMessage.hidden = false;
  	return false;
  	//conditional statement for when there is an input and it follows the regex format
  } else {
  	cardNumberInput.style.border = '';
    cardNumberErrorMessage.hidden = true;
    return true;
  }
}

cardNumberInput.addEventListener('keyup', creditCardNumberValidator);


//Zip Code Validation

//declaring variables in the zip code section
const zipCodeDiv = document.querySelector('#credit-card').children[1];
const zipCodeInput = document.querySelector('#zip');
//creating the error message and appending it below the "zipCodeDiv" variable
const zipCodeErrorMessage = document.createElement('h4');
zipCodeErrorMessage.innerHTML = 'The zip code must be 5 digits long';
zipCodeErrorMessage.style.marginTop = '0px';
zipCodeErrorMessage.hidden = true;
zipCodeDiv.appendChild(zipCodeErrorMessage);

//validating the zip code
const zipCodeValidator = () => {
 	let zipCodeValue = zipCodeInput.value; //user input
 	let zipCodeRegex = /^\d{5}$/; //the regular expression that the zip code format must follow
  //conditional statement for when the input is blank
  if (zipCodeValue.length === 0) {
    zipCodeInput.style.border = '';
    zipCodeErrorMessage.innerHTML = '';
  	zipCodeErrorMessage.hidden = true;
  	return false;
  	//conditional statement for when there is an input but it does not follow the regex format
  } else if (zipCodeValue.length > 0 && zipCodeRegex.test(zipCodeValue) === false) {
  	zipCodeInput.style.border = '2.5px solid red';
    zipCodeErrorMessage.innerHTML = 'The zip code must be 5 digits long';
    zipCodeErrorMessage.style.color = 'red';
  	zipCodeErrorMessage.hidden = false;
  	return false;
  	//conditional statement for when there is an input and it follows the regex format
  } else {
  	zipCodeInput.style.border = '';
    zipCodeErrorMessage.hidden = true;
    return true;
  }
}

zipCodeInput.addEventListener('keyup', zipCodeValidator);


//CVV Validation

//declaring variables in the cvv section
const cvvDiv = document.querySelector('#credit-card').children[2];
const cvvInput = document.querySelector('#cvv');
//creating the error message and appending it below the "cvvDiv" variable
const cvvErrorMessage = document.createElement('h4');
cvvErrorMessage.innerHTML = 'The CVV must be 3 digits long';
cvvErrorMessage.style.marginTop = '0px';
cvvErrorMessage.hidden = true;
cvvDiv.appendChild(cvvErrorMessage);

//validating the cvv
const cvvValidator = () => {
 	let cvvValue = cvvInput.value; //user input
 	let cvvRegex = /^\d{3}$/; //the regular expression that the cvv format must follow
  //conditional statement for when the input is blank
  if (cvvValue.length === 0) {
    cvvInput.style.border = '';
    cvvErrorMessage.innerHTML = '';
  	cvvErrorMessage.hidden = true;
  	return false;
  	//conditional statement for when there is an input but it does not follow the regex format
  } else if (cvvValue.length > 0 && cvvRegex.test(cvvValue) === false) {
  	cvvInput.style.border = '2.5px solid red';
    cvvErrorMessage.innerHTML = 'The CVV must be 3 digits long';
    cvvErrorMessage.style.color = 'red';
  	cvvErrorMessage.hidden = false;
  	return false;
  	//conditional statement for when there is an input and it follows the regex format
  } else {
  	cvvInput.style.border = '';
    cvvErrorMessage.hidden = true;
    return true;
  }
}

cvvInput.addEventListener('keyup', cvvValidator);



/*****
Prevent form submission if one the validators is invalid
*****/

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {

  if (!nameValidator()) {
    //prevent the form from submitting if the nameValidator function is false
    e.preventDefault();
    //additional styling for the name section
    name.style.border = '2.5px solid red';
  	nameErrorMessage.innerHTML = 'Please enter a valid name';
  	nameErrorMessage.style.color = 'red';
  	nameErrorMessage.hidden = false;
  }

  if (!emailValidator()) {
  	//prevent the form from submitting if the emailValidator function is false
    e.preventDefault();
   	//additional styling for the email section
    email.style.border = '2.5px solid red';
  	emailErrorMessage.innerHTML = 'Please enter a valid email address';
  	emailErrorMessage.style.color = 'red';
  	emailErrorMessage.hidden = false;
  }

  if (!activityValidator()) {
    //prevent the form from submitting if the activityValidator function is false
    e.preventDefault();
  }

  if (paymentElement.value === 'credit card') {
  	if (!creditCardNumberValidator()) {
	   	//prevent the form from submitting if the creditCardNumberValidator function is false
	    e.preventDefault();
	    //additional styling for the credit card number section
	    cardNumberInput.style.border = '2.5px solid red';
	  	cardNumberErrorMessage.innerHTML = 'The card number must be between 13 and 16 digits long';
	  	cardNumberErrorMessage.style.color = 'red';
	  	cardNumberErrorMessage.hidden = false;
	  }

	  if (!zipCodeValidator()) {
	    //prevent the form from submitting if the zipCodeValidator function is false
	    e.preventDefault();
	    //additional styling for the zip code section
	    zipCodeInput.style.border = '2.5px solid red';
	  	zipCodeErrorMessage.innerHTML = 'The zip code must be 5 digits long';
	  	zipCodeErrorMessage.style.color = 'red';
	  	zipCodeErrorMessage.hidden = false;
	  }

	  if (!cvvValidator()) {
	    //prevent the form from submitting if the cvvValidator function is false
	    e.preventDefault();
	    //additional styling for the cvv section
	    cvvInput.style.border = '2.5px solid red';
	  	cvvErrorMessage.innerHTML = 'The CVV must be 3 digits long';
	  	cvvErrorMessage.style.color = 'red';
	  	cvvErrorMessage.hidden = false;
	  }
  }

})