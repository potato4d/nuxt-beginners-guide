<template>
  <section class="container">
    <div v-if="active">
      <p v-if="isOnline" class="is-online">
        ● Application is online
      </p>
      <p v-else class="is-offline">
        ○ Application is offline.
      </p>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      active: false,
      isOnline: false
    }
  },
  mounted () {
    this.active = true
    this.isOnline = navigator.onLine
  }
}
</script>

<style scoped>
.is-online {
  color: #62C082;
  font-weight: bold;
  font-size: 24px;
}

.is-offline {
  color: #777;
  font-weight: bold;
  font-size: 24px;
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
