// Home page Question (accordion) section start
const question_accordions = document.querySelectorAll(".question_accordion");

question_accordions.forEach((question_accordion) => {
  question_accordion.addEventListener("click", () => {
    question_accordion.classList.toggle("active");
  });
});
// Home page Question (accordion) section end
