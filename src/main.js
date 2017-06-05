import Vue from 'vue'
import heading from './components/heading'
import compiler from './components/compiler'
import serverSetup from './components/server-setup'
import help from './components/help'
import stats from './components/stats'
import social from './components/social'
import footerComponent from './components/footer'
/* eslint-disable no-new */
new Vue({
  template: `
  <div>
    <section class="section">
      <div class="container is-fluid">
        <div class="columns">
          <div class="column is-10 is-offset-1">
            <heading />
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
                      <help />
                    </article>
                    <article class="tile is-child notification">
                      <stats />
                    </article>
                    <article class="tile is-child notification">
                      <social />
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footerComponent>
  </div>
  `,
  components: {
    heading,
    compiler,
    serverSetup,
    help,
    stats,
    social,
    footerComponent
  }
}).$mount('#app')
