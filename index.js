const projects = [
	{
		title: "Professor Tre's PokémonDataBase",
		URL: "#",
		description:
			"A future Web base application that will host a database of every known Pokemon currently in existence. It will also hold a section for team builders and stat tracking to make your next Nuzlocke all the easier. You will be able to mark your current team, available encounters, as well as the route they are found on. ",
	},
	{
		title: "Fus Ro Desktop",
		URL: "https://fusdodesktop.vercel.app/",
		description:
			"Where Linux Bazzite Gnome is so limited on the amount of customization that is available to the actual desktop side of things this app will be a stand alone app that allows a fully interactive desktop interface including changes to the way the login screen, background, menu selections, lock screen cursor and other themed interface items will react to the app. Will be fully licensed or fed through independent content creator portal for Bazzite but will also have an independent download and setup process for ease of access. This will be the stepping stone to many more custom themes that will be compatible with not just Linux but in the future Windows and Mac as well.",
	},
	{
		title: "Dad's Game Night Planner",
		URL: "#",
		description:
			"A simple game night planner. This app allows the family to connect and plan out night together from board games to connecting on live service games this planner allows multiple platforms of communication including family group messaging directly through the app, text message set up as well as, direct messaging for more privacy. Plan your next night with the family ahead of time with easy reminders as well.",
	},
];

const projectsSection = document.getElementById("Projects");
const projectList = document.createElement("ul");

projects.forEach((project) => {
	const titleText = project.title;
	const URLText = project.URL;
	const descriptionText = project.description;

	const projectItem = document.createElement("li");
	projectItem.classList.add("project");

	const projectLink = document.createElement("a");
	projectLink.setAttribute("href", URLText);
	if (URLText !== "#") {
		projectLink.setAttribute("target", "_blank");
	}

	const titleHeader = document.createElement("h3");
	titleHeader.textContent = titleText;

	const descriptionParagraph = document.createElement("p");
	descriptionParagraph.textContent = descriptionText;

	projectLink.appendChild(titleHeader);

	projectItem.appendChild(projectLink);

	projectItem.appendChild(descriptionParagraph);

	projectList.appendChild(projectItem);
});

projectsSection.appendChild(projectList);


const qaItems = [
	{
		question: "What services are offered?",
		answer: "We offer all ranges of Electronics Repair, as well as website and app Design."
	},
	{
		question: "Can I track the progress of my service?",
		answer: "Yes through our app and website we offer live tracking of the progress of our services. Time lines may vary depending on the service."
	},
	{
		question: "Do you offer in home services for regular Electronics and do you you offer installation services.",
		answer: "We do offer some installation service as well as free teaching sessions with Website and app builds to show how to operate them. We only offer in home services for small repairs."
	},
	{
		questions: "After I purchase a website or App do I own the property or will the site be trademark and monitored by you.",
		answer: "If you buy the rights to the site and choose to seperate it from our company the buyer will be responsible for site maintenance and upkeep. However site monitoring and maintenence if the app or site is left with us we offer great rates on maintenance and upkeep and the first year of monitoring is free with the price of the build."
	},
];

const questionsDiv = document.getElementById("questions")

qaItems.forEach((qaItems) => {
	const questionText = qaItems.question;
	const answerText = qaItems.answer;

	const questionDiv = document.createElement("div");
	questionDiv.classList.add("questions-question");
	questionDiv.textContent = questionText;

	const answerDiv = document.createElement("div");
	answerDiv.classList.add("accordion-answer");
	answerDiv.textContent = answerText;

	questionDiv.appendChild(answerDiv);

	questionDiv.addEventListener("click", () => {
		questionDiv.classList.toggle("active");
		answerDiv.classList.toggle("active");
	});

	accordionDiv.appendChild(questionDiv);
});