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

// adicionando o add button

const openCardButton = document.querySelector('.profile__add-button');
const popupCard = document.querySelector('.popup-add-card');
const closeCardButton = document.querySelector('.popup__close-add-button');

function toggleCardForm() {
  popupCard.classList.toggle('popup__card-visible');
}

openCardButton.addEventListener('click', toggleCardForm);
closeCardButton.addEventListener('click', toggleCardForm);

const formCard = document.querySelector('.popup-add-card-form');

const inputTitle = document.querySelector('#popup__input-title');
const inputLink = document.querySelector('#popup__input-link');

function handleCardFormSubmit(evt) {
  evt.preventDefault();
  inputTitle.textContent = inputTitle.value;
  inputLink.textContent = inputLink.value;
  inputTitle.value = "";
  inputLink.value = "";
  popup.classList.toggle('popup_visible');
}

formCard.addEventListener('submit', handleCardFormSubmit);

// adicionando os cards e excluí-los
const container = document.querySelector('.gallery__card');
const likeButton = document.querySelector('.gallery__card-button');

const initialCards = [
  {
    name: "Vale de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg"
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg"
  },
  {
    name: "Montanhas Carecas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg"
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg"
  },
  {
    name: "Parque Nacional da Vanoise ",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg"
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg"
  }
];

function createCard(card) {
  const template = document.querySelector('#template')
  const cardItem = template.content.querySelector('.gallery__card').cloneNode(true)
  cardItem.querySelector('.gallery__card-name').textContent = card.name
  cardItem.querySelector('.gallery__card-image').setAttribute('src', card.link)
  cardItem.querySelector('.gallery__card-image').setAttribute('alt', '')
  cardItem.querySelector('.gallery__card-delete').addEventListener('click', function (event){
  const liTag = event.target.parentElement
  liTag.remove()
  })
  return cardItem
}

for (const card of initialCards) {
  container.append(createCard(card))
}

container.prepend(createCard({
  name: '',
  link: ''
}))

// adicionar curtida

function addNewCard (createCard){
const title = document.querySelector('#popup__input-title')
const link = document.querySelector('#popup__input-link')

if (title.value == '' || link.value == ''){
  alert('Por favor preencha os campos corretamente')
  return
}

const newCard = createCard({name: title.value, link: link.value})
container.prepend(newCard);
title.value = ''
link.value = ''
}


addButton.addEventListener('click' , function (event) {
  event.preventDefault();
  addNewCard()
})

likeButton.addEventListener('click', function(event) {
  const likes = event.target.querySelector('.gallery__card-likes');
  const count = parseInt(likes.textContent) + 1;
  likes.textContent = count;
});

