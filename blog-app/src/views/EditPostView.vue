<template>
  <div>
    <h1>Edit Post</h1>
    <form @submit.prevent="updatePost">
      <input v-model="title" type="text" placeholder="Title" required />
      <textarea v-model="body" placeholder="Body" required></textarea>
      <input v-model="tags" type="text" placeholder="Tags (comma separated)" />
      <button type="submit">Update Post</button>
    </form>
  </div>
</template>

<script>
import { getPost } from '../composables/getPost';

export default {
  name: 'EditPostView',
  data() {
    return {
      title: '',
      body: '',
      tags: ''
    };
  },
  async created() {
    const postId = this.$route.params.id;
    const post = await getPost(postId);
    this.title = post.title;
    this.body = post.body;
    this.tags = post.tags.join(', ');
  },
  methods: {
    async updatePost() {
      const postId = this.$route.params.id;
      const updatedPost = {
        title: this.title,
        body: this.body,
        tags: this.tags.split(',').map(tag => tag.trim())
      };
      await fetch(`http://localhost:3000/posts/${postId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedPost)
      });
      this.$router.push(`/posts/${postId}`);
    }
  }
}
</script>

<style scoped>
/* Add your styles here if needed */
</style>
