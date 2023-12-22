const clientForm = document.querySelector(".feedback-form");
const localStorageKey = "feedback-form-state";

clientForm.addEventListener("input", (evt) => {
    const savedEmail = clientForm.email.value.trim();
    const savedMessage = clientForm.message.value.trim();
    const savedUser = { email: savedEmail, message: savedMessage };
    localStorage.setItem(localStorageKey, JSON.stringify(savedUser));
})

function loadState() {
    const savedState = localStorage.getItem(localStorageKey);
    if (savedState) {
      const { email, message } = JSON.parse(savedState);
      clientForm.email.value = email;
      clientForm.message.value = message;
    }
  }
loadState();

clientForm.addEventListener("submit", event => {
    event.preventDefault();
    const form = event.target;
    const emailValue = form.elements.email.value.trim();
    const messageValue = form.elements.message.value.trim();

    if (emailValue === "" || messageValue === "") {
        return alert("All form fields must be filled in");
    }

    const userEmail = {email: emailValue, message: messageValue};
    console.log(userEmail);
    localStorage.removeItem(localStorageKey);
    form.reset();
})

