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

      <div class="field is-horizontal has-addons">
        <div class="field-label is-small">
          <label class="label">PID</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input v-model="pid" class="input is-small" name="pid" placeholder="Product ID"
                required
                v-validate="{ rules: { regex: /^0x(1|2|3|4|5|6|7|8|9|a|b|c|d|e|f)(0|1|2|3|4|5|6|7|8|9|a|b|c|d|e|f){3}$/i} }"
              >
              <p class="help">Product ID. Random generated 4-digit hex number between 0x1000 and 0xFFFF. This feature prevents the computer from confusing devices with different names, but same PID. Manually modifiable by user.</p>
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
              <input class="button is-primary is-small" type="submit" value="Compile" v-bind:class="{ 'is-loading': status == 'isCompiling' }" />
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal" v-if="status === 'succeed'">
        <div class="field-label is-small">
          <label class="label">Summary</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <p class="help is-success">{{ summary }}</p>
            </div>
          </div>
        </div>
      </div>

      <div class="field is-horizontal" v-if="status === 'failed'">
        <div class="field-label is-small">
          <label class="label">Error</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <p class="help is-danger">{{ summary }}</p>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

var _ = require('lodash')
var sprintf = require('sprintf-js').sprintf

export default {
  name: 'compiler',
  data: function () {
    return {
      name: '',
      manufacturer: '',
      arduino_model: '',
      pid: sprintf('0x%.4x', _.random(4096, 65535)),
      status: '',
      hex: '',
      summary: ''
    }
  },
  methods: {
    compile: function () {
      var startedAtTime = new Date().getTime()
      this.status = 'isCompiling'
      this.hex = ''
      this.summary = ''
      axios.post(process.env.FIRMWARES_API_ENDPOINT, {
        'firmware': {
          'name': this.name,
          'manufacturer': this.manufacturer,
          'arduino_model': this.arduino_model,
          'pid': this.pid
        }
      }).then((response) => {
        var totalTime = new Date().getTime() - startedAtTime
        var totalSeconds = (totalTime / 1000).toFixed(2)
        this.status = 'succeed'
        this.hex = response.data
        this.summary = 'Compiled successfully in ' + totalSeconds + ' seconds.'
        this.download(this.name, this.hex)
      }, (err) => {
        this.status = 'failed'
        this.hex = ''
        this.summary = err.response.status + ': ' + err.response.statusText + ' - ' + err.response.data.errors_sentence
      })
    },
    download: function (name, fileContent) {
      var filename = name.replace(/[^\w]/gi, '_').toLowerCase()
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
        a.download = filename + '.hex'
        document.body.appendChild(a)
        a.click()
      }
      setTimeout(function () { URL.revokeObjectURL(downloadUrl) }, 100) // cleanup
    }
  }
}
</script>
