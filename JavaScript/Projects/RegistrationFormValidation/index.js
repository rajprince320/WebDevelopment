function validate() {
	let firstName = document.getElementById("first-name").value;
	let lastName = document.getElementById("last-name").value;
	let email = document.getElementById("email").value;
	let city = document.getElementById("city").value;
	let state = document.getElementById("state").value;
	let zip = document.getElementById("zip").value;
	let TnC = document.getElementById("t-and-c").checked;

	if (firstName.length >= 2) {
		document.getElementById("first-name-invalid").style.display = "none";
		document.getElementById("first-name-valid").style.display = "block";
	} else {
		document.getElementById("first-name-valid").style.display = "none";
		document.getElementById("first-name-invalid").style.display = "block";
	}

	if (lastName.length >= 2) {
		document.getElementById("last-name-invalid").style.display = "none";
		document.getElementById("last-name-valid").style.display = "block";
	} else {
		document.getElementById("last-name-valid").style.display = "none";
		document.getElementById("last-name-invalid").style.display = "block";
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
	}
}
