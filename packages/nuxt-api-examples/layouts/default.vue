<template>
  <div>
    <span>default layout</span>
    <AppNavigation />
    <hr>
    <nuxt />
    <hr>
    <footer>
      footer
    </footer>
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation.vue'

export default {
  components: {
    AppNavigation
  }
}
</script>

<style>
hr {
  margin: 16px 0;
  border: solid 1px #e5e5e5;
}

html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}

body {
  margin: 16px;
}

/* ul {
  display: flex;
}
li {
  margin-right: 16px;
} */
</style>
