<template>
  <section class="container">
    <div>
      <h1 class="title">
        modules-proxy-example
      </h1>
      <ul>
        <li v-for="post in posts" :key="post.id">
          {{post.title}}
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    }
  },
  async mounted() {
    this.posts = await this.$axios.$get('/api/posts')
  }
}
</script>

<style scoped>
.container {
  margin: 16px;
}
ul {
  margin: 16px 0;
}
</style>

