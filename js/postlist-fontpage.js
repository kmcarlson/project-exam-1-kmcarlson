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

    let wrapper = document.getElementById('carousel')
    let div = document.createElement("div");

    for(let i = 1; i < post.length; i++) {
        if(i % 4 == 0) {
            let image = document.createElement("img");
            image.src = `${post[i]._embedded['wp:featuredmedia'][0].source_url}`;
            image.classList.add("featured-img");

            let text = document.createElement("p");
            text.innerHTML = `${post[i].title.rendered}`;

            let link = document.createElement("a");
            link.href = `post.html?postId=${post[i].id}`;
            link.class = 'post';

            link.appendChild(image);
            link.appendChild(text);

            div.appendChild(link);
            wrapper.appendChild(div);

            div = document.createElement("div");
        }
        else {
            let image = document.createElement("img");
            image.src = `${post[i]._embedded['wp:featuredmedia'][0].source_url}`;
            image.classList.add("featured-img");

            let text = document.createElement("p");
            text.innerHTML = `${post[i].title.rendered}`;

            let link = document.createElement("a");
            link.href = `post.html?postId=${post[i].id}`;
            link.class = 'post';

            link.appendChild(image);
            link.appendChild(text);

            div.appendChild(link);
            wrapper.appendChild(div);
        }

    }
    
    wrapper.appendChild(div);

    // post.forEach(post => {
    //     wrapper.innerHTML +=`
    //         <a href=post.html?postId=${post.id} class="post">
    //             <img src=${post._embedded['wp:featuredmedia'][0].source_url} class="featured-img">
    //             <p>${post.title.rendered}</p>
    //         </a>
    //     `;
        
    // });

}