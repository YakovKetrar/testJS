import galleryItems from './data.js'
  
const refGallary = document.querySelector(".js-gallery") 
const refLigthbox = document.querySelector(".js-lightbox")
const refCloseButton = document.querySelector(".lightbox__button")
const refImgLigthbox = document.querySelector(".lightbox__image")




const makeCards = function({
  preview,
  original,
  description
}) {
  
  return `
  <li class="gallery__item">
  <a class="gallery__link" href="${original}">
  <img class="gallery__image" src="${preview}" atl="${description}" data-source="${original}">
  </a>
  </li>
  `
}

const arr = galleryItems.map(makeCards)
refGallary.innerHTML = arr.join('')

const openModal = function(event) {
  refLigthbox.classList.toggle('is-open')
  refGallary.removeEventListener('click', openModal)
  refImgLigthbox.src = event.target.dataset.source;
}
const closeModal = function() {
  refLigthbox.classList.toggle('is-open')
  refGallary.addEventListener('click', openModal)
}


refGallary.addEventListener('click', openModal)
refCloseButton.addEventListener('click', closeModal)
