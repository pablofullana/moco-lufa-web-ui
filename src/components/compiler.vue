<!-- compiler -->
<template lang="html">
  <div id="heading" class="content">
    <div class="subtitle">Compiler</div>
    <hr />
    <form v-on:submit.prevent="compile">
      <div class="field is-horizontal">
        <div class="field-label is-small">
          <label class="label">Device Name</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input v-model="name" class="input is-small" name="name" placeholder="Device Name" required>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-small">
          <label class="label">Manufacturer</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input v-model="manufacturer" class="input is-small" name="manufacturer" placeholder="Manufacturer Name" required>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-small">
          <label class="label">Arduino Model</label>
        </div>
        <div class="field-body">
          <p class="control">
            <span class="select is-small">
              <select v-model="arduino_model" name="arduino_model" required>
                <option value="uno">Uno</option>
                <option value="mega">Mega</option>
              </select>
            </span>
          </p>
        </div>
      </div>

      <div class="field is-horizontal">
        <div class="field-label is-small">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="button is-primary is-small" type="submit" value="Compile" :disabled="compilationProcess.status == 'inProgress'"/>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal" v-if="compilationProcess.status === 'succeed'">
        <div class="field-label is-small">
          <label class="label">Summary</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <small>{{ compilationProcess.summary }}</small>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal" v-if="compilationProcess.status === 'failed'">
        <div class="field-label is-small">
          <label class="label">Error</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <small>{{ compilationProcess.summary }}</small>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'compiler',
  data: function () {
    return {
      compilationProcess: {
        status: '',
        hex: '',
        summary: ''
      }
    }
  },
  methods: {
    compile: function () {
      var startedAtTime = new Date().getTime()
      this.compilationProcess.status = 'inProgress'
      this.compilationProcess.hex = ''
      this.compilationProcess.summary = ''
      axios.post(process.env.FIRMWARES_API_ENDPOINT, {
        'firmware': {
          'name': this.name,
          'manufacturer': this.manufacturer,
          'arduino_model': this.arduino_model
        }
      }).then((response) => {
        var totalTime = new Date().getTime() - startedAtTime
        var totalSeconds = (totalTime / 1000).toFixed(2)
        this.compilationProcess.status = 'succeed'
        this.compilationProcess.hex = response.data
        this.compilationProcess.summary = String.concat('Compiled successfully in ', totalSeconds, ' seconds.')
        this.download(this.name, this.compilationProcess.hex)
      }, (err) => {
        this.compilationProcess.status = 'failed'
        this.compilationProcess.hex = ''
        this.compilationProcess.summary = String.concat(err.response.status, ': ', err.response.statusText)
      })
    },
    download: function (name, fileContent) {
      var filename = String.toLowerCase(name.replace(/[^\w]/gi, '_'))
      var blob = new Blob([fileContent], { type: 'text/plain' })
      var URL = window.URL || window.webkitURL
      var downloadUrl = URL.createObjectURL(blob)
      // use HTML5 a[download] attribute to specify filename
      var a = document.createElement('a')
      // safari doesn't support this yet
      if (typeof a.download === 'undefined') {
        window.location = downloadUrl
      } else {
        a.href = downloadUrl
        a.download = String.concat(filename, '.hex')
        document.body.appendChild(a)
        a.click()
      }
      setTimeout(function () { URL.revokeObjectURL(downloadUrl) }, 100) // cleanup
    }
  }
}
</script>
