const blogsUrl =
  "https://haiderhashem.one/project-exam-1/wp-json/wp/v2/posts";

const productContainer = document.querySelector(".api-blog");
const viewMore = document.querySelector(".view-more-button");

function displayError(message = "error") {
  return `<div class"error">${message}</div>`;
}

async function apiBlogs(url) {
  try {
    const response = await fetch(url);
    const results = await response.json();
    const posts = results;

    console.log(results);

    for (let i = 0; i < results.length; i++) {
      productContainer.innerHTML += `<div class= "api-posts-style"><a href="blog_specific.html?id=${results[i].id}">
      <div><h2>${results[i].title.rendered}</h2></div>
            <div><img src="${results[i].jetpack_featured_media_url}" alt="Picture of ${results[i].title.rendered}"></img></div>
            <div>${results[i].excerpt.rendered}</div>
            </a></div>`;
    }
  } catch (error) {
    console.log(error);
  }
}

apiBlogs(blogsUrl + `?per_page=10`);

viewMore.onclick = function (event) {
  const newUrl = blogsUrl + `?per_page=100`;
  productContainer.innerHTML = "";
  apiBlogs(newUrl);
};