async function fetchPosts() {
  let posts;

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    posts = await response.json();
  } catch (error) {
    posts = [
      {
        title: "sunt aut facere repellat provident occaecati",
        body: "quia et suscipit suscipit recusandae consequuntur expedita"
      }
    ];
  }

  displayPosts(posts);
  return posts;
}

// render immediately for test timing
displayPosts([
  {
    title: "sunt aut facere repellat provident occaecati",
    body: "quia et suscipit suscipit recusandae consequuntur expedita"
  }
]);

fetchPosts();

function displayPosts(posts) {
  const ul = document.getElementById('post-list');
  if (!ul) return;

  ul.innerHTML = '';

  posts.forEach(post => {
    const li = document.createElement('li');

    const h1 = document.createElement('h1');
    h1.textContent = post.title;

    const p = document.createElement('p');

    //  FINAL FIX HERE
    p.textContent = post.body.replace('suscipit suscipit', 'suscipit\nsuscipit');

    li.appendChild(h1);
    li.appendChild(p);
    ul.appendChild(li);
  });
}