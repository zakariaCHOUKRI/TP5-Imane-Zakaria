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
// Import Firestore utilities
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';  // Import the Firebase Firestore configuration

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

    // Fetch the existing post data from Firestore
    const postRef = doc(db, 'posts', postId);
    const postSnap = await getDoc(postRef);

    if (postSnap.exists()) {
      const post = postSnap.data();
      this.title = post.title;
      this.body = post.body;
      this.tags = post.tags.join(', ');
    } else {
      console.error("Post not found");
    }
  },
  methods: {
    async updatePost() {
      try {
        const postId = this.$route.params.id;

        // Create an updated post object
        const updatedPost = {
          title: this.title,
          body: this.body,
          tags: this.tags.split(',').map(tag => tag.trim())
        };

        // Update the post in Firestore
        const postRef = doc(db, 'posts', postId);
        await updateDoc(postRef, updatedPost);

        // Redirect to the post detail page after update
        this.$router.push(`/posts/${postId}`);
      } catch (error) {
        console.error("Error updating document: ", error);
      }
    }
  }
}
</script>

<style scoped>
/* Add your styles here if needed */
</style>