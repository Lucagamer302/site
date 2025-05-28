const toggleButton = document.getElementById("modoToggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    toggleButton.textContent = "🌙"; // Modo escuro
  } else {
    toggleButton.textContent = "🌞"; // Modo claro
  }
});
