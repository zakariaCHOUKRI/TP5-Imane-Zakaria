<template>
  <div>
    <PostList />
    <TagCloud :tags="tags" />
  </div>
</template>

<script>
import PostList from '../components/PostList.vue';
import TagCloud from '../components/TagCloud.vue';
import { getPosts } from '../composables/getPosts';

export default {
  name: 'HomeView',
  components: { PostList, TagCloud },
  data() {
    return {
      tags: []
    };
  },
  async created() {
    const posts = await getPosts();
    this.tags = [...new Set(posts.flatMap(post => post.tags))];
  }
}
</script>

<style src="../styles.css"></style>