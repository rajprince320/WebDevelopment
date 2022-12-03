import React, { Component } from "react";

export default class BulbOnOff extends Component {
	constructor(propos) {
		super(propos);
		this.state = {
			bulbStatus: false,
		};
		this.onOff = this.onOff.bind(this);
	}
	onOff() {
		this.setState((prevState) => ({
			bulbStatus: !prevState.bulbStatus,
		}));
	}
	render() {
		let { bulbStatus } = this.state;
		let imgStyle = {
			height: "300px",
			margin: "20px",
		};
		let buttonStyle = {
			fontSize: "1.2em",
			padding: "2px",
			borderRadius: "10px",
			margin: "5px",
		};
		return (
			<>
				<img
					src={
						bulbStatus
							? "https://www.w3schools.com/js/pic_bulbon.gif"
							: "https://www.w3schools.com/js/pic_bulboff.gif"
					}
					alt="bulb-off"
					style={imgStyle}
				/>
				<br />
				<button onClick={this.onOff} style={buttonStyle}>
					ON/OFF
				</button>
			</>
		);
	}
}
// export default BulbOnOff;
