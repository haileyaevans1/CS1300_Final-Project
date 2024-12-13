const apiKey = "ba1e710";
const movieTitle = "Elf";

async function fetchMovieData(apiKey, movieTitle) {
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data; 
  } catch (error) {
    console.error('Error fetching movie data:', error);
    throw error; // Re-throw the error for handling in the calling function
  }
}

async function callAPI(movieTitle) {

  try {
    const movieData = await fetchMovieData(apiKey, movieTitle);
    console.log(movieData);

    // Access specific movie properties
    const title = movieData.Title;
    const year = movieData.Year;
    const actors = movieData.Actors;
    console.log(`Title: ${title}, Year: ${year}, Cast: ${actors}`);
  } catch (error) {
    console.error('Error fetching data for', movieTitle, error);
  }
}

callAPI("Elf");
callAPI("How The Grinch Stole Christmas");
callAPI("Home Alone");
callAPI("The Nightmare Before Christmas");
callAPI("The Polar Express");

