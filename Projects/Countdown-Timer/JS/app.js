const endDate = "03 December 2022 03:40 PM";

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

const clock = () => {
	const end = new Date(endDate);
	const now = new Date();
	const diff = (end.getTime() - now.getTime()) / 1000;

	if (diff < 0) return;
	// Convert into days
	inputs[0].value = Math.floor(diff / 3600 / 24);
	inputs[1].value = Math.floor((diff / 3600) % 24);
	inputs[2].value = Math.floor((diff / 60) % 60);
	inputs[3].value = Math.floor(diff % 60);
};
clock();
setInterval(() => clock(), 1000);
