import "../index.css";
import Education from "./education";

const LeftSection = () => {
	return (
		<div className="left">
			<div className="education">
				<p className="section-title">Education</p>
				<Education
					institute="Rabindranath Tagore University"
					years="2015-2019"
					cgpa={7.5}
					point1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
					point2="The point of using Lorem Ipsum is that it has a more-or-less
					normal distribution of letters, as opposed to using 'Content here,
					content here', making it look like readable English."
				/>

				<Education
					institute="Soghra High School"
					years="2013-2015"
					cgpa={6.0}
					point1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
					point2="The point of using Lorem Ipsum is that it has a more-or-less
					normal distribution of letters, as opposed to using 'Content here,
					content here', making it look like readable English."
				/>
				<Education
					institute="Collegiate High School"
					years="2013"
					cgpa={5}
					point1="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
					point2="The point of using Lorem Ipsum is that it has a more-or-less
					normal distribution of letters, as opposed to using 'Content here,
					content here', making it look like readable English."
				/>
			</div>
			<hr />
			<div className="skills">
				<p className="section-title">Skills</p>
				<p className="section-sub-title">JavaScript</p>
				<p className="section-sub-title">CSS</p>
				<p className="section-sub-title">HTML</p>
			</div>
		</div>
	);
};
export default LeftSection;
