const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);
console.log(params);

const blogsUrl =
  "https://haiderhashem.one/project-exam-1/wp-json/wp/v2/posts" + id;



  const corsUrl = url;

console.log(url);

const locationsContainer = document.querySelector(".locationsContainer");

function error(message = "error") {
	return `<div class"error">${message}</div>`;
}

// console.log(corsUrl);

async function getProductDetail() {
	try {
		const response = await fetch(corsUrl);
		const results = await response.json();
		const product = results;

		console.log(product);

		locationsContainer.innerHTML += `
                                    <div class="details">
                                        <h2>${product.name}</h2>
                                        <img src="${product.images[0].src}" />
                                    </div>`;
	} catch (error) {
		console.log(error);
	}
}

getProductDetail();
