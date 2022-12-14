let globalSubmitted = false;
function validate(isTrue = false) {
	let firstName = document.getElementById("first-name").value;
	let lastName = document.getElementById("last-name").value;
	let email = document.getElementById("email").value;
	let city = document.getElementById("city").value;
	let state = document.getElementById("state").value;
	let zip = document.getElementById("zip").value;
	let TnC = document.getElementById("t-and-c").checked;
	let error = false;

	if (isTrue) {
		globalSubmitted = true;
	}

	if (globalSubmitted) {
		if (firstName.length >= 2) {
			document.getElementById("first-name-invalid").style.display = "none";
			document.getElementById("first-name-valid").style.display = "block";
		} else {
			document.getElementById("first-name-valid").style.display = "none";
			document.getElementById("first-name-invalid").style.display = "block";
			error = true;
		}

		if (lastName.length >= 2) {
			document.getElementById("last-name-invalid").style.display = "none";
			document.getElementById("last-name-valid").style.display = "block";
		} else {
			document.getElementById("last-name-valid").style.display = "none";
			document.getElementById("last-name-invalid").style.display = "block";
			error = true;
		}

		/*
		Email:
		- Include @ - Done
		- Include . - Done
		- At Least 1 Character before @ - Done
		- At Least Two characters after . - Done
		
		*/
		/*
		Includes: Returns True if the String contains that character/substring, return false if not
		IndexOf: Returns index Of first occurrence that character/substring, else return -1
		
		*/
		if (
			email.includes("@") &&
			email.includes(".") &&
			email.indexOf("@") != 0 &&
			email.length - email.indexOf(".") > 2
		) {
			document.getElementById("email-invalid").style.display = "none";
			document.getElementById("email-valid").style.display = "block";
		} else {
			document.getElementById("email-valid").style.display = "none";
			document.getElementById("email-invalid").style.display = "block";
			error = true;
		}

		if (city.length >= 3) {
			document.getElementById("city-invalid").style.display = "none";
			document.getElementById("city-valid").style.display = "block";
		} else {
			document.getElementById("city-valid").style.display = "none";
			document.getElementById("city-invalid").style.display = "block";
			error = true;
		}

		/*
		Zip
		- length = 6
		- All Numbers
	
		// parseInt - returns Number equivalent of String, if can't returns not a number
		// isNaN - returns true if value is NaN
		// !isNaN - returns it is number
		
		*/
		let zipNumber = parseInt(zip);

		if (zip.length === 6 && !isNaN(zipNumber)) {
			document.getElementById("zip-invalid").style.display = "none";
			document.getElementById("zip-valid").style.display = "block";
		} else {
			document.getElementById("zip-valid").style.display = "none";
			document.getElementById("zip-invalid").style.display = "block";
			error = true;
		}

		/**
		 * State
		 
	
		 */ if (state != "None") {
			document.getElementById("state-invalid").style.display = "none";
			document.getElementById("state-valid").style.display = "block";
		} else {
			document.getElementById("state-valid").style.display = "none";
			document.getElementById("state-invalid").style.display = "block";
			error = true;
		}
		/*
		t and c
		*/
		if (TnC) {
			document.getElementById("tnc-invalid").style.display = "none";
		} else {
			document.getElementById("tnc-invalid").style.display = "block";
			error = true;
		}

		/**
		 * Submit
		 *
		 */
		if (!error) {
			// document.getElementById("first-name").value = "";
			// document.getElementById("last-name").value = "";
			// document.getElementById("email").value = "";
			// document.getElementById("city").value = "";
			// document.getElementById("state").value = "";
			// document.getElementById("zip").value = "";
			// document.getElementById("t-and-c").checked = false;

			// or

			let validFeedBack = document.getElementsByClassName("valid-feedback");
			for (let i = 0; i < validFeedBack.length; i++) {
				validFeedBack[i].style.display = "none";
			}

			let invalidFeedBack = document.getElementsByClassName("invalid-feedback");
			for (let i = 0; i < invalidFeedBack.length; i++) {
				invalidFeedBack[i].style.display = "none";
			}
			document.getElementById("registration-form").reset();
		}
	}
}
/*
if no errors
- reset the form
- Alert: Your details have been saved successfully

*/
