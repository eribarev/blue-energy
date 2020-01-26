function formsubmit() {
	var name = document.getElementById("contactForm").elements["name"].value;
	var subject = document.getElementById("contactForm").elements["subject"].value;
	var type = document.getElementById("contactForm").elements["type"].value;
	var bodytext = document.getElementById("contactForm").elements["bodytext"].value;

	var mailtohref = "mailto:blue.energy@codingburgas.bg?";
	mailtohref += "subject=" + type + ": " + subject;
	mailtohref += "&body=" + escape(bodytext);

	document.getElementById("mailLink").href = mailtohref;

	document.getElementById("mailLink").click();
}

function textareaPlaceholderUpdate() {
	var type = document.getElementById("contactForm").elements["type"].value;

	type = type[0].toLowerCase() + type.substring(1);

	document.getElementById("contactForm").elements["bodytext"].placeholder = "Please enter your " + type + " here";
}
