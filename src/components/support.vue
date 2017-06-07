<!-- support -->
<template lang="html">
  <div id="heading" class="content">
    <div class="subtitle">Support Us</div>
    <hr />
    <p class="is-small">
      <a href="https://twitter.com/share" class="twitter-share-button" data-text="Pimp your mocoLUFA! via @yaeltex at" :data-url="host" data-hashtags="mocolufa" data-related="" data-dnt="true" data-show-count="false">Tweet</a>
    </p>
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
