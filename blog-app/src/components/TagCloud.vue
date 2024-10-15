<template>
  <div>
    <h3>Tags</h3>
    <ul>
      <li v-for="tag in tags" :key="tag">
        <router-link :to="`/tags/${tag}`">{{ tag }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'TagCloud',
  props: {
    tags: Array
  }
}
</script>
