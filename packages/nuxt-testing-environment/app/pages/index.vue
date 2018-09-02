
<template>
  <div>
    <h2>カウンター</h2>
    <h3>Count: <span class="count">{{count}}</span></h3>
    <button type="button" @click="increment">Increment</button>
    <AppButton />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import AppButton from '~/components/AppButton.vue'

export default {
  components: {
    AppButton
  },
  computed: {
    ...mapGetters(['count'])
  },
  methods: {
    ...mapActions(['increment'])
  }
}
</script>
