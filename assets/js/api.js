document.querySelectorAll('.recipe-card button').forEach(button => {
    button.addEventListener('click', async () => {
        const ingredients = "1 cup sugar"; // Example
        const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY&ingr=${encodeURIComponent(ingredients)}`);
        const data = await response.json();
        console.log(data); // Display data in the UI
    });
});
