const API_key = "oJV6f+7HZ8CtLrZmo2tv/w==RcxZvbCpPgAFqhh9";
// https://api.api-ninjas.com/v1/quotes?category=happiness

const heading = document.querySelector(".heading");
const searchBtn = document.querySelector("#btn");
const loader = document.querySelector("#loader");
let category = document.querySelector("#category");

async function nextQuoteCategory(category) {
  loader.style.display = "block";
  // Fetch the quote from the 'happiness' category
 
   const url1 = `https://api.api-ninjas.com/v1/quotes?category=${category}`;

  const response = await fetch(url1, {
    method: "GET",  
    headers: {
      "X-Api-Key": API_key,  
    },
  });

  const data = await response.json();

  loader.style.display = "none";

  console.log(data);

  heading.innerHTML = `"${data[0].quote}"`;
}

// searchBtn.addEventListener("click", () => {
//   nextQuote();
// });
searchBtn.addEventListener("click", () => {
  nextQuoteCategory(category.value);
})