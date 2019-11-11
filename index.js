const titl = document.querySelector("#title");

const CLICKED_CLASS = "clicked";
/*
function handleClick() {
  //const currentClass = titl.className;
  const hasClass = titl.classList.contains(CLICKED_CLASS);
  //if (currentClass !== CLICKED_CLASS) {
  if (!hasClass) {
    titl.classList.add(CLICKED_CLASS);
  } else {
    titl.classList.remove(CLICKED_CLASS);
  }
}
*/
function handleClick() {
  titl.classList.toggle(CLICKED_CLASS);
}

function init() {
  titl.addEventListener("click", handleClick);
}
init();
