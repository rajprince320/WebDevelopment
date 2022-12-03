import React, { Component } from "react";

export default class Education extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { institute, years, cgpa, point1, point2 } = this.props;
		return (
			<>
				<p className="section-sub-title">
					{institute} <span>({years})</span>
				</p>
				<p className="section-description">
					CGPA: {cgpa}
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
