function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

const moreBtn = document.getElementById("moreBtn");
const dropdownMenu = document.getElementById("dropdownMenu");
const dropdownLinks = document.querySelectorAll(".dropdown-link");

// Toggle dropdown visibility
moreBtn.addEventListener("click", () => {
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

// Close dropdown on link click
dropdownLinks.forEach(link => {
  link.addEventListener("click", () => {
    dropdownMenu.style.display = "none";
  });
});
