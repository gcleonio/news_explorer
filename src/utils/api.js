import { baseUrl } from "./constants";
import { checkServerResponse } from "./auth";

const getArticles = () => {
  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     const savedArticles =
  //       JSON.parse(localStorage.getItem("savedArticles")) || [];
  //     resolve(savedArticles);
  //   }, 500);
  // });
  const token = localStorage.getItem("token");
  console.log("JWT token being sent:", token);
  return fetch(`${baseUrl}/articles`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkServerResponse);
};

const saveArticles = ({ article }) => {
  const token = localStorage.getItem("token");
  return fetch(`${baseUrl}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      keyword: article.keyword,
      title: article.title,
      text: article.description,
      date: article.publishedAt,
      source: article.source.name,
      link: article.url,
      image: article.urlToImage,
    }),
  }).then(checkServerResponse);
};

const removeSavedArticle = (selectedArticle) => {
  const token = localStorage.getItem("token");
  return fetch(`${baseUrl}/articles/${selectedArticle._id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkServerResponse);
};

// const saveArticles = async ({ article, savedArticles }) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       // Retrieve savedarticles from localStorage
//       let savedArticles =
//         JSON.parse(localStorage.getItem("savedArticles")) || [];

//       if (article.isSaved) {
//         // create a random ID and add the article to savedArticles
//         const articleWithId = { ...article, _id: crypto.randomUUID() };
//         savedArticles = [...savedArticles, articleWithId];
//       } else {
//         savedArticles = savedArticles?.filter(
//           (item) => item?._id !== article._id
//         );
//       }

//       // Save the updated savedArticles to localStorage
//       localStorage.setItem("savedArticles", JSON.stringify(savedArticles));

//       // Resolve the promise with the updated savedArticles
//       resolve(savedArticles);
//     }, 500);
//   });
// };

export { getArticles, saveArticles, removeSavedArticle };
