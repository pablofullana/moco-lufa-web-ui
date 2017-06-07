<template>
  <div>
    <section class="section">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-10 is-offset-1">
            <heading></heading>
            <div class="tile is-ancestor">
              <div class="tile is-vertical is-8">
                <div class="tile">
                  <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification">
                      <compiler />
                    </article>
                    <article class="tile is-child notification">
                      <serverSetup />
                    </article>
                  </div>
                </div>
              </div>
              <div class="tile is-vertical">
                <div class="tile">
                  <div class="tile is-parent is-vertical">
                    <article class="tile is-child notification">
                      <support />
                    </article>
                    <article class="tile is-child notification">
                      <stats />
                    </article>
                    <article class="tile is-child notification">
                      <documentation />
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footerComponent />
  </div>
</template>

<script>
import heading from './components/heading'
import compiler from './components/compiler'
import serverSetup from './components/server-setup'
import support from './components/support'
import stats from './components/stats'
import documentation from './components/documentation'
import footerComponent from './components/footer'

export default {
  name: 'app',
  components: {
    heading,
    compiler,
    serverSetup,
    stats,
    support,
    documentation,
    footerComponent
  }
}
</script>

<style lang="scss" src="./assets/style.sass"></style>
<!-- /*<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>*/ -->
