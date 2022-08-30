window.onload = generatePosts();

async function getPosts(currentPage) {
  let perPage = 8;
  let url =
    "https://newshop.kreatif.no/wp-json/wp/v2/posts?_embed&per_page=" +
    perPage +
    "&page=" +
    currentPage;
  console.log(url);
  let posts = await fetch(url);
  let response = await posts.json();

  return response;
}

async function getPost(id) {
  let post = await fetch(
    `https://newshop.kreatif.no/wp-json/wp/v2/posts/${id}?_embed`
  );
  let response = await post.json();
}

async function generatePosts(currentPage) {
  if (typeof currentPage == "undefined") currentPage = 1;

  let post = await getPosts(currentPage);

  console.log(post);

  if (post.length < 8) {
    document.getElementById("loadMorePosts").style = "display: none";
  }

  let wrapper = document.getElementById("post-list");
  let count = 0;
  post.forEach((post) => {
    wrapper.innerHTML += `
            <a href=post.html?postId=${post.id} class="post">
                <img src=${post._embedded["wp:featuredmedia"][0].source_url} class="featured-img circle">
                <p class="headline">${post.title.rendered} </p>
            </a>
            `;

    count++;
  });
}

var currentPage = 1;

function loadMorePosts() {
  currentPage++;
  generatePosts(currentPage);
}
