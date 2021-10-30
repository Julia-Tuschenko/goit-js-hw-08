// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// console.log(galleryItems);
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');
galleryRef.addEventListener('click', galleryTemplate);
galleryRef.addEventListener( 'click', function(e) {
    e.preventDefault();
 }, false);

function galleryTemplate(){
    const markup = galleryItems
    .map(
        ({preview, original, description}) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
    )
    .join("");
    galleryRef.insertAdjacentHTML('beforeend', markup);
};
galleryTemplate();

const lightbox = new SimpleLightbox('.gallery a', { sourceAttr : "href"});
lightbox.on("show.simplelightbox");