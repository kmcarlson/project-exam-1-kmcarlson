window.onload = generatePosts();

async function getPosts() {
  let posts = await fetch(
    "https://newshop.kreatif.no/wp-json/wp/v2/posts?_embed&per_page=100"
  );
  let response = await posts.json();

  return response;
}

async function getPost(id) {
  let post = await fetch(
    `https://newshop.kreatif.no/wp-json/wp/v2/posts/${id}?_embed&per_page=100`
  );
  let response = await post.json();
}

var carouselDivWrappers = 0;

async function generatePosts() {
  let post = await getPosts();

  console.log(post);

  let wrapper = document.getElementById("carousel");
  let div = document.createElement("div");

  let firstDivWrapper = true;

  for (let i = 0; i < post.length; i++) {
    let image = document.createElement("img");
    image.src = `${post[i]._embedded["wp:featuredmedia"][0].source_url}`;
    image.classList.add("featured-img");
    image.classList.add("circle");

    let text = document.createElement("p");
    text.innerHTML = `${post[i].title.rendered}`;
    text.classList.add("headline");

    let link = document.createElement("a");
    link.href = `post.html?postId=${post[i].id}`;
    link.classList.add("post");

    link.appendChild(image);
    link.appendChild(text);

    div.appendChild(link);
    wrapper.appendChild(div);

    if (i > 0 && (i + 1) % 4 == 0) {
      if (!firstDivWrapper) {
        div.style = "display: none";
      } else {
        firstDivWrapper = false;
      }

      div = document.createElement("div");
      carouselDivWrappers++;
    }
  }

 // wrapper.appendChild(div);


}
