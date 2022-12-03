import React, { Component } from "react";

class Count extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
		this.increment = this.increment.bind(this);
		this.increment5 = this.increment5.bind(this);
		this.decrement = this.decrement.bind(this);
		this.reset = this.reset.bind(this);
	}
	increment() {
		this.setState((prevState) => ({
			count: prevState.count + 1,
		}));
	}
	decrement() {
		this.setState({
			count: this.state.count - 1,
		});
	}
	increment5() {
		this.increment();
		this.increment();
		this.increment();
		this.increment();
		this.increment();
	}
	reset() {
		this.setState({
			count: (this.state.count = 0),
		});
	}
	render() {
		let style = {
			countStyle: { fontSize: "10em", margin: 0 },
			buttonStyle: {
				fontSize: "1.2em",
				padding: "2px",
				borderRadius: "10px",
				margin: "5px",
			},
		};

		const { count } = this.state;
		return (
			<>
				<h1 style={style.countStyle}>{count}</h1>
				<button style={style.buttonStyle} onClick={this.increment}>
					Increment
				</button>
				<button style={style.buttonStyle} onClick={this.decrement}>
					Decrement
				</button>
				<button style={style.buttonStyle} onClick={this.increment5}>
					Increment 5
				</button>
				<button style={style.buttonStyle} onClick={this.reset}>
					Reset
				</button>
			</>
		);
	}
}
export default Count;
