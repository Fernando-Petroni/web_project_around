const openFormButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const closeEditButton = popup.querySelector('.popup__close-button');
const formeditPopup = document.querySelector('.popup__form');
const openAddButton = document.querySelector('.profile__add-button');
const popupAddForm = document.querySelector('.popup-add-card');
const closeAddFormButton = document.querySelector('.popup__close-add-button');
const formCard = document.querySelector('.popup-add-card-form');
const inputTitle = document.querySelector('#popup__input-title');
const inputLink = document.querySelector('#popup__input-link');
const container = document.querySelector('.gallery');
const likeButton = document.querySelectorAll('.gallery__card-button');
const template = document.querySelector('#template')
const cardItem = template.content.querySelector('.gallery__card').cloneNode(true)
const submitBtnEdit = document.querySelector('.popup__submit-button')
const submitBtnAdd = document.querySelector('.popup__Card-submit-button')
const inputName = document.querySelector('.popup__input-name');
const inputOccupation = document.querySelector('.popup__input-role');
const profileName = document.querySelector('.profile__name');
const profileOccupation = document.querySelector('.profile__occupation');
const lixeira = document.querySelector('.gallery__card-delete')
const modalImage = document.querySelector('.imagebox');
const closeImageBtn = document.querySelector('.imagebox__close-btn')


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



// renderizar os cards iniciais assim que a tela carregar
initialCards.forEach((card)=>{

    const cardItem = createCard(card)
    container.append(cardItem)
})

// função para abrir e e fechar os popups
function openPopup(popupForm) {
  popupForm.classList.add('popup_visible');
}
function closePopup(popupForm) {
  popupForm.classList.remove('popup_visible');
}

function createCard(card) {
    const template = document.querySelector('#template')
    const cardItem = template.content.querySelector('.gallery__card').cloneNode(true)
    cardItem.querySelector('.gallery__card-name').textContent = card.name
    cardItem.querySelector('.gallery__card-image').setAttribute('src', card.link)
    cardItem.querySelector('.gallery__card-image').setAttribute('alt', card.name)
    cardItem.querySelector('.gallery__card-delete').addEventListener('click',(event) => {
        const liTag = event.target.parentElement
        liTag.remove()
    })
    cardItem.querySelector('.gallery__card-button').addEventListener('click',(event) => {
      const likeButton = event.target
      likeButton.classList.toggle('gallery__card-button_liked')
  })
  cardItem.querySelector('.gallery__card-image').addEventListener('click', () => {
    const imageBox = document.querySelector('.imagebox__image')
    const imageBoxTitle = document.querySelector('.imagebox__caption')
    imageBox.setAttribute('src' , card.link)
    imageBox.setAttribute('alt' , card.name)
    imageBoxTitle.textContent = card.name
    openPopup(modalImage)
    // const closeImageBtn = document.querySelector('.imagebox__close-btn')
    // closeImageBtn.addEventListener('click', () => closePopup(popup));
  });

    return cardItem
}




// fechar imagem cliclada
closeImageBtn.addEventListener('click', () => {
  closePopup(modalImage);
});


// Reset dos formularios
function reset() {
    inputLink.value = '';
    inputTitle.value = '';
}

// Abrir popup de Editar
openFormButton.addEventListener('click', () => {
    inputName.value = profileName.textContent;
    inputOccupation.value = profileOccupation.textContent;
    openPopup(popup)
})
closeEditButton.addEventListener('click', () => closePopup(popup));

// Abrir e Fechar popup de Adicionar
openAddButton.addEventListener('click', () => {
    reset()
    openPopup(popupAddForm)
});
closeAddFormButton.addEventListener('click', () => closePopup(popupAddForm));



// Add Submição do formulario de Editar Perfil
function handlesubmit(e) {
    e.preventDefault();
    profileName.textContent = inputName.value;
    profileOccupation.textContent = inputOccupation.value;
    closePopup(popup)
}

submitBtnEdit.addEventListener('click', handlesubmit)

// Add Submição do formulario de Adicionar Card
function handleCardFormSubmit(e) {
    e.preventDefault();
    const card = {
        name: inputTitle.value,
        link: inputLink.value
    }
    const cardItem = createCard(card)
    container.prepend(cardItem)
    // likeImage()
    closePopup(popupAddForm)
}
submitBtnAdd.addEventListener('click', handleCardFormSubmit);






