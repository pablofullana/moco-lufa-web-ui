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
      <a class="button support is-warning is-small" href="https://www.paypal.me/pablofullana" target="_blank">
        <span class="is-vcentered">
          <span class="icon is-small">
            <i class="fa fa-heart-o"></i>
          </span>
          <span>Donate</span>
        </span>
      </a>
  </div>
</template>

<script>
export default {
  name: 'support',
  data: function () {
    return {
      host: window.location.href
    }
  }
}
</script>
