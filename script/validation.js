function enableValidation(params) {
  const form = document.querySelector(params.formSelector);
  const inputs = Array.from(form.querySelectorAll(params.inputSelector));
  const button = form.querySelector(params.submitButtonSelector);

  for (const input of inputs) {
    input.addEventListener("input", (event) => {
      const span = form.querySelector(
        params.spanSelector.replace("item", event.target.name)
      );
      if (event.target.validity.valid) {
        event.target.classList.add("input-valid");
        span.textContent = event.target.validationMessage;
      } else {
        event.target.classList.remove("input-valid");

        span.textContent = event.target.validationMessage;
      }
      if (inputs.filter((i) => i.validity.valid).length == 2) {
        button.removeAttribute("disabled");
      } else {
        button.setAttribute("disabled", true);
      }
    });
  }
}

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  spanSelector: "#item-error",
  submitButtonSelector: ".popup__submit-button",
});

enableValidation({
  formSelector: ".popup-add-card-form",
  inputSelector: ".popup__input-card",
  spanSelector: "#item-error",
  submitButtonSelector: ".popup__Card-submit-button",
});
