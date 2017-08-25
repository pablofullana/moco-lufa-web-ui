<!-- support -->
<template lang="html">
  <div id="heading" class="content">
    <div class="subtitle">Support Us</div>
    <hr />
    <a class="button support is-info is-small" data-social-network="Twitter" data-social-action="tweet" target="_blank" :href="'https://twitter.com/intent/tweet?text=Pimp your mocoLUFA! via @yaeltex at: ' + host">
      <span class="is-vcentered">
        <span class="icon is-small">
          <i class="fa fa-twitter"></i>
        </span>
        <span>Tweet</span>
      </span>
    </a>
    <a class="button paypal-support is-warning is-small" href="https://www.paypal.me/pablofullana" target="_blank">
      <span class="is-vcentered">
        <span class="icon is-small">
          <i class="fa fa-paypal"></i>
        </span>
        <span>Donate</span>
      </span>
    </a>
    <a class="button btc-support is-warning is-small" href="#" @click="showBtcSupportModal">
      <span class="is-vcentered">
        <span class="icon is-small">
          <i class="fa fa-btc"></i>
        </span>
        <span>Donate</span>
      </span>
    </a>
    <modal :visible="shouldDisplayBtcSupportModal" @close="closeBtcSupportModal" transition="zoom">
      <div class="content has-text-centered">
        <header class="modal-card-head">Support us via BTC</header>
        <section class="modal-card-body">
          <slot>
            <div class="field has-addons">
              <p class="control">
                <a class="button is-primary is-small" v-clipboard:copy="btcWalletAddress">
                  <span class="icon is-small">
                    <i class="fa fa-btc"></i>
                  </span>
                </a>
              </p>
              <p class="control is-expanded">
                <input class="input is-small" type="text" :readonly="true" :disabled="true" v-model="btcWalletAddress">
              </p>
              <p class="control">
                <a class="button is-primary is-small" v-clipboard:copy="btcWalletAddress">
                  <span class="icon is-small">
                    <i class="fa fa-clipboard"></i>
                  </span>
                  <span>Copy to Clipboard</span>
                </a>
              </p>
            </div>
          </slot>
        </section>
        <footer class="modal-card-foot is-small">
          <a class="button is-primary is-small" @click="closeBtcSupportModal">Done</a>
        </footer>
      </div>
    </modal>
  </div>
</template>

<script>
import { Modal, CardModal } from 'vue-bulma-modal'

export default {
  name: 'support',
  components: {
    Modal,
    CardModal
  },
  data: function () {
    return {
      host: window.location.href,
      shouldDisplayBtcSupportModal: false,
      btcWalletAddress: process.env.BTC_WALLET_ADDRESS
    }
  },
  methods: {
    closeBtcSupportModal: function () {
      this.shouldDisplayBtcSupportModal = false
    },
    showBtcSupportModal: function () {
      this.shouldDisplayBtcSupportModal = true
    }
  }
}
</script>
