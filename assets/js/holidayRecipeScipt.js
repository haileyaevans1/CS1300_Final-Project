// Pre-defined recipes  
const recipes = {  
    "hot chocolate": {  
      title: "Hot Chocolate",  
      ingredients: "2 cups milk, 2 tbsp cocoa powder, 2 tbsp sugar, 1/4 tsp vanilla extract",  
      instructions: "Heat milk in a pan. Add cocoa powder and sugar, stirring until dissolved. Add vanilla and serve warm."  
    },  
    "eggnog": {  
      title: "Eggnog",  
      ingredients: "2 cups milk, 1/2 cup cream, 3 egg yolks, 1/4 cup sugar, 1/4 tsp nutmeg",  
      instructions: "Whisk egg yolks and sugar. Heat milk and cream in a pan. Slowly add to yolk mixture while whisking. Sprinkle nutmeg and serve chilled."  
    }  
  };  
  
  // Select the button and modal elements  
  const recipeButton = document.getElementById('see-recipe-button');  
  const modal = document.getElementById('recipe-modal');  
  const closeModal = document.getElementById('close-modal');  
  const recipeTitle = document.getElementById('recipe-title');  
  const recipeIngredients = document.getElementById('recipe-ingredients');  
  const recipeInstructions = document.getElementById('recipe-instructions');  
  
  // Event listener for button click  
  recipeButton.addEventListener('click', () => {  
    const recipeKey = "hot chocolate"; // Change this to dynamically load other recipes  
    const recipe = recipes[recipeKey];  
  
    if (recipe) {  
      recipeTitle.textContent = recipe.title;  
      recipeIngredients.textContent = `Ingredients: ${recipe.ingredients}`;  
      recipeInstructions.textContent = `Instructions: ${recipe.instructions}`;  
  
      modal.style.display = 'block';  
    } else {  
      alert("Recipe not found!");  
    }  
  });  
  
  // Close modal when user clicks the close button  
  closeModal.addEventListener('click', () => {  
    modal.style.display = 'none';  
  });  
  



// async function fetchRecipes(ingredient) {
//     const appId = 'e91ee2b3e87d40c3a9168d6ce02f96e9';
//     const appKey = 'b2074b83d5344c9bba450f935717d342';
//     const url = `https://platform.fatsecret.com/my-account/api-key?type=public&q=${encodeURIComponent(ingredient)}&app_id=e91ee2b3e87d40c3a9168d6ce02f96e9&app_key=b2074b83d5344c9bba450f935717d342`;

//     try {
//         console.log('Fetching data from API: ', url)
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log('Data received: ', data);

//         displayRecipe(data.hits);
//     } catch (error) {
//         console.error('Error fetching recipe data: ', error);
//         alert('Failed to fetch recipe information. Please try again later.');
//     }
// }

// function displayRecipe(recipes, url) {
//     const seeRecipeButton = document.getElementById('see-recipe-button');
//     recipeContainer.innerHTML = ''; // Clear any existing content.

//     recipes.forEach((recipeObj) => {
//         const recipe = recipeObj.recipe;
//         const recipeCard = document.createElement('div');
//         recipeCard.classList.add('recipe-card');

//         recipeCard.innerHTML = `
//             <h3>${recipe.label}</h3>
//             <img src="${recipe.image}" alt="${recipe.label}">
//             <p>Calories: ${Math.round(recipe.calories)}</p>
//             <a href="${recipe.url}" target="_blank">View Full Recipe</a>
//         `;
//         recipeContainer.appendChild(recipeCard);
//     });
// }



// document.getElementById('see-recipe-button').addEventListener('click', () => {
//     console.log('Button clicked!')
//     const ingredient = document.getElementById('ingredient-input').value;
//     console.log('Ingredient: ', ingredient)
//     // if (ingredient.trim()) {
//     //     fetchRecipe(ingredient);
//     // } else {
//     //     alert('Please select button to see recipes!');
//     // }
// });


// function closeModal() {
//     const modal = document.getElementById('nutrition-modal');
//     modal.classList.add('hidden');
//     modal.style.display = 'none';
// }

// document.querySelectorAll('.recipe-card button').forEach(button => {
//     button.addEventListener('click', () => {
//         const ingredients = button.getAttribute('data-ingredients'); // Get ingredients from button
//         fetchNutrition(ingredients);
//     });
// });
