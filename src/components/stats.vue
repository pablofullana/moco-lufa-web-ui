<!-- stats -->
<template lang="html">
  <div id="heading" class="content">
    <p class="subtitle">Stats</p>
    <hr>
    <div v-for="(value, key) in stats">
      <small><strong>{{ key }}:</strong> {{ value }}</small>
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
        'Info': 'Loading stats...'
      }
    }
  },
  methods: {
    getStats: function () {
      axios.get('http://192.168.0.5:3000/api/v1/stats').then((response) => {
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
