 /*const btn = document.getElementById("toggle");
 btn.addEventListener("click", () => {
     document.body.classList.toggle("dark");
     btn.textContent = document.body.classList.contains("dark") ? "Light" : "Dark";
});*/

document.querySelector('#toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    // Optionally change button text
    this.textContent = document.body.classList.contains('dark') ? 'Light' : 'Dark';
});

document.getElementById('themeSwitch').addEventListener('change', function() {
  document.body.classList.toggle('dark', this.checked);
});

//const fanfactsBtn = document.getElementById("fanfacts-btn");

const facts_Iveta = [
    "loves knitting!",
    "loves books!",
    "favorite color is green!",
     "hidden talent is cooking!"     
     
]
const facts_Inga = [
     "Inga likes autumn!" ,
     "loves hiking!",
     "favorite color is blue!"   
     
]
const facts_Elizabete = [
    "Elizabete likes sour food!",
    "loves painting!",
    "favorite color is red!"

]
function showRandomFact_Iveta() {
    const randomIndex = Math.floor(Math.random() * facts_Iveta.length);
     document.getElementById('iveta-fact').textContent = facts_Iveta[randomIndex];
   // alert(facts_Iveta[randomIndex]);
}
function showRandomFact_Inga() {
    const randomIndex = Math.floor(Math.random() * facts_Inga.length);
    alert(facts_Inga[randomIndex]);
}
function showRandomFact_Elizabete() {
    const randomIndex = Math.floor(Math.random() * facts_Elizabete.length);
    alert(facts_Elizabete[randomIndex]);
}