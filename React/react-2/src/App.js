import "./App.css";
import React, { Component } from "react";
import Count from "./Components/count";
// import ChildComponent from "./Components/ChildComponent";

class App extends Component {
	render() {
		return (
			<div className="App">
				{/* <ChildComponent /> */}
				<Count />
			</div>
		);
	}
}
export default App;
