// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this

console.log(galleryItems);

const galleryImages = document.querySelector('.gallery');
const cardMarkup = createGelleryCard(galleryItems);

function createGelleryCard(images) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery__item" href="${original}">
    <img class="gallery__image"src="${preview}" alt="${description}" />
    </a> `;
    })
    .join('');
}

galleryImages.insertAdjacentHTML('beforeend', cardMarkup);

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionType: 'attr',
  captionDelay: 250,
});
gallery.on('show.SimpleLightbox');
