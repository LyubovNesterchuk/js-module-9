const STORAGE_KEY = "feedback-message";

const form = document.querySelector(".feedback-form");
const textarea = document.querySelector("textarea");

form.addEventListener("submit", handleSubmit);
textarea.addEventListener("input", handleInput);

populateTextArea();

function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset()
    localStorage.removeItem(STORAGE_KEY);
}

function handleInput(event) {
    const message = event.target.value;
    localStorage.setItem(STORAGE_KEY, message);
}

function populateTextArea (event) {
    const message = localStorage.getItem(STORAGE_KEY);

    if (message) {
        textarea.value = message;
    }

}

