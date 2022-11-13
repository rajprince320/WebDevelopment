import "./App.css";
import React, { Component } from "react";
import ChildComponent from "./Components/ChildComponent";

class App extends Component {
	render() {
		return (
			<div className="App">
				<header className="App-header">App</header>
				<ChildComponent />
			</div>
		);
	}
}
export default App;
