document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form.form");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const isSignupPage = window.location.pathname.includes("signup.html");
      const emailInput = document.querySelector("input[name='login']") || document.querySelector("input[type='text']");
      const passwordInputs = document.querySelectorAll("input[type='password']");

      const email = emailInput ? emailInput.value.trim() : "";
      const password = passwordInputs[0] ? passwordInputs[0].value.trim() : "";

      if (!email || !password) {
        alert("Please fill in all required fields.");
        return;
      }

      const payload = { email, password };

      if (isSignupPage) {
        const nameInput = document.querySelectorAll("input[type='text']")[0];
        payload.name = nameInput ? nameInput.value.trim() : "User";

        if (passwordInputs.length > 1 && passwordInputs[0].value !== passwordInputs[1].value) {
          alert("Passwords do not match.");
          return;
        }
      }

      const endpoint = isSignupPage ? "/api/auth/register" : "/api/auth/login";

      try {
        const response = await fetch(`http://localhost:3000${endpoint}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload)
        });
console.log(response)
        const result = await response.json();
        console.log(result)

        if (result.success) {
          localStorage.setItem("token", result.token);
          localStorage.setItem("user", JSON.stringify(result.user));
          window.location.href = "index.html";
        } else {
          alert(result.message || "Authentication failed.");
        }
      } catch (error) {
        console.error("Auth Error:", error);
        alert("Unable to connect to backend server.");
      }
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    if (signupForm) {
        signupForm.addEventListener("submit", (e) => {
            const name = document.getElementById("signupName").value.trim();
            if (name) {
                localStorage.setItem("username", name);
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            const inputVal = document.getElementById("loginInput").value.trim();
            if (inputVal) {
                const name = inputVal.includes("@") ? inputVal.split("@")[0] : inputVal;
                localStorage.setItem("username", name);
            }
        });
    }
});