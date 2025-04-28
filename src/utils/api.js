const getArticles = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const savedArticles =
        JSON.parse(localStorage.getItem("savedArticles")) || [];
      resolve(savedArticles);
    }, 500);
  });
};

const saveArticles = async ({ article, savedArticles }) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Retrieve savedarticles from localStorage
      let savedArticles =
        JSON.parse(localStorage.getItem("savedArticles")) || [];

      if (article.isSaved) {
        // create a random ID and add the article to savedArticles
        const articleWithId = { ...article, _id: crypto.randomUUID() };
        savedArticles = [...savedArticles, articleWithId];
      } else {
        savedArticles = savedArticles?.filter(
          (item) => item?._id !== article._id
        );
      }

      // Save the updated savedArticles to localStorage
      localStorage.setItem("savedArticles", JSON.stringify(savedArticles));

      // Resolve the promise with the updated savedArticles
      resolve(savedArticles);
    }, 500);
  });
};

export { getArticles, saveArticles };
