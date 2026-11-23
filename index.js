/* Projects */
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

/* QA SECTION */
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
		question: "After I purchase a website or App do I own the property or will the site be trademark and monitored by you.",
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
	answerDiv.classList.add("questions-answer");
	answerDiv.textContent = answerText;

	questionDiv.appendChild(answerDiv);

	questionDiv.addEventListener("click", () => {
		questionDiv.classList.toggle("active");
		answerDiv.classList.toggle("active");
	});

	questionsDiv.appendChild(questionDiv);
});



// Models
class RepairOrder {
	constructor(id, clientName, device, stage) {
		this.id = id;
		this.clientName = clientName;
		this.device = device;
		this.stage = stage;
	}
}

class ReferenceItem {
	constructor(id, name, company, email) {
		this.id = id;
		this.name = name;
		this.company = company;
		this.email = email;
	}
}

class TestimonialItem {
	constructor(id, referenceId, rating, comment) {
		this.id = id;
		this.referenceId = referenceId;
		this.rating = Number(rating);
		this.comment = comment;
	}
}

/* LocalStorage DAO */
class LocalStorageDao {
	constructor(key) {
		this.key = key;
	}

	getAll() {
		const saved = localStorage.getItem(this.key);
		return saved ? JSON.parse(saved) : [];
	}

	saveAll(items) {
		localStorage.setItem(this.key, JSON.stringify(items));
	}

	add(item) {
		const items = this.getAll();
		items.push(item);
		this.saveAll(items);
		return items;
	}
}

/* Cookies */
class CookieDao {
	constructor(key) {
		this.key = key;
	}

	getAll() {
		const cookies = document.cookie ? document.cookie.split("; ") : [];
		const found = cookies.find((row) => row.startsWith(this.key + "="));
		if (!found) return [];
		return JSON.parse(decodeURIComponent(found.split("=")[1]));
	}

	saveAll(items) {
		document.cookie = `${this.key}=${encodeURIComponent(JSON.stringify(items))}; path=/`;
	}

	add(item) {
		const items = this.getAll();
		items.push(item);
		this.saveAll(items);
		return items;
	}
}

const repairsDao = new CookieDao("repairOrders");
const refsDao = new CookieDao("guildReferences");
const testsDao = new CookieDao("guildTestimonials");

// // Seed 3 references and 1 testimonial each (only if empty)
// if (refsDao.getAll().length === 0 && testsDao.getAll().length === 0) {
// 	const r1 = new ReferenceItem("ref-1", "Lady Hayley", "House Edwards", "hayley@example.com");
// 	const r2 = new ReferenceItem("ref-2", "Kaelen", "Bazzite Guild", "kaelen@example.com");
// 	const r3 = new ReferenceItem("ref-3", "Mara", "", "mara@example.com");

// 	refsDao.saveAll([r1, r2, r3]);
// 	testsDao.saveAll([
// 		new TestimonialItem("t-1", r1.id, 5, "Fixed my workstation and kept me updated every step."),
// 		new TestimonialItem("t-2", r2.id, 5, "Clean Linux setup and fast diagnostics."),
// 		new TestimonialItem("t-3", r3.id, 4, "Honest work and fair pricing."),
// 	]);
// }

const repairForm = document.getElementById("repair-form");
const repairList = document.getElementById("repair-list");
const refForm = document.getElementById("reference-form");
const refsList = document.getElementById("references-list");
const avgHeading = document.getElementById("average-rating");

function renderRepairs() {
	if (!repairList) return;
	const repairs = repairsDao.getAll();
	repairList.innerHTML = "";

	repairs.forEach((repair) => {
		const li = document.createElement("li");
		li.textContent = `${repair.clientName} — ${repair.device} [${repair.stage}]`;
		repairList.appendChild(li);
	});
}

function renderReferences() {
	if (!refsList || !avgHeading) return;

	const references = refsDao.getAll();
	const testimonials = testsDao.getAll();

	if (testimonials.length === 0) {
		avgHeading.textContent = "Average Rating: 0.0";
	} else {
		const sum = testimonials.reduce((total, t) => total + Number(t.rating), 0);
		avgHeading.textContent = `Average Rating: ${(sum / testimonials.length).toFixed(1)}`;
	}

	refsList.innerHTML = "";

	references.forEach((ref) => {
		const refLi = document.createElement("li");
		const companyPart = ref.company ? ` (${ref.company})` : "";
		refLi.textContent = `${ref.name}${companyPart} - ${ref.email}`;

		const nestedUl = document.createElement("ul");
		const refTestimonials = testimonials.filter((t) => t.referenceId === ref.id);

		refTestimonials.forEach((t) => {
			const tLi = document.createElement("li");
			tLi.textContent = `[${t.rating}/5] ${t.comment}`;
			nestedUl.appendChild(tLi);
		});

		refLi.appendChild(nestedUl);
		refsList.appendChild(refLi);
	});
}

if (repairForm) {
	repairForm.addEventListener("submit", (event) => {
		event.preventDefault();
		const clientName = document.getElementById("client-name").value;
		const device = document.getElementById("device-name").value;
		const stage = document.getElementById("repair-stage").value;

		const order = new RepairOrder(Date.now(), clientName, device, stage);
		repairsDao.add(order);
		renderRepairs();
		repairForm.reset();
	});
}

if (refForm) {
	refForm.addEventListener("submit", (event) => {
		event.preventDefault();
		const name = document.getElementById("ref-name").value;
		const company = document.getElementById("ref-company").value;
		const email = document.getElementById("ref-email").value;
		const rating = document.getElementById("ref-rating").value;
		const comment = document.getElementById("ref-comment").value;

		const newRef = new ReferenceItem(Date.now(), name, company, email);
		refsDao.add(newRef);

		if (rating && comment.trim() !== "") {
			const newTest = new TestimonialItem(Date.now() + 1, newRef.id, rating, comment.trim());
			testsDao.add(newTest);
		}

		renderReferences();
		refForm.reset();
	});
}

renderRepairs();
renderReferences();