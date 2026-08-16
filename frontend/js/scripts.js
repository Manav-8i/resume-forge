const passwordFields = [
  { inputId: "password", toggleId: "togglePassword" },
  { inputId: "confirmPassword", toggleId: "toggleConfirmPassword" }
];

passwordFields.forEach(field => {
  const input = document.getElementById(field.inputId);
  const toggle = document.getElementById(field.toggleId);

  if (input && toggle) {
    toggle.addEventListener("click", () => {
      if (input.type === "password") {
        input.type = "text";
        toggle.classList.replace("fa-eye", "fa-eye-slash");
      } else {
        input.type = "password";
        toggle.classList.replace("fa-eye-slash", "fa-eye");
      }
    });
  }
});