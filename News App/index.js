const API_KEY = "58466f7989b64e0d8cc8092a9cfc093b";

const url = "https://newsapi.org/v2/everything?q=";

window.addEventListener("load", () => fetchNews("Headlines"));

async function fetchNews(query) {
  // console.log(query);

  let res = await fetch(`${url}${query}&from=2024-10-11&apiKey=${API_KEY}`);

  let data = await res.json();
  console.log(data);
  console.log(data.articles);
  bindNews(data.articles);
}

//   let promise = new Promise((resolve, reject) => {
//     let isDone = true;

//     if (isDone) {
//       resolve(
//         (res = fetch(`${url}${query}&from=2024-10-11&apiKey=${API_KEY}`)),
//         (data = res.json()),
//         console.log(data),
//         console.log(data.articles),
//         bindNews(data.articles)
//       );
//       console.log("Work done");
//     } else {
//       reject("Work not done!");
//     }
//   });
// }

// fetchNews()
//   .then((resolve) => {
//     console.log(resolve);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const bindNews = (articles) => {
  if (articles.length > 0) {
    var str = "";

    articles.forEach((article) => {
      articles.forEach((article) => {
        str += ` <div class="col-xl-4 news-card">
          <div class="card" >
            <img src="${article.urlToImage}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h4 class="card-title">${article.title}</h4>
              <h6>original gadget 🤪 ${article.publishedAt}</h6>
              <p class="card-text">
               ${article.discription}
              </p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>`;
      });
    });
    document.querySelector(".row").innerHTML = str;
  }
};

// https://newsapi.org/v2/everything?q=tesla&from=2024-10-11&sortBy=publishedAt&apiKey=API_KEY
