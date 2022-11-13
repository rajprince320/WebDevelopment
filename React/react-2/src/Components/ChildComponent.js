import React, { Component } from "react";
import GrandChildComponent from "./GrandChildComponent/GrandChildComponent";
class ChildComponent extends Component {
	render() {
		return (
			<>
				<h1>Child Component</h1>
				<GrandChildComponent msg="React" bgColor="red" />
				<GrandChildComponent msg="JavaScript" bgColor="green" />
				<GrandChildComponent msg="Java" bgColor="grey" />
				<GrandChildComponent msg="Html" bgColor="Yellow" />
				<GrandChildComponent msg="BootStrap" bgColor="silver" />
			</>
		);
	}
}
export default ChildComponent;
