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
// Import Firestore utilities
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Import Firestore database config

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
      try {
        // Reference the post document in Firestore
        const postRef = doc(db, 'posts', this.post.id);

        // Delete the post document from Firestore
        await deleteDoc(postRef);

        // Emit an event to notify the parent component about the deletion
        this.$emit('deleted', this.post.id);

        // Optionally, you can navigate back to another page after deletion
        // this.$router.push('/');
      } catch (error) {
        console.error('Error deleting document: ', error);
      }
    }
  }
}
</script>

<style scoped>
.post {
  margin-bottom: 20px;
}
</style>