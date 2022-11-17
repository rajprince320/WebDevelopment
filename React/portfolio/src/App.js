import "./App.css";
import Heading from "./Components/Heading/Heading";
import LeftSection from "./Components/LeftSection/index";
import RightSection from "./Components/RightSection/index";

function App() {
	return (
		<div className="App">
			<Heading />
			<hr />
			<div className="main">
				<LeftSection />
				<RightSection />
			</div>
		</div>
	);
}

export default App;
