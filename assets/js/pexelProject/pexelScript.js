// const apiKey = JD66LwqgFxcI2Xxo5qr27XSX7yEA4Mt1ngm6eSEhb68PslKz4tA81FmI;

const { createClient } = require('pexels');

const client = createClient('JD66LwqgFxcI2Xxo5qr27XSX7yEA4Mt1ngm6eSEhb68PslKz4tA81FmI');
const collectionId = 'vbxynhv';

client.collections.get(collectionId)
    .then(collection => {
        console.log(collection); // This will print the collection details and photos
    })
    .catch(error => {
        console.error('Error fetching collection:', error);
    });

// const { createClient } = require('pexels');
// const fetch = require('node-fetch');
// const fs = require('fs');


const imageDirectory = 'pexelsImages';

async function fetchAndSaveImages() {
    const fetch = require('node-fetch');
    const fs = require('fs');
    try {
        const collection = await client.collections.get(collectionId);

        // Create the image directory if it doesn't exist
        if (!fs.existsSync(pexelsImages)) {
            fs.mkdirSync(pexelsImages);
        }

        for (const photo of collection.photos) {
            const imageUrl = photo.src.original;
            const imageName = photo.id + '.jpg'; // You can customize the filename as needed
            const filePath = `${pexelsImages}/${imageName}`;

            // Fetch the image and save it to the file
            const response = await fetch(imageUrl);
            const buffer = await response.buffer();
            fs.writeFileSync(filePath, buffer);

            console.log(`Saved image ${imageName}`);
        }

        console.log('All images saved successfully.');
    } catch (error) {
        console.error('Error fetching or saving images:', error);
    }
}

fetchAndSaveImages();



// import { createClient } from 'pexels';

// const client = createClient('YOUR_API_KEY');

// client.collections.featured({ per_page: 10 }).then(collections => {...});