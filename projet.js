const input = document.getElementById("input");
const addName = document.getElementById("addName");
const chosenNameBtn = document.getElementById("chooseName");
const closePopup = document.getElementById("closePopup");
const popUp = document.getElementById("popUp");
const chosenText = document.getElementById("chosenText");
const chosenName = document.getElementById("chosenName");
const nameList = document.getElementById("nameList");

let names = [];

// Add name
addName.addEventListener("click", () => {
  const value = input.value.trim();

  // ✅ Only allow letters (A–Z, a–z) and spaces
  const namePattern = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/;

  if (value !== "" && namePattern.test(value)) {
    names.push(value);
    input.value = "";
    renderList();
  } else {

    input.style.border = "2px solid red";
    setTimeout(() => (input.style.border = ""), 800);
  }
});

chosenNameBtn.addEventListener("click", () => {
  if (names.length === 0) return;
  const randomIndex = Math.floor(Math.random() * names.length);
  const winner = names[randomIndex];
  names.splice(randomIndex, 1);
  renderList();

  chosenText.textContent = "Le nom choisi est :";
  chosenName.textContent = winner;
  popUp.classList.add("open");
});

closePopup.addEventListener("click", () => {
  popUp.classList.remove("open");
});


function renderList() {
  nameList.innerHTML = "";
  if (names.length === 0) {
    nameList.style.display = "none";
  } else {
    nameList.style.display = "block";
    names.forEach((name) => {
      const li = document.createElement("li");
      li.textContent = name;
      nameList.appendChild(li);
    });
  }
}
