<!-- stats -->
<template lang="html">
  <div id="heading" class="content">
    <div class="subtitle">Stats</div>
    <hr />
    <div v-for="(value, key) in stats">
      <small>[-] <strong>{{ key }}:</strong> {{ value }}</small>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'stats',
  data: function () {
    return {
      stats: {
        'Info': 'Loading stats...',
        'From': process.env.STATS_API_ENDPOINT
      }
    }
  },
  methods: {
    getStats: function () {
      axios.get(process.env.STATS_API_ENDPOINT).then((response) => {
        this.stats = response.data
      }, (err) => {
        console.log(err)
      })
    }
  },
  mounted: function () {
    this.getStats()
  }
}
</script>
