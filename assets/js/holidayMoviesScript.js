document.addEventListener("DOMContentLoaded", function () {
const apiKey = "ba1e710";
const movieTitles = [
  "Elf", 
  "How The Grinch Stole Christmas", 
  "Home Alone", 
  "The Nightmare Before Christmas", 
  "The Polar Express"
];

async function fetchMovieData(apiKey, movieTitle) {
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log('API response:', data); // Log the API response to check for errors
    return data; 
  } catch (error) {
    console.error('Error fetching movie data:', error);
    throw error; // Re-throw the error for handling in the calling function
  }
}

async function showModal(movieTitle) {
  const modal = document.getElementById("movieModal");
  const modalData = document.getElementById("modal-data");
  
  try {
    const movieData = await fetchMovieData(apiKey, movieTitle);

    // Populate modal content with movie details
    modalData.innerHTML = `
      <h2>${movieData.Title} (${movieData.Year})</h2>
      <p><strong>Cast:</strong> ${movieData.Actors}</p>
      <p><strong>Plot:</strong> ${movieData.Plot}</p>
    `;

    // Display the modal
    modal.style.display = "block";
  } catch (error) {
    modalData.innerHTML = "<p>Error loading movie details.</p>";
  }
}

// Close the modal when the user clicks the close button
document.getElementById("movieClose-modal").onclick = () => {
  const modal = document.getElementById("movieModal");
  modal.style.display = "none";
};

// Close the modal if the user clicks outside of the modal
window.onclick = (event) => {
  const modal = document.getElementById("movieModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};


  // Attach the showModal function to movie buttons
  movieTitles.forEach((movieTitle) => {
    const button = document.querySelector(`#movie-${movieTitle.replace(/\s+/g, '-').toLowerCase()} button`);
    if (button) {
      button.onclick = () => showModal(movieTitle);
    }
  });
});





// async function callAPI(movieTitle) {
// const movieListContainer = document.getElementById("movie-list");


//   try {
//     const movieData = await fetchMovieData(apiKey, movieTitle);
    
//     // Create a container for each movie's details
//     const movieDiv = document.createElement("div");
//     movieDiv.classList.add("movie");

//     // Access specific movie properties and display them
//     const title = movieData.Title;
//     const year = movieData.Year;
//     const actors = movieData.Actors;
    
//     // Adding movie information to the div
//     movieDiv.innerHTML = `
//       <h2>${title} (${year})</h2>
//       <p><strong>Cast:</strong> ${actors}</p>
//     `;

//     // Append the movie details to the list container
//     movieListContainer.appendChild(movieDiv);

//   } catch (error) {
//     console.error('Error fetching data for', movieTitle, error);
//   }
// }
// }

// callAPI();






//   try {
//     const movieData = await fetchMovieData(apiKey, movieTitle);
//     console.log(movieData);

//     // Access specific movie properties
//     const title = movieData.Title;
//     const year = movieData.Year;
//     const actors = movieData.Actors;
//     console.log(`Title: ${title}, Year: ${year}, Cast: ${actors}`);
//   } catch (error) {
//     console.error('Error fetching data for', movieTitle, error);
//   }
// }

// callAPI("Elf");
// callAPI("How The Grinch Stole Christmas");
// callAPI("Home Alone");
// callAPI("The Nightmare Before Christmas");
// callAPI("The Polar Express");





// //function to handle button click and display modal
// const showDetailsBtn = document.getElementById('showDetailsBtn');
// const modalBodyContent = document.getElementById('modalBodyContent');

// showDetailsBtn.addEventListener('click', async () => {
//   try{
//     const movieTitle = "Elf";
//     const movieData = await fetchMovieData(apiKey, movieTitle);

//     const titleEl = document.createElement('h3');
//     titleEl.textContent = 'Title: ${movieData.Title}';
//     modalBodyContent.appendChild(titleEl);

//     const yearEl = document.createElement('h3');
//     titleEl.textContent = 'Year: ${movieData.Year}';
//     modalBodyContent.appendChild(yearEl);

//     const actorsEl = document.createElement('h3');
//     titleEl.textContent = 'Actors: ${movieData.Actors}';
//     modalBodyContent.appendChild(actorsEl);

//     //Display modal
//     const modal = new bootstrap.Modal(document.getElementsById('movieDetailsModal'));
//     modal.show();
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
//   }
// )