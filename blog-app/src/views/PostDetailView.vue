<template>
  <div>
    <h1>{{ post.title }}</h1>
    <p>{{ post.body }}</p>
    <TagCloud :tags="post.tags" />
  </div>
</template>

<script>
import { getPost } from '../composables/getPost';
import TagCloud from '../components/TagCloud.vue';

export default {
  name: 'PostDetailView',
  components: { TagCloud },
  data() {
    return {
      post: {}
    };
  },
  async created() {
    const postId = this.$route.params.id;
    this.post = await getPost(postId);
  }
}
</script>

<style src="../styles.css"></style>
