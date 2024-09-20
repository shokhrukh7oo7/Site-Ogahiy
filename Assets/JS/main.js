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
// CONTACT PAGE FORM START
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("userForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Предотвращаем отправку формы
    let isValid = true;

    // Получаем все input и textarea
    const inputs = document.querySelectorAll("#userForm .form-control");

    inputs.forEach(function (input) {
      const errorElement = input.nextElementSibling; // Находим <p class="error">
      if (errorElement && errorElement.classList.contains("error")) {
        if (!input.value.trim()) {
          errorElement.textContent = "Bu maydon bo'sh bo'lmasligi kerak";
          errorElement.style.color = "red";
          input.style.borderColor = "red";
          isValid = false;
        } else {
          errorElement.textContent = ""; // Очищаем текст ошибки
          input.style.borderColor = ""; // Убираем красную границу
        }
      }
    });

    // Проверка телефона на соответствие формату
    const phoneInput = document.getElementById("phone");
    const phoneError = phoneInput.nextElementSibling;
    const phonePattern = /^\+?\d{1,3}\s?\(?\d{1,4}?\)?\s?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

    if (phoneError && phoneError.classList.contains("error")) {
      if (!phonePattern.test(phoneInput.value.trim())) {
        phoneError.textContent =
          "Telefon raqam formati noto'g'ri (+998 00 000 00 00)";
        phoneError.style.color = "red";
        phoneInput.style.borderColor = "red";
        isValid = false;
      } else {
        phoneError.textContent = "";
        phoneInput.style.borderColor = "";
      }
    }

    if (isValid) {
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "MUVAFFAQIYATLI YUBORILDI",
        showConfirmButton: false,
        timer: 1500,
      });
      // this.submit(); // Разблокируйте эту строку для отправки формы
    }
  });
});

// CONTACT PAGE FORM END
// ================================================================================
