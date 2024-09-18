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

// Navbar language dropdown mobile version start
const dropdownItems = document.querySelectorAll(".dropdown-item");
const dropdownButton = document.querySelector(".dropdown-toggle");

dropdownItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();

    // Убираем класс "active" у всех элементов
    dropdownItems.forEach((i) => i.classList.remove("active"));

    // Добавляем класс "active" на выбранный элемент
    this.classList.add("active");

    // Меняем текст кнопки на текст выбранного элемента
    dropdownButton.textContent = this.textContent;
  });
});
// Navbar language dropdown mobile version end

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
// Galery page card (click) start
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".galery_cards_wrapper img");
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");

  let currentImageIndex = 0;

  // Open modal when clicking on an image
  images.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentImageIndex = index;
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  // Close modal
  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Next image
  nextBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    modalImg.src = images[currentImageIndex].src;
  });

  // Previous image
  prevBtn.addEventListener("click", () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    modalImg.src = images[currentImageIndex].src;
  });

  // Close modal when clicking outside the image
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
// Galery page card (click) end
// ================================================================================
