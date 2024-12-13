
async function fetchNutrition(ingredients) {
    const appId = '2eb2ddf2';
    const appKey = '57202e3c9e5c20b959528634a28ca613';
    const url = `https://api.edamam.com/api/nutrition-data?app_id=${appId}&app_key=${appKey}&ingr=${encodeURIComponent(ingredients)}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        displayNutrition(data);
    } catch (error) {
        console.error('Error fetching nutrition data:', error);
        alert('Failed to fetch nutrition information. Please try again later.');
    }
}

function displayNutrition(data) {
    // const modal = document.getElementById('nutrition-modal');
    const nutritionDataDiv = document.getElementById('nutrition-data');

    nutritionDataDiv.innerHTML = `
        <p>Calories: ${data.calories}</p>
        <p>Total Weight: ${data.totalWeight}g</p>
        <p>Diet Labels: ${data.dietLabels.join(', ') || 'N/A'}</p>
        <p>Health Labels: ${data.healthLabels.join(', ') || 'N/A'}</p>
    `;

     // Scroll to the nutrition section
     document.getElementById('nutrition-section').scrollIntoView({ behavior: 'smooth' });
    

    // modal.classList.remove('hidden');
    // modal.style.display = 'flex';
}

// function closeModal() {
//     const modal = document.getElementById('nutrition-modal');
//     modal.classList.add('hidden');
//     modal.style.display = 'none';
// }

document.querySelectorAll('.recipe-card button').forEach(button => {
    button.addEventListener('click', () => {
        const ingredients = button.getAttribute('data-ingredients'); // Get ingredients from button
        fetchNutrition(ingredients);
    });
});
