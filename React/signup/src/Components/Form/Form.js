// import { useState } from "react";
import "./Form.css";
const Form = () => {
	// const initaialValue = {
	// 	fullName: "",
	// 	email: "",
	// 	password: "",
	// 	confirmPassword: "",
	// };
	// const [formValues /*setFormValues*/] = useState(initaialValue);
	// const handleChange = (e) => {
	// 	// console.log(e.target);
	// };
	return (
		<div className="Form">
			<div className="Form-body">
				<Form>
					<input
						type="text"
						name="fullName"
						placeholder="Full Name"
						// value={formValues.fullName}
						// onChange={handleChange}
						required
					/>
					<div className="valid" id="valid-name">
						Looks Good!
					</div>
					<div className="invalid" id="invalid-name">
						Please enter valid name!
					</div>

					<input
						type="email"
						name="email "
						placeholder="Email"
						// // value={formValues.email}
						// onChange={handleChange}
						required
					/>
					<div className="valid" id="valid-email">
						Looks Good!
					</div>
					<div className="invalid" id="invalid-email">
						Please enter valid email!
					</div>
					<input
						type="password"
						name="password"
						placeholder="Password"
						// // value={formValues.password}
						// onChange={handleChange}
						required
					/>
					<div className="valid" id="valid-password">
						Looks Good!
					</div>
					<div className="invalid" id="invalid-password">
						Please enter valid password!
					</div>
					<input
						type="text"
						name="confirmPassword"
						placeholder="Confirm Password"
						// // value={formValues.confirmPassword}
						// onChange={handleChange}
						required
					/>
					<div className="valid" id="valid-cpassword">
						Looks Good!
					</div>
					<div className="invalid" id="invalid-cpassword">
						Password is not mathing!
					</div>
					<input type="button" value="Signup" className="button"></input>
				</Form>
			</div>
		</div>
	);
};
export default Form;
