// const micon = document.querySelector(".micon"); // Select the menu icon
// const menu = document.querySelector(".right ul"); // Select the menu

// micon.addEventListener("click", () => {
//   menu.classList.toggle("showMenu"); // Toggle the `showMenu` class
// });

const micon = document.querySelector(".micon");
const rightMenu = document.querySelector(".right ul");

micon.addEventListener("click", () => {
  rightMenu.classList.toggle("showMenu"); // Toggle the menu visibility
  micon.classList.toggle("closeIcon"); // Toggle the icon class
});
