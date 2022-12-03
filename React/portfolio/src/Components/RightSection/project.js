import React, { Component } from "react";
export default class Project extends Component {
	render() {
		const { title, stack, year, point1, point2 } = this.props;
		return (
			<>
				<p className="section-sub-title">
					{title} <span>({year})</span>
				</p>
				<p className="section-description">
					Tech Stack: {stack.join(", ")}
					<br />
					<ul>
						<li>{point1}</li>
						<li>{point2}</li>
					</ul>
				</p>
			</>
		);
	}
}
