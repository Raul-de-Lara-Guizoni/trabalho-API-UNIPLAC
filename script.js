const btnGet = document.getElementById("btn-get");
const postList = document.getElementById("post-list");

btnGet.addEventListener("click", async function(){

    postList.innerHTML = "<li>Carregando...</li>";

    try{

        const resposta = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");

        const posts = await resposta.json();

        postList.innerHTML = "";

        posts.forEach(function(post){

            const item = document.createElement("li");

            item.textContent = post.id + " - " + post.title;

            postList.appendChild(item);

        });

    }catch(error){

        postList.innerHTML = "<li>Erro ao buscar posts</li>";

    }

});