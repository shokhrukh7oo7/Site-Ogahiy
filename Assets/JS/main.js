// Navbar Languages active links start
const languages = document.querySelectorAll(".language_item .item");

languages.forEach((link) => {
  link.addEventListener("click", (e) => {
    languages.forEach((l) => {
      l.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
// Navbar Languages active links end

// ================================================================================

// Navbar active links start
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    navLinks.forEach((l) => {
      l.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
// Navbar active links end

// ================================================================================

// Home page Question (accordion) section start
const question_accordions = document.querySelectorAll(".question_accordion");

question_accordions.forEach((question_accordion) => {
  question_accordion.addEventListener("click", () => {
    question_accordion.classList.toggle("active");
  });
});
// Home page Question (accordion) section end

// ================================================================================
