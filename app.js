const urlInput = document.querySelector("#url");
const addBtn = document.querySelector(".urlbox button");
const form = document.querySelector("form");
const categoryEl = document.querySelector("select");
const nameEl = document.querySelector("form>input");
const educationList = document.querySelector(".bookmarks-education");
const selfimproveList = document.querySelector(".bookmarks-selfimprovement");
const visitlaterList = document.querySelector(".bookmarks-visitlater");
const favoritesList = document.querySelector(".bookmarks-favorites");

const educationLinks = [];
const selfimprovementLinks = [];
const visitlaterLinks = [];
const favoritesLinks = [];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newBookMark = {
    name: nameEl.value,
    category: categoryEl.value,
    url: urlInput.value
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
})


function displayLinks() {
  favoritesLinks.forEach(link => {
    const newElement = `<a href="${link.url}">${link.name}</a>`;
  })   
}



