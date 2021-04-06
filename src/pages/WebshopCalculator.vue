<template>
  <DefaultLayout>

    <b-navbar fixed-bottom class="pricing-bar">
      <template #burger>
        <b-navbar-item tag="div" class="burger">
          <b-button
              label="Meer informatie"
              type="is-info"
              size="is-medium"
              @click="isModalActive = true"/>
        </b-navbar-item>
        <div style="margin: 10px;">
            <p class="title">
              €{{ pricing.total }},-
            </p>
            <p style="font-size: 0.9rem;">Waarvan €{{ pricing.yearly }},- per jaar</p>
            <p style="font-size: 0.7rem;">Indicatieve prijs</p>
        </div>
      </template>
    </b-navbar>

    <section id="webshop-calculator" class="section">
      <div class="container">
        <br>
        <br>
        <h1 class="title"> Webshop calculator</h1>
        <p class="subtitle">Wat kost een webshop bij Pinelab?</p>
        <p>Wat je ook kiest, dit krijg je altijd:</p>
        <br>
        <div class="columns">
          <div class="column checklist">

            <table>
              <tr>
                <td>
                  <b-icon type="is-success" icon="check"></b-icon>
                </td>
                <td>Razendsnelle static site</td>
              </tr>
              <tr>
                <td>
                  <b-icon type="is-success" icon="check"></b-icon>
                </td>
                <td>SEO vriendelijk</td>
              </tr>
              <tr>
                <td>
                  <b-icon type="is-success" icon="check"></b-icon>
                </td>
                <td>Persoonlijke support</td>
              </tr>
            </table>

          </div>
          <div class="column checklist">
            <table>
              <tr>
                <td>
                  <b-icon type="is-success" icon="check"></b-icon>
                </td>
                <td>Responsive, dus geschikt voor mobiel</td>
              </tr>
              <tr>
                <td>
                  <b-icon type="is-success" icon="check"></b-icon>
                </td>
                <td>Makkelijk zelf producten beheren zonder technische kennis</td>
              </tr>
              <tr>
                <td>
                  <b-icon type="is-success" icon="check"></b-icon>
                </td>
                <td>De mogelijkheid om zelf Instagram shopping te koppelen</td>
              </tr>
            </table>
          </div>
        </div>

        <h2 class="title">1. Welke layout wil je?</h2>

        <p :hidden="layout !== 'minimal'"><strong>Minimal layout</strong> is een strakke, minimale layout die de focus
          legt op je producten. Deze
          layout is geschikt voor shops tot ~50 producten. <a href="https://pinelab-demo.netlify.app/" target="_blank">Bekijk een
            voorbeeld</a></p>
        <p :hidden="layout !== 'custom'"><strong>Custom layout</strong> is een uitgebreidere layout voor grotere shops
          met meerdere categorieën. We
          bepalen samen welke onderdelen op welke plek in je webshop komen.</p>
        <br>
        <b-field>
          <b-radio-button v-model="layout"
                          native-value="minimal"
                          type="is-success is-light is-outlined">
            <b-icon icon="close"></b-icon>
            <span>Minimal layout</span>
          </b-radio-button>

          <b-radio-button v-model="layout"
                          native-value="custom"
                          type="is-success is-light is-outlined">
            <b-icon icon="check"></b-icon>
            <span>Custom layout</span>
          </b-radio-button>
        </b-field>

        <br>
        <br>
        <br>

      </div>
    </section>


    <b-modal v-model="isModalActive" :width="640" scroll="keep">
      <div class="card">
        <div class="card-content">
          <p style="color:gray;">Jaarlijkse kosten zijn voor de hosting en de persoonlijke support van je webshop.</p><br>
          <p style="color:gray;">Laat je emailadres achter in ik geef je vrijblijvend meer informatie.</p>
          <br>
          <form action="https://formspree.io/f/xdopwkwl" method="POST" target="_blank">
            <div class="field">
              <label class="label">Email*</label>
              <div class="control">
                <input class="input" type="email" name="_replyto" required>
              </div>
            </div>
            <div class="field">
              <label class="label">Bericht</label>
              <div class="control">
                <input class="input" type="text" name="message" placeholder="Vertel me meer over webshops!">
              </div>
            </div>
            <br>
            <button class="button is-info" type="submit">Vraag informatie aan</button>
          </form>
        </div>
      </div>
    </b-modal>
  </DefaultLayout>
</template>
<script>
export default {
  computed: {
    pricing() {
      const layout = this.pricingTable[this.layout];
      const total = layout.fixed;
      const yearly = layout.yearly || 0;
      return {
        total,
        yearly
      }
    }
  },
  data() {
    return {
      isModalActive: false,
      layout: 'minimal',
      pricingTable: {
        minimal: {fixed: 660},
        custom: {fixed: 1800, yearly: 100}
      }
    }
  }
}
</script>
<style >
.checklist .icon {
  margin-right: 20px;
}

.pricing-bar {
  -webkit-box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.3);
  box-shadow: 0px -5px 10px 0px rgba(0, 0, 0, 0.3);
}
.footer {
  padding-bottom: 100px;
}
</style>