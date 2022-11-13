import "./App.css";
import Form from "./Components/Form/Form";
import SignUpText from "./Components/SignUpText/SIgnUpText";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="box">
					<SignUpText />
					<Form />
				</div>
			</header>
		</div>
	);
}

export default App;
