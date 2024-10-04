<script lang='ts'>
export default {
  data() {
    return {
      banner: null,
      nativeAd: null,
      async sendProperty(): Promise<void> {
        await adrop.setProperty('property_key', 'property_value')
      },
      async sendEvent() {
        await adrop.logEvent("event_name", {
          "data_key_1": 1,
          "data_key_2": 1.1,
          "data_key_3": true,
          "data_key_4": "value_text"
        })
      }
    }
  },
  async mounted() {
    this.banner = await adrop.request('PUBLIC_TEST_UNIT_ID_375_80')
    this.nativeAd = await adrop.request('PUBLIC_TEST_UNIT_ID_NATIVE')
  },
}
</script>

<template>
  <div>
    <h1>Adrop Example</h1>

    <button @click='sendProperty()'>Property</button>
    <button @click='sendEvent()'>Event</button>

    <h2>Banner Ad</h2>
    <div class='container'>
      <div v-html='banner?.ad' class='creative'/>
    </div>

    <h2>Native Ad</h2>
    <div class='container'>
      <div class='row'>
        <img class='icon' :src='nativeAd?.profile.displayLogo' alt='Adrop profile logo' />
        <div class='text'>{{ nativeAd?.profile.displayName }}</div>
      </div>

      <div class='row'>
        <div class='text'>{{ nativeAd?.headline }}</div>
        <div class='text'>{{ nativeAd?.body }}</div>
      </div>
      <div v-html='nativeAd?.ad' class='creative'/>
    </div>
  </div>
</template>
