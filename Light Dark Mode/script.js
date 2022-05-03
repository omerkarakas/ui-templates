const toggleSwitch = document.querySelector("input[type='checkbox']");
const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");


//Event Listener
toggleSwitch.addEventListener("change", switchTheme);


function switchTheme(event) {
  let theme = "light";
  if (event.target.checked) {
    theme = "dark";
    darkMode();
  }
  else
    lightMode();

  document.documentElement.setAttribute("data-theme", theme);
}

function darkMode() {
  nav.style.backgroundColor = "rgb(0 0 0 /50%)";
  textBox.style.backgroundColor = "rgb(255 255 255 / 50%";
  console.log(toggleIcon.children);
}