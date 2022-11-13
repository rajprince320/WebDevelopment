const validation = (values) => {
	let errors = {};
	let error = false;
	if (!values.fullName) {
		errors.fullName = "Name is Required";
		error = true;
	}
	if (!values.email) {
		errors.email = "Email is Required";
		error = true;
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		error = true;
		errors.email = "Email is invalid";
	}
	if (!values.password) {
		errors.password = "Password is Required";
		error = true;
	} else if (values.password.length < 8) {
		error = true;
		errors.password = "Password must be more than 8 characters";
	}
	if (!values.confirmPassword) {
		errors.confirmPassword = "Please re-enter your password";
		error = true;
	} else if (!(values.confirmPassword === values.password)) {
		error = true;
		errors.confirmPassword = "Password is not Matching";
	}
	if (error) {
		errors.msg = "Error: All the fields are Mandatory";
	} else {
		errors.signedUp = "Successfully Signed Up";
	}
	return errors;
};
export default validation;
