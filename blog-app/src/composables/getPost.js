export async function getPost(id) {
    const response = await fetch(`http://localhost:3000/posts/${id}`);
    const post = await response.json();
    return post;
  }
  