import "../index.css";

const LeftSection = () => {
	return (
		<div className="left">
			<div className="education">
				<p className="section-title">Education</p>
				<p className="section-sub-title">
					Rabindranath Tagore University <span>(2015-2019)</span>
				</p>
				<p className="section-sub-title">
					Soghra High Schoo0l <span>(2013-2015)</span>
				</p>
				<p className="section-sub-title">
					Collegiate High School <span>(2013)</span>
				</p>
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
