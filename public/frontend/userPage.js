// Add your JavaScript code here
const textElement = document.getElementById("quot");
const textElement2 = document.getElementById("willl");
const textToType = textElement.innerText;
const textToType2 = textElement2.innerText;
let index = 0;

function typeText() {
  textElement.textContent = textToType.slice(0, index);
  index++;

  if (index <= textToType.length) {
    setTimeout(typeText, 100); // Adjust the typing speed (in milliseconds)
  }
}

function typeText2() {
  textElement2.textContent = textToType2.slice(0, index);
  index++;

  if (index <= textToType2.length) {
    setTimeout(typeText2, 100); // Adjust the typing speed (in milliseconds)
  }
}

// Start the typing animation
typeText();

window.addEventListener("scroll", () => {
  const scrolled = window.scrollY;
  typeText2();
});
