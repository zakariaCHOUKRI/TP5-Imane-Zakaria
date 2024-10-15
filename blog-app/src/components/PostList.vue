<template>
  <div>
    <SinglePost
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @deleted="fetchPosts"
    />
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue';
import { getPosts } from '../composables/getPosts';

export default {
  name: 'PostList',
  components: { SinglePost },
  data() {
    return {
      posts: []
    };
  },
  async created() {
    await this.fetchPosts();
  },
  methods: {
    async fetchPosts() {
      this.posts = await getPosts();
    }
  }
}
</script>

<style scoped>
/* Add your styles here if needed */
</style>
