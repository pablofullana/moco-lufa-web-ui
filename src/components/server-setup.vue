<!-- server-setup -->
<template lang="html">
  <div id="heading" class="content">
    <div class="subtitle">Server Setup</div>
    <hr />
    <div v-for="(value, key) in serverSetup">
      <small>[-] <strong>{{ key }}:</strong> {{ value }}</small>
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
      axios.get(process.env.SERVER_SETUP_API_ENDPOINT).then((response) => {
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
