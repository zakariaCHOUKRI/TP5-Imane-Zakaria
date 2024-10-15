<template>
  <div>
    <h1>Create Post</h1>
    <form @submit.prevent="createPost">
      <input v-model="title" type="text" placeholder="Title" required />
      <textarea v-model="body" placeholder="Body" required></textarea>
      <input v-model="tags" type="text" placeholder="Tags (comma separated)" />
      <button type="submit">Add Post</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreatePostView',
  data() {
    return {
      title: '',
      body: '',
      tags: ''
    };
  },
  methods: {
    async createPost() {
      const post = {
        title: this.title,
        body: this.body,
        tags: this.tags.split(',').map(tag => tag.trim())
      };
      await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(post)
      });
      this.$router.push('/');
    }
  }
}
</script>

<style src="../styles.css"></style>
