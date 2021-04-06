<template>
  <DefaultLayout>

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
                <td><b-icon type="is-success" icon="check"></b-icon></td>
                <td>Razendsnelle static site</td>
              </tr>
              <tr>
                <td><b-icon type="is-success" icon="check"></b-icon></td>
                <td>SEO vriendelijk</td>
              </tr>
              <tr>
                <td><b-icon type="is-success" icon="check"></b-icon></td>
                <td>Persoonlijke support</td>
              </tr>
            </table>

          </div>
          <div class="column checklist">
            <table>
              <tr>
                <td><b-icon type="is-success" icon="check"></b-icon></td>
                <td>Responsive, dus geschikt voor mobiel</td>
              </tr>
              <tr>
                <td><b-icon type="is-success" icon="check"></b-icon></td>
                <td>Makkelijk zelf producten beheren zonder technische kennis</td>
              </tr>
              <tr>
                <td><b-icon type="is-success" icon="check"></b-icon></td>
                <td>De mogelijkheid om zelf Instagram shopping te koppelen</td>
              </tr>
            </table>
          </div>
        </div>

        <h2 class="title">1. Welke layout wil je?</h2>

        <p :hidden="layout !== 'minimal'"><strong>Minimal layout</strong> is een strakke, minimale layout die de focus legt op je producten. Deze
          layout is geschikt voor shops tot ~50 producten.</p>
        <p :hidden="layout !== 'custom'"><strong>Custom layout</strong> is een uitgebreidere layout voor grotere shops met meerdere categorieën. We
          bepalen samen welke onderdelen er in je webshop komen.</p>
        <br>
        <b-field :oninput="calculate()">
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

        <b-button
            label="Vraag gratis voorbeeld aan"
            type="is-info"
            size="is-medium"
            @click="isModalActive = true"/>
      </div>
    </section>


    <b-modal v-model="isModalActive" :width="640" scroll="keep">
      <div class="card">
        <div class="card-content">
          <form action="https://formspree.io/f/xdopwkwl" method="POST" target="_blank">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input class="input" type="email" name="_replyto">
              </div>
            </div>
            <div class="field">
              <label class="label">Bericht</label>
              <div class="control">
                <input class="input" type="text" name="message" placeholder="Vertel me meer over webshops!">
              </div>
            </div>
            <br>
            <button class="button" type="submit">Vraag aan!</button>
          </form>
        </div>
      </div>
    </b-modal>
  </DefaultLayout>
</template>
<script>
export default {
  data() {
    return {
      isModalActive: false,
      layout: 'minimal'
    }
  },
  methods: {
    calculate() {
      console.log(this.layout)
    }
  }
}
</script>
<style>
.checklist .icon {
  margin-right: 20px;
}
</style>