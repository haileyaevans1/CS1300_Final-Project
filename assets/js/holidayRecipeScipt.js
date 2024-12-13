// document.querySelectorAll('.recipe-card button').forEach(button => {
//     button.addEventListener('click', async () => {
//         const ingredients = "1 cup sugar"; // Example
//         const response = await fetch(`https://api.edamam.com/api/nutrition-data?app_id=YOUR_APP_ID&app_key=YOUR_APP_KEY&ingr=${encodeURIComponent(ingredients)}`);
//         const data = await response.json();
//         console.log(data); // Display data in the UI
//     });
// });

//   if (dots.style.display === "none") {
//     dots.style.display = "inline";
//     btnText.innerHTML = "Read less";
//     moreText.style.display = "inline";
//   } else {
//     dots.style.display = "none";
//     btnText.innerHTML = "Read more";
//     moreText.style.display = "none";
//   }



function fetchNutrition() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");

    // Toggle content visibility
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }


    // Fetch data only when "Read more" is clicked and content is shown
    if (btnText.innerHTML === "Read more" && moreText.style.display === "inline") {
        const ingredients = "1 cup sugar"; // Example 

        fetch(`https://api.edamam.com/api/nutrition-data?app_id=46d6d018&app_key=2f5287ec4d85a92cf541063efca25a8e&ingr=${encodeURIComponent(ingredients)}`)
            .then(response => response.json())
            .then(data => {
                // Update "moreText" content with fetched data (modify as needed)
                moreText.innerHTML = `<b>Nutritional Information:</b><br>` + formatData(data); // Example formatting
            })
            .catch(error => {
                console.error("Error fetching data:", error);
                moreText.innerHTML = "Error fetching nutritional information.";
            });
    }
}

// Function to format data (optional, modify as needed)
function formatData(data) {
    // Extract and format relevant data from "data" object
    let formattedData = "";
    if (data.totalNutrients) {
        formattedData += "Calories: " + data.totalNutrients.totalNutrientsKCal.quantity + "<br>";
        formattedData += "Sugar: " + data.totalNutrients.SUGAR.quantity + "g<br>";
        // ... add more as needed
    }
    return formattedData;
}