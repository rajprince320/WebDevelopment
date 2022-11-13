import React, { useState } from "react";
import "./Form.css";
import validation from "./validation";

const SignUpForm = () => {
	const handleChange = (event) => {
		setValues({
			...values,
			[event.target.name]: event.target.value,
		});
	};
	const [errors, setErrors] = useState({});
	const [values, setValues] = useState({
		fullName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const handleFormSubmit = (event) => {
		event.preventDefault();
		setErrors(validation(values));
	};
	return (
		<form className="Form" id="form">
			<div className="Form-body">
				<input
					type="text"
					name="fullName"
					placeholder="Full Name"
					value={values.fullName}
					onChange={handleChange}
					required
				/>
				{errors.fullName && <p className="invalid">{errors.fullName}</p>}
				<input
					type="email"
					name="email"
					placeholder="Email"
					value={values.email}
					onChange={handleChange}
					required
				/>
				{errors.email && <p className="invalid">{errors.email}</p>}
				<input
					type="password"
					name="password"
					placeholder="Password"
					value={values.password}
					onChange={handleChange}
					required
				/>
				{errors.password && <p className="invalid">{errors.password}</p>}
				<input
					type="text"
					name="confirmPassword"
					placeholder="Confirm Password"
					value={values.confirmPassword}
					onChange={handleChange}
					required
				/>

				{errors.confirmPassword && (
					<p className="invalid">{errors.confirmPassword}</p>
				)}
				<hr />

				{errors.msg && <p className="invalid">{errors.msg}</p>}
				{errors.signedUp && <p className="valid">{errors.signedUp}</p>}
				<button
					type="button"
					id="submit-btn"
					className="button"
					onClick={handleFormSubmit}
				>
					Signup
				</button>
			</div>
		</form>
	);
};
export default SignUpForm;
