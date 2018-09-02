<template>
  <div>
    <p>{{status ? 'on' : 'off'}}</p>
    <button type="button" @click="toggle">toggle</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: false
    }
  },
  methods: {
    toggle() {
      this.status = !this.status
    }
  }
}
</script>
