// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika toggle menu di klik
document.querySelector("toggle-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik di luar side bar untuk menhilangkan nav
const toggle = document.querySelector("#toggle-menu");

document.addEventListener("click", function (e) {
  if (!toggle.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
const searchBtn = document.querySelector("#search");
const searchBox = document.querySelector("#search-box");

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  searchBox.style.display =
    searchBox.style.display === "flex" ? "none" : "flex";
});
const searchInput = document.querySelector("#search-input");
const menuItems = document.querySelectorAll(".menu-item");

searchInput.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();
  menuItems.forEach((item) => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(keyword) ? "block" : "none";
  });
});
const searchBtn = document.querySelector("#search");
const searchBox = document.querySelector("#search-box");

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (searchBox.style.display === "flex") {
    searchBox.style.display = "none";
  } else {
    searchBox.style.display = "flex";
  }
});
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") searchBox.style.display = "none";
});
const form = document.getElementById("pesanForm");
const status = document.getElementById("pesanStatus");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // hentikan submit default

  const formData = new FormData(form);

  fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.style.display = "block";
        status.style.color = "green";
        status.textContent = "Pesan berhasil dikirim!";
        form.reset();
      } else {
        response.json().then((data) => {
          status.style.display = "block";
          status.style.color = "red";
          if (data.errors) {
            status.textContent = data.errors
              .map((error) => error.message)
              .join(", ");
          } else {
            status.textContent = "Gagal mengirim pesan.";
          }
        });
      }
    })
    .catch((error) => {
      status.style.display = "block";
      status.style.color = "red";
      status.textContent = "Terjadi kesalahan. Silakan coba lagi.";
    });
});
