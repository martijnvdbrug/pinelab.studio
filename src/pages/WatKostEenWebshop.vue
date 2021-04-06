<template>
  <div>
    <b-navbar fixed-top class="box2" id="pricingBar">
      <template #burger>
        <b-navbar-item tag="div" class="burger">
          <b-button
              label="Meer informatie"
              type="is-info"
              size="is-medium"
              @click="isModalActive = true"/>
        </b-navbar-item>
        <div style="margin: 10px;">
          <p class="title" style="margin-bottom: 5px;">
            €{{ pricing.total }},-
          </p>
          <p style="font-size: 0.9rem;">Waarvan €{{ pricing.yearly }},- per jaar</p>
          <p style="font-size: 0.7rem;">Indicatieve prijs, Ex. BTW</p>
        </div>

      </template>
    </b-navbar>

    <section id="webshop-calculator" class="section">
      <div class="container">
        <br>
        <br>
        <br>
        <br>
        <br>
        <g-link to="/">Terug naar de homepagina</g-link>
        <br>
        <br>
        <h1 class="title">Wat kost een webshop bij Pinelab?</h1>
        <p class="subtitle">Bereken hier wat een webshop jou ongeveer zou kosten.</p>
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
                <td>De mogelijkheid om zelf Instagram en Facebook shopping te koppelen</td>
              </tr>
            </table>
          </div>
        </div>

        <h2 class="title">1. Welke layout wil je?</h2>

        <p :hidden="layout !== 'minimal'"><strong>Minimal layout</strong> is een strakke, minimale layout die de focus
          legt op je producten. Deze
          layout is geschikt voor shops tot ~50 producten. <a href="https://pinelab-demo.netlify.app/" target="_blank">Bekijk
            de
            voorbeeld website</a></p>
        <p :hidden="layout !== 'custom'"><strong>Custom layout</strong> is een uitgebreidere layout shops
          met meerdere producten en categorieën. Met deze layout bepaal je zelf welke onderdelen op welke plek in je
          webshop komen.</p>
        <br>
        <b-field>
          <b-radio-button v-model="layout"
                          native-value="minimal"
                          type="is-success is-light is-outlined">
            <b-icon icon="image"></b-icon>
            <span>Minimal layout</span>
          </b-radio-button>

          <b-radio-button v-model="layout"
                          native-value="custom"
                          type="is-success is-light is-outlined">
            <b-icon icon="view-dashboard"></b-icon>
            <span>Custom layout</span>
          </b-radio-button>
        </b-field>
        <br>
        <h2 class="title">2. Hoeveel producten wil je in je webshop zetten?</h2>
        <b-field>
          <b-radio v-model="products"
                   native-value="p0_20"
                   type="is-success">
            0 tot 20 producten
          </b-radio>
        </b-field>
        <b-field>
          <b-radio v-model="products"
                   native-value="p20_100"
                   type="is-success">
            20 tot 100 producten
          </b-radio>
        </b-field>
        <b-field>
          <b-radio v-model="products"
                   native-value="p100"
                   type="is-success">
            Meer dan 100 producten
          </b-radio>
        </b-field>

        <br>
        <h2 class="title">3. Hoeveel bestellingen verwacht je ongeveer per week?</h2>
        <b-field>
          <b-radio v-model="orders"
                   native-value="o0_5"
                   type="is-success">
            0 tot 5 bestellingen per week
          </b-radio>
        </b-field>
        <b-field>
          <b-radio v-model="orders"
                   native-value="o5_50"
                   type="is-success">
            5 tot 50 bestellingen per week
          </b-radio>
        </b-field>
        <b-field>
          <b-radio v-model="orders"
                   native-value="o50_100"
                   type="is-success">
            50 tot 100 bestellingen per week
          </b-radio>
        </b-field>
        <b-field>
          <b-radio v-model="orders"
                   native-value="o100"
                   type="is-success">
            meer dan 100 bestellingen per week
          </b-radio>
        </b-field>

        <br>
        <h2 class="title">4. Wat wil je nog meer?</h2>
        <b-field>
          <b-checkbox v-model="extras" native-value="cms" type="is-success">
            Ik wil zelf blog artikelen en andere content kunnen beheren. <span style="color: #7E7F9A;">(Let op, producten beheren kan je altijd zelf!)</span>
          </b-checkbox>
        </b-field>
        <b-field>
          <b-checkbox v-model="extras" native-value="reviews" type="is-success">
            Ik wil dat klanten beoordelingen kunnen plaatsen over mijn producten.
          </b-checkbox>
        </b-field>
        <b-field>
          <b-checkbox v-model="extras" native-value="search" type="is-success">
            Ik wil dat klanten kunnen zoeken naar producten, omdat ik veel producten heb.
          </b-checkbox>
        </b-field>
        <b-field>
          <b-checkbox v-model="extras" native-value="pushNotifications" type="is-success">
            Ik wil dat klanten zich kunnen abboneren op <a
              href="https://www.itpedia.nl/2018/05/05/web-push-notifications-uitgelegd/" target="_blank">pushberichten
            van mijn webshop</a>.
          </b-checkbox>
        </b-field>
        <b-field>
          <b-checkbox v-model="extras" native-value="myparcel" type="is-success">
            Ik mijn bestellingen automatisch in MyParcel hebben.
          </b-checkbox>
        </b-field>
        <b-field>
          <b-checkbox v-model="more" native-value="myparcel" type="is-success">
            Ik wil iets dat niet in deze lijst staat, namelijk...
          </b-checkbox>
        </b-field>
        <b-field v-if="more">
          <b-input maxlength="200" type="textarea" v-model="extraMessage"></b-input>
        </b-field>
        <br>
        <b-button
            label="Vraag meer informatie aan"
            type="is-info"
            size="is-medium"
            @click="isModalActive = true"/>
        <br>
        <br>
        <br>
        <br>
        <g-link to="/">Terug naar de homepagina</g-link>

      </div>
    </section>


    <b-modal v-model="isModalActive" :width="640" scroll="keep">
      <div class="card">
        <div class="card-content">
          <p style="color:gray;">Jaarlijkse kosten zijn voor de hosting en de persoonlijke support van je webshop.</p>
          <br>
          <p style="color:gray;">Laat je emailadres achter in ik geef je vrijblijvend meer informatie over de opties die
            je gekozen hebt.</p>
          <br>
          <form action="https://formspree.io/f/xdopwkwl" method="POST" target="_blank">
            <div class="field">
              <label class="label">Email*</label>
              <div class="control">
                <input class="input" type="email" name="_replyto" required>
              </div>
            </div>
            <div class="field" hidden="true">
              <label class="label">Bericht</label>
              <div class="control">
                <input class="input" type="text" name="message" v-model="message">
              </div>
            </div>
            <br>
            <button class="button is-info" type="submit">Vraag informatie aan</button>
          </form>
        </div>
      </div>
    </b-modal>
    <Footer/>
  </div>
