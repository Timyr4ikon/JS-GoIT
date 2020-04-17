'use strict';

const images = [
    {
      url:
        'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url:
        'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url:
        'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];

const gallery = document.querySelector("#gallery");
gallery.classList.add("flex")

const markup = createGalleryList(images);

function createGalleryListImg({ url, alt }){
    const img = `
    <li >
        <img src = ${url}, alt = ${alt} class = "picture">
    </li>
    `;
    return img;  
}

function createGalleryList(images){
  return images.reduce((markup, image) => markup += createGalleryListImg(image), "");
}

gallery.innerHTML = markup;
