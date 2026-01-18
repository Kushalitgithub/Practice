const excuses = [
  "Sir, network nai thiyena ani file upload bhayena 😔",
  "Bus late bhayera class miss bhayo sir",
  "Laptop hang bhayo ani kaam save bhayena 😢",
  "Ghar ma guest aunu bhayera time manage bhayena",
  "Current gayera kaam nai rokyo sir",
  "Assignment almost complete thiyo but power gayo 😭"
];

const generatebtn = document.querySelector("button");
const excusetext = document.querySelector(".excuse");
const teachermood = document.querySelectorAll("select")[1];
const levelSlider = document.querySelector("input[type='range']");
const beliebvability = document.querySelector(".info span:first-child");
const reaction = document.querySelector(".info span:last-child");

generatebtn.addEventListener("click", ()=>{
    const randomexcuse = excuses[Math.floor(Math.random() * excuses.length)];
    const level = levelSlider.value;

    excusetext.textContent = `${randomexcuse}`;
    beliebvability.textContent = `Believability ${level}/10`;

    if(teachermood.value.includes("Happy")){
        reaction.textContent = "Reaction : Probably accepts";
    }
    else if(teachermood.value.includes("Neutal")){
        reaction.textContent = "Reaction : Suspicious";
    }
    else{
        reaction.textContent = "Reaction : Doubtful";
    }
})