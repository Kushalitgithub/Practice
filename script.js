const excuseBank = {
  "Late Assignment": [
    "Sir, network nai thiyena ani file upload bhayena 😔",
    "Assignment almost complete thiyo but power gayo 😭",
    "Laptop hang bhayo ani kaam save bhayena 😢"
  ],

  "Absent in Class": [
    "Bus late bhayera class miss bhayo sir",
    "Bihana severe headache bhayo",
    "Ghar ma urgent kaam paryo sir"
  ],

  "Missed Exam": [
    "Sir, hospital emergency bhayera exam dina sakina",
    "Accident ko situation bhayo sir",
    "Last moment ma severe fever aayo"
  ],

  "Late Submission": [
    "Current gayera kaam nai rokyo sir",
    "Internet issue le upload late bhayo",
    "System crash bhayera file corrupt bhayo"
  ],

  "Missed Presentation": [
    "Group member nai absent bhayo sir",
    "Project file open nai bhayena",
    "Laptop battery suddenly dead bhayo"
  ]
};
const generatebtn = document.querySelector("button");
const excusetext = document.querySelector(".excuse");
const teachermood = document.querySelectorAll("select")[1];
const levelSlider = document.querySelector("input[type='range']");
const beliebvability = document.querySelector(".info span:first-child");
const reaction = document.querySelector(".info span:last-child");
const typeselect = document.querySelectorAll("select")[0];

generatebtn.addEventListener("click", () => {
  const selectedtype = typeselect.value;
  const excuses = excuseBank[selectedtype];

  if (!excuses) {
    excusetext.textContent = "No excuse available 😅";
    return;
  }

  const randomexcuse = excuses[Math.floor(Math.random() * excuses.length)];
  const level = levelSlider.value;

  excusetext.textContent = randomexcuse;
  beliebvability.textContent = `Believability ${level}/10`;

  if (teachermood.value.includes("Happy")) {
    reaction.textContent = "Reaction : Probably accepts";
  } 
  else if (teachermood.value.includes("Neutral")) {
    reaction.textContent = "Reaction : Suspicious";
  } 
  else {
    reaction.textContent = "Reaction : Doubtful";
  }
});
