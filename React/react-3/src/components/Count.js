import React, { useState } from "react";

const Count = () => {
	let [count, setCount] = useState(0);
	let style = {
		countStyle: { fontSize: "10em", margin: 0 },
		buttonStyle: {
			fontSize: "1.2em",
			padding: "10px",
			borderRadius: "10px",
			margin: "5px",
		},
	};
	const Increment = () => {
		setCount(count + 1);
	};
	const Decrement = () => {
		setCount(count - 1);
	};

	return (
		<>
			<p style={style.countStyle}>{count}</p>
			<button style={style.buttonStyle} onClick={Increment}>
				Increment
			</button>
			<button style={style.buttonStyle} onClick={Decrement}>
				Decrement
			</button>
		</>
	);
};

export default Count;
