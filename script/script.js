let openFormButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let closeButton = popup.querySelector('.popup__close-button');

function toggleForm() {
  popup.classList.toggle('popup_visible');
}

openFormButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm);

let form = document.querySelector('.popup__form');

let inputName = document.querySelector('.popup__input_type_name');
let inputOccupation = document.querySelector('.popup__input_type_role');

let profileName = document.querySelector('.profile__name');
let profileOccupation = document.querySelector('.profile__occupation');


function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;
  inputName.value = "";
  inputOccupation.value = "";
  popup.classList.toggle('popup_visible');
}

form.addEventListener('submit', handleFormSubmit);