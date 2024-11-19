const symbol = "ALGOUSD4";
const api_url = `https://api.api-ninjas.com/v1/cryptoprice?symbol=${symbol}`;
// const api_url = `https://api.api-ninjas.com/v1/cryptosymbols`;
const apiKey = "oJV6f+7HZ8CtLrZmo2tv/w==RcxZvbCpPgAFqhh9";

fetch(api_url, {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
})
  .then((response) => {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
