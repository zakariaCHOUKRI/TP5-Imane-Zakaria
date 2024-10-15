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
// Import Firestore utilities
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase'; // Ensure the correct import of Firestore config

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
      try {
        // Prepare the post object
        const post = {
          title: this.title,
          body: this.body,
          tags: this.tags.split(',').map(tag => tag.trim())
        };

        // Add the post to the Firestore "posts" collection
        await addDoc(collection(db, 'posts'), post);

        // Redirect to home after successfully adding the post
        this.$router.push('/');
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    }
  }
}
</script>

<style src="../styles.css"></style>