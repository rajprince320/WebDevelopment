import React, { Component } from "react";

class GrandChildComponent extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { msg, bgColor } = this.props;
		return (
			<p style={{ backgroundColor: bgColor, color: "white" }}>I Love {msg}!</p>
		);
	}
}
export default GrandChildComponent;
