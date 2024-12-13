// const query = 'holiday';
const apiUrl = `https://rapidapi.com`;
const apiKey = `8486df94cemshc4552ca78c22bf7p1a07b5jsn97cba309172b`

fetch(apiUrl)
.then(response => {
  if (!response.ok) {
      throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  const recipeContainer = document.getElementById('recipe-container');

  // Clear previous recipes if they exist
  recipeContainer.innerHTML = '';

  data.forEach(recipe => {
      const card = document.createElement('div');
      card.classList.add('recipe-card');

      const image = document.createElement('img');
      image.src = recipe.imageUrl || 'default-image-url.jpg'; 
      card.appendChild(image);

      const title = document.createElement('h3');
      title.textContent = recipe.name || 'Title Recipe'; 
      card.appendChild(title);

      const button = document.createElement('button');
      button.textContent = 'See Recipe';
      button.addEventListener('click', () => {
          showRecipeModal(recipe);
      });
      card.appendChild(button);

      recipeContainer.appendChild(card);
  });
})
.catch(error => {
  console.error('Error fetching data:', error);
  const recipeContainer = document.getElementById('recipe-container');
  const errorElement = document.createElement('p');
  errorElement.textContent = 'Error loading recipes. Please try again later.';
  recipeContainer.appendChild(errorElement);
});

function showRecipeModal(recipe) {
  const modal = document.getElementById('recipe-modal');
  const titleElement = document.getElementById('modal-title');
  const instructionsElement = document.getElementById('modal-instructions');

  titleElement.textContent = recipe.name || 'Untitled Recipe';
  instructionsElement.textContent = recipe.instructions || 'No instructions available.';

  modal.style.display = 'flex'; 
}

function closeModal() {
  const modal = document.getElementById('recipe-modal');
  modal.style.display = 'none';
}