
const url =
"https://haiderhashem.one/project-exam-1/wp-json/wp/v2/posts?per_page=100";

const slideShow = document.querySelector(".slideContainer");
const button_next = document.querySelector(".nextButton");
const button_prev = document.querySelector(".previousButton");

async function getProducts(url) {
  try {
    const response = await fetch(url);
    const results = await response.json();
    slideShow.innerHTML = "";
    console.log(results);

    results.forEach(function (results) {
      slideShow.innerHTML += `<div class="slider-post">
                                <a href="blog-post-specific.html?id=${results.id}" class="slider-content">
                                 <h3>${results.title.rendered}</h3>
                                 <img src="${results.content.rendered}" alt="Picture of ${results.title.rendered}" />
                                </a>
                              </div>`;
    });

    const slideItems = document.querySelectorAll(".slider-post");

    slideItems.forEach(function (slide, index) {
      slide.style.left = `${index * 100}%`;
    });

    let count = 0;

    button_next.addEventListener("click", function () {
      if (window.innerWidth > 1200) {
        count = count + 3;
      } else if (window.innerWidth > 800) {
        count = count + 2;
      } else {
        count++;
      }
      slide();
    });

    button_prev.addEventListener("click", function () {
      if (window.innerWidth > 1200) {
        count = count - 3;
      } else if (window.innerWidth > 800) {
        count = count - 2;
      } else {
        count--;
      }
      slide();
    });

    function slide() {
      if (count >= slideItems.length) {
        count = 0;
      }

      if (count < 0) {
        if (window.innerWidth > 1200) {
          count = slideItems.length - 3;
        } else if (window.innerWidth > 800) {
          count = slideItems.length - 2;
        } else {
          count = slideItems.length - 1;
        }
      }

      slideItems.forEach(function (slide) {
        slide.style.transform = `translateX(-${count * 100}%)`;
      });
    }
  } catch (error) {
    console.log(error);
  }
}

getProducts(url);
