<!-- compiler -->
<template lang="html">
  <div id="heading" class="content">
    <div class="subtitle">Compiler</div>
    <hr />
    <form v-on:submit.prevent="compile">
      <div class="field is-horizontal">
        <div class="field-label is-small">
          <label class="label">Device</label>
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
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <input class="button is-primary is-small" type="submit" value="Compile"/>
            </div>
          </div>
        </div>
      </div>
      <p>{{ compilationResult }}</p>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'compiler',
  data: function () {
    return {
      compilationResult: ''
    }
  },
  methods: {
    compile: function () {
      axios.post(process.env.FIRMWARES_API_ENDPOINT, {
        'firmware': {
          'name': this.name,
          'manufacturer': this.manufacturer,
          'arduino_model': this.arduino_model
        }
      }).then((response) => {
        this.compilationResult = response.data
      }, (err) => {
        console.log(err)
      })
    }
  }
}
</script>
