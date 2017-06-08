<!-- support -->
<template lang="html">
  <div id="heading" class="content">
    <div class="subtitle">Support Us</div>
    <hr />
    <div class="block">
      <a href="https://twitter.com/share" class="twitter-share-button" data-text="Pimp your mocoLUFA! via @yaeltex at" :data-url="host" data-hashtags="mocolufa" data-related="" data-dnt="true" data-size="large" data-show-count="false">Tweet</a>
      <a class="button is-small is-warning"><strong>Donate</strong></a>
    </div>
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
