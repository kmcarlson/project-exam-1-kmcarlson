window.onload=generatePost()

async function getPost(id) {
    let post = await fetch(`https://newshop.kreatif.no/wp-json/wp/v2/posts/${id}?_embed`)
    let response = await post.json()

    return response


}

async function generatePost() {
    let params = (new URL(document.location)).searchParams;
    let postId = params.get("postId");
    let post = await getPost(postId)
    document.title = `${post.title.rendered} | Foodz - The best recipes`;
    let wrapper = document.getElementById('post-wrapper')
        wrapper.innerHTML +=`
            <section class="blogg">
                <h2 class="headline ">${post.title.rendered}</h2>
                <p class="content">${post.content.rendered}</p>
            </section> 
            <section onclick="showModal('modal-hidden')" class="post-img">
                <img  src=${post._embedded['wp:featuredmedia'][0].source_url}>
            </section>  
            
            <div id="modal-hidden" onclick="clickOutside(event,'modal')">
            <img class="modal-img" src=${post._embedded['wp:featuredmedia'][0].source_url}>
            </div>
        `
}