import { wines } from "../assets/mocks/wines";
import moment from "moment";

// TODO: call api on the backend as the key will be exposed from devtools
const blogUrl = `https://newsapi.org/v2/everything?apiKey=${process.env.REACT_APP_NEWS_API_KEY}`;
const dateFormat = "YYYY-MM-DD";

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

export const fetchPosts = async () => {
  const posts = [];
  try {
    await asyncForEach(wines, async (wine) => {
      const response = await fetch(
        blogUrl + `&qInTitle=${wine.apiSearchTerm}&pageSize=2&sortBy=popularity`
      );
      const { articles } = await response.json();

      const wineTypeArticles = articles.map((article) => ({
        title:
          article.title.length > 30
            ? article.title.substring(0, 30) + "..."
            : article.title,
        link: "#",
        date: moment(article.publishedAt).format(dateFormat),
        categories: wine.categories,
        image: article.urlToImage,
      }));

      posts.push(wineTypeArticles);
    });

    return posts.flat();
  } catch (err) {
    console.warn(err);
  }
};
