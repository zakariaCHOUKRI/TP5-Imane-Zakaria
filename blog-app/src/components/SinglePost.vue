<template>
  <div class="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body.substring(0, 50) }}...</p>
    <router-link :to="`/posts/${post.id}`">Read more</router-link>
    <button class="edit" @click="editPost">Edit</button>
    <button class="delete" @click="deletePost">Delete</button>
  </div>
</template>

<script>
export default {
  name: 'SinglePost',
  props: {
    post: Object
  },
  methods: {
    editPost() {
      this.$router.push(`/editPost/${this.post.id}`);
    },
    async deletePost() {
      await fetch(`http://localhost:3000/posts/${this.post.id}`, {
        method: 'DELETE'
      });
      this.$emit('deleted', this.post.id); // Emit event to notify parent about deletion
    }
  }
}
</script>

<style scoped>
.post {
  margin-bottom: 20px;
}
</style>
