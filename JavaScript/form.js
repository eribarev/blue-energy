function formsubmit() {
	var name = document.getElementById("contactForm").elements["name"].value;
	var subject = document.getElementById("contactForm").elements["subject"].value;

	var mailtohref = "mailto:blue.energy@codingburgas.bg?subject=" + name + ": " + subject;

	document.getElementById("mailLink").href = mailtohref;

	document.getElementById("mailLink").click();
}
