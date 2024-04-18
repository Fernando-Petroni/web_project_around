const openFormButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeButton = popup.querySelector('.popup__close-button');

function toggleForm() {
  popup.classList.toggle('popup_visible');
}

openFormButton.addEventListener('click', toggleForm);
closeButton.addEventListener('click', toggleForm);

const form = document.querySelector('.popup__form');

const inputName = document.querySelector('.popup__input-name');
const inputOccupation = document.querySelector('.popup__input-role');

const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');


function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileOccupation.textContent = inputOccupation.value;
  inputName.value = "";
  inputOccupation.value = "";
  popup.classList.toggle('popup_visible');
}

form.addEventListener('submit', handleFormSubmit);