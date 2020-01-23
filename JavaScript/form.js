function formsubmit() {
	var name = document.getElementById("contactForm").elements["name"].value;
	var subject = document.getElementById("contactForm").elements["subject"].value;
	var type = document.getElementById("contactForm").elements["type"].value;

	var mailtohref = "mailto:blue.energy@codingburgas.bg?";
	mailtohref += "subject=" + type + ": " + subject;

	document.getElementById("mailLink").href = mailtohref;

	document.getElementById("mailLink").click();
}
