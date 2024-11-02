const urlInput = document.querySelector("#url");
const resetBtn = document.querySelector("#resetBtn");
const form = document.querySelector("form");
const categoryEl = document.querySelector("select");
const nameEl = document.querySelector("form>input");
const educationList = document.querySelector(".bookmarks-education");
const selfimproveList = document.querySelector(".bookmarks-selfimprovement");
const visitlaterList = document.querySelector(".bookmarks-visitlater");
const favoritesList = document.querySelector(".bookmarks-favorites");

let educationLinks = [];
let selfimprovementLinks = [];
let visitlaterLinks = [];
let favoritesLinks = [];

window.onload = getLocalStorageData;

resetBtn.addEventListener("click", (e) => {
  e.preventDefault();
  educationLinks = [];
  selfimprovementLinks = [];
  visitlaterLinks = [];
  favoritesLinks = [];
  localStorage.clear();
  displayLinks();
})

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newBookMark = {
    name: nameEl.value,
    category: categoryEl.value,
    url: urlInput.value,
  };

  switch (newBookMark.category) {
    case "favorites":
      favoritesLinks.push(newBookMark);
      break;
    case "visitlater":
      visitlaterLinks.push(newBookMark);
      break;
    case "selfimprovement":
      selfimprovementLinks.push(newBookMark);
      break;
    case "education":
      educationLinks.push(newBookMark);
      break;
  }

  displayLinks();
  updateLocalStorageData();
});

function updateLocalStorageData() {
  const currEducation = JSON.stringify(educationLinks);
  const currSelf = JSON.stringify(selfimprovementLinks);
  const currVisit = JSON.stringify(visitlaterLinks);
  const currFav = JSON.stringify(favoritesLinks);

  localStorage.setItem("education", currEducation);
  localStorage.setItem("selfimprovement", currSelf);
  localStorage.setItem("visitlater", currVisit);
  localStorage.setItem("currFav", currFav);
}

function getLocalStorageData() {
  if (localStorage.length) {
    educationLinks = JSON.parse(localStorage.getItem("education"));
    selfimprovementLinks = JSON.parse(localStorage.getItem("selfimprovement"));
    visitlaterLinks = JSON.parse(localStorage.getItem("visitlater"));
    favoritesLinks = JSON.parse(localStorage.getItem("currFav"));
  }
  displayLinks();
}

function displayLinks() {
  favoritesList.innerHTML = "";
  favoritesLinks.forEach((link) => {
    const bookmarkEl = `<a href="${link.url}">${link.name}</a>`;
    favoritesList.innerHTML += bookmarkEl;
  });

  visitlaterList.innerHTML = "";
  visitlaterLinks.forEach((link) => {
    const bookmarkEl = `<a href="${link.url}">${link.name}</a>`;
    visitlaterList.innerHTML += bookmarkEl;
  });

  selfimproveList.innerHTML = "";
  selfimprovementLinks.forEach((link) => {
    const bookmarkEl = `<a href="${link.url}">${link.name}</a>`;
    selfimproveList.innerHTML += bookmarkEl;
  });

  educationList.innerHTML = "";
  educationLinks.forEach((link) => {
    const bookmarkEl = `<a href="${link.url}">${link.name}</a>`;
    educationList.innerHTML += bookmarkEl;
  });
}
