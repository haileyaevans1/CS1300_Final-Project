// API_KEY=<JD66LwqgFxcI2Xxo5qr27XSX7yEA4Mt1ngm6eSEhb68PslKz4tA81FmI> yarn test;

const apiKey = JD66LwqgFxcI2Xxo5qr27XSX7yEA4Mt1ngm6eSEhb68PslKz4tA81FmI;

// class PexelsImageFetcher {
//     constructor(apiKey) {
//         this.apiKey = apiKey;
//         this.images = [];
//     }

//     async fetchImages(query) {
//         const url = `https://api.pexels.com/v1/search?query=${query}&per_page=10`;
//         const response = await fetch(url, {
//             headers: {
//                 Authorization: this.apiKey
//             }
//         });
//         const data = await response.json();
//         this.images = data.photos.map(photo => photo.src.original);
//     }

//     storeImagesInLocalStorage() {
//         localStorage.setItem('pexelsImages', JSON.stringify(this.images));
//     }

//     getImagesFromLocalStorage() {
//         const storedImages = localStorage.getItem('pexelsImages');
//         return storedImages ? JSON.parse(storedImages) : [];
//     }
// }

const fetch = require('node-fetch');
const fs = require('fs');
const url = 

async function fetchAndSaveImage(url, filename) {
    try {
        const response = await fetch(url);
        const buffer = await response.buffer();