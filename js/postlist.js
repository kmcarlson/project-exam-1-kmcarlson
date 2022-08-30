window.onload=generatePosts()

async function getPosts(){
    let posts = await fetch('https://newshop.kreatif.no/wp-json/wp/v2/posts?_embed&per_page=100')
    let response = await posts.json()



    return response
}

async function getPost(id) {
    let post = await fetch(`https://newshop.kreatif.no/wp-json/wp/v2/posts/${id}?_embed&per_page=100`)
    let response = await post.json()


}

async function generatePosts() {
    let post = await getPosts()

    console.log(post)

    let wrapper = document.getElementById('post-list')
    let count = 0;
    post.forEach(post => {
        let postClass = 'postVisible';
        if (count > 7) {
                 postClass = 'postHidden';
        }
       
        
        wrapper.innerHTML +=`
            <a href=post.html?postId=${post.id} class="post${postClass}">
                <img src=${post._embedded['wp:featuredmedia'][0].source_url} class="featured-img circle">
                <p class="headline">${post.title.rendered} </p>
            </a>
            `
      
    count++;
        
        
   
        
    });

}