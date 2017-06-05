<!-- server-setup -->
<template lang="html">
  <div id="heading" class="content">
    <p class="subtitle">Server Setup</p>
    <hr>
    <div v-for="(value, key) in serverSetup">
      <small><strong>{{ key }}:</strong> {{ value }}</small>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'serverSetup',
  data: function () {
    return {
      serverSetup: {
        'Info': 'Loading server setup...'
      }
    }
  },
  methods: {
    getServerSetup: function () {
      axios.get('http://192.168.0.5:3000/api/v1/server_setup').then((response) => {
        this.serverSetup = response.data
      }, (err) => {
        console.log(err)
      })
    }
  },
  mounted: function () {
    this.getServerSetup()
  }
}
</script>
