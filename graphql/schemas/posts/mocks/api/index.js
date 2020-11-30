const wines = require("../wines");
const fs = require("fs");
const fetch = require("node-fetch");
const moment = require("moment");

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const fetchPosts = async () => {
  const blogUrl = `https://newsapi.org/v2/everything?apiKey=${process.env.NEWS_API_KEY}`;
  const dateFormat = "YYYY-MM-DD";
  const posts = [];
  try {
    await asyncForEach(wines, async (wine) => {
      const response = await fetch(
        blogUrl + `&qInTitle=${wine.apiSearchTerm}&sortBy=popularity`
      );
      const { articles } = await response.json();
      const wineTypeArticles = articles.map((article) => ({
        title: article.title,
        link: article.url,
        author: article.author,
        date: moment(article.publishedAt).format(dateFormat),
        categories: wine.categories,
        image: article.urlToImage,
      }));

      posts.push(wineTypeArticles);
    });
    fs.appendFile(
      "schemas/posts/mocks/api-response.js",
      JSON.stringify(posts.flat()),
      function (err) {
        if (err) throw err;
        console.log("Saved mock data!");
      }
    );

    return posts.flat();
  } catch (err) {
    console.warn(err);
  }
};

module.exports = {
  fetchPosts,
};
