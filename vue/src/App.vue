<script lang='ts'>
export default {
  data() {
    return {
      ad: '' // Initialize ad content as empty string
    }
  },
  async mounted() {
    // Assuming adrop is imported and available
    const res = await adrop.request('PUBLIC_TEST_UNIT_ID_320_50')
    this.ad = res.ad ?? '<div/>' // Set ad content or default if not available
  }
}
</script>

<template>
  <div>
    <h1>Adrop Example</h1>
    <div v-html='ad'></div>
  </div>
</template>
