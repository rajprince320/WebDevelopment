import "../index.css";
import Project from "./project";
const RightSection = () => {
	return (
		<div className="right">
			<div className="project">
				<p className="section-title">Projects</p>
				<Project
					title="Calculator App"
					year="2019"
					stack={["HTML", "CSS", "BootStrap", "JavaScript"]}
					point1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
					point2="The point of using Lorem Ipsum is that it has a more-or-less
					normal distribution of letters, as opposed to using 'Content here,
					content here', making it look like readable English."
				/>
				<Project
					title="Registration App"
					year="2019"
					stack={["HTML", "CSS", "BootStrap", "JavaScript"]}
					point1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
					point2="The point of using Lorem Ipsum is that it has a more-or-less
					normal distribution of letters, as opposed to using 'Content here,
					content here', making it look like readable English."
				/>

				<Project
					title="Management App"
					year="2019"
					stack={["HTML", "CSS", "BootStrap", "JavaScript"]}
					point1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
					point2="The point of using Lorem Ipsum is that it has a more-or-less
					normal distribution of letters, as opposed to using 'Content here,
					content here', making it look like readable English."
				/>
			</div>
			<hr />
			<div className="achievement">
				<p className="section-title">Achievements</p>
				<p className="section-sub-title">Achievement 1</p>
				<p className="section-sub-title">Achievement 2</p>
				<p className="section-sub-title">Achievement 3</p>
			</div>
			<hr />
			<div className="languages">
				<p className="section-title">Languages</p>
				<p className="section-sub-title">Hindi</p>
				<p className="section-sub-title">English</p>
			</div>
		</div>
	);
};
export default RightSection;
