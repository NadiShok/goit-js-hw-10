import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { images } from "./gallery.js";
console.log(images);

const gallery = document.querySelector(".gallery");
const markup = images.map(({ preview, original, description }) => 
`<li class="gallery-item">
    <a class="gallery-link" href="${original}">
        <img class="gallery-image" src="${preview}" alt="${description}" width="360" height="200">
    </a>
</li>`)
.join("");

gallery.insertAdjacentHTML("afterbegin", markup);
console.log(gallery);

const galleryBox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
});