</template>
<script>
import Footer from '@/components/Footer';

export default {
  components: {
    Footer
  },
  computed: {
    message() {
      return `€ ${this.pricing.total} (${this.pricing.yearly} jaarlijks), ${this.layout}, ${this.products}, ${this.orders}, ${this.extras}, ${this.extraMessage}`;
    },
    pricing() {
      const layout = this.pricingTable[this.layout];
      const products = this.pricingTable[this.products];
      const orders = this.pricingTable[this.orders];
      let extrasYearly = 0;
      let extrasFixed = 0;
      this.extras.forEach(e => {
        const extrasPricing = this.pricingTable[e];
        extrasYearly += extrasPricing.yearly;
        extrasFixed += extrasPricing.fixed;
      });
      const yearly = layout.yearly + products.yearly + orders.yearly + extrasYearly;
      const total = layout.fixed + products.fixed + orders.fixed + yearly + extrasFixed;
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
      products: 'p0_20',
      orders: 'o0_5',
      extras: [],
      more: false,
      extraMessage: '',
      pricingTable: {
        minimal: {fixed: 660, yearly: 0},
        custom: {fixed: 1800, yearly: 100},
        p0_20: {fixed: 0, yearly: 0},
        p20_100: {fixed: 200, yearly: 0},
        p100: {fixed: 300, yearly: 100},
        o0_5: {fixed: 0, yearly: 200},
        o5_50: {fixed: 0, yearly: 400},
        o50_100: {fixed: 0, yearly: 800},
        o100: {fixed: 0, yearly: 1000},
        cms: {fixed: 300, yearly: 100},
        reviews: {fixed: 300, yearly: 100},
        search: {fixed: 200, yearly: 50},
        pushNotifications: {fixed: 300, yearly: 50},
        myparcel: {fixed: 200, yearly: 100},
      }
    }
  },
  metaInfo: {
    title: 'Wat kost een webshop?',
    description: 'Wat gaat een webshop van Pinelab jou kosten? Bereken het hier zelf.',
    meta: [],
  }
}
</script>
<style>
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