window.onload=generatePosts()

async function getPosts(){
    let posts = await fetch('https://newshop.kreatif.no/wp-json/wp/v2/posts?_embed')
    let response = await posts.json()

  

    return response
}

async function getPost(id) {
    let post = await fetch(`https://newshop.kreatif.no/wp-json/wp/v2/posts/${id}?_embed`)
    let response = await post.json()


}

async function generatePosts() {
    let post = await getPosts()

    console.log(post)

    let wrapper = document.getElementById('post-list')
    post.forEach(post => {
        wrapper.innerHTML +=`
            <a href=post.html?postId=${post.id} class="post">
                <img src=${post._embedded['wp:featuredmedia'][0].source_url} class="featured-img">
                <p>${post.title.rendered}</p>
            </a>

        
        `
        
    });

}