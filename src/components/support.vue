<!-- support -->
<template lang="html">
  <div id="heading" class="content">
    <div class="subtitle">Support Us</div>
    <hr />
    <div class="block">
      <div class="columns is-vcentered">
        <div class="column">
          <a href="https://twitter.com/share" class="twitter-share-button" data-text="Pimp your mocoLUFA! via @yaeltex at" :data-url="host" data-hashtags="mocolufa" data-related="" data-dnt="true" data-size="large" data-show-count="false">Tweet</a>
        </div>
        <div class="column">
          <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
            <input type="hidden" name="cmd" value="_s-xclick">
            <input type="hidden" name="hosted_button_id" value="MKY8SNBJ6RSHC">
            <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
            <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
          </form>
        </div>
      </div>
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
