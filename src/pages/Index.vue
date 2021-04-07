<template>
  <DefaultLayout>

    <section id="hero" class="hero is-dark">
      <div class="hero-body">
        <div class="container has-text-centered">
          <br/>
          <br/>
          <g-image src="/martijn-van-pinelab.png" style="height:200px;"/>
          <br/>
          <br/>
          <br/>
          <h1 class="title is-1">Pinelab.studio</h1>
          <h2 class="subtitle is-4">
            Hoi, ik ben Martijn van Pinelab. Fullstack developer met liefde voor open source en een focus op
            e-commerce.
          </h2>
        </div>
      </div>
    </section>

    <section class="section" id="ecommerce">
      <div class="container">
        <h1 class="title">E-commerce</h1>
        <hr/>
        <p>Iedereen moet de mogelijkheid hebben om online te verkopen. Bij Pinelab kun je al vanaf
          <strong>€860,-</strong> beginnen met online verkopen via je eigen webshop.</p>
        <br>
        <b-button
            tag="a"
            label="Bereken mijn kosten"
            type="is-info"
            size="is-medium"
            href="/wat-kost-een-webshop/"
        />
        <br>
        <br>
        <br>
        <br>

        <div class="columns">
          <div class="column">
            <b-icon
                icon="speedometer"
                size="is-large"
                type="is-success">
            </b-icon>
            <br>
            <br>
            <h2 class="title">Snel en SEO-proof</h2>
            <p>De webshops van Pinelab zijn altijd mobiel vriendelijk, <a href="#tech">razendsnel en SEO-proof</a>.
            </p>
            <p>
              Alle Pinelab designs houden
              rekening met het
              <a href="https://services.google.com/fh/files/events/pdf_retail_ux_playbook.pdf" target="_blank">Google
                Retail UX Playbook</a></p>
            <img src="/lighthouse.png" alt="Lighthouse snelheidstest score"/>
          </div>

          <div class="column">
            <b-icon
                icon="connection"
                size="is-large"
                type="is-success">
            </b-icon>
            <br>
            <br>
            <h2 class="title">Geen technische kennis nodig</h2>
            <p>Producten in de webshop zetten is <a href="https://www.instagram.com/p/CJwPa1ZByEY/" target="_blank">zo
              simpel als een foto op instagram plaatsen.</a></p>
            <p>De webshop is makkelijk te koppelen aan je Instagram, zodat je ook via Instagram producten kan
              verkopen.</p>
          </div>

          <div class="column">
            <b-icon
                icon="comment-account"
                size="is-large"
                type="is-success">
            </b-icon>
            <br>
            <br>
            <h2 class="title">Persoonlijk</h2>
            <p>Je krijgt persoonlijke begeleiding bij het inrichten van de webshop en antwoord op al je vragen. Geen
              helpdesk waar je 2 weken op wacht.</p>
          </div>
        </div>

        <br>

        <h2 class="title">Wat vinden klanten ervan?</h2>

        <div class="columns">
          <div class="column">
            <Testimonial name="Frank Wasse"
                         body="10 keer sneller dan mijn oude WooCommerce website! Prettige samenwerking en reageert snel op vragen."
                         company="Wormenkwekerij Wasse"
                         link="https://wormenkwekerijwasse.nl"
            />
          </div>
          <div class="column">
          </div>
          <div class="column">
          </div>
        </div>


      </div>
    </section>

    <section class="section" id="werk">
      <div class="container">
        <h1 class="title">Werk</h1>
        <hr/>
        <p>Deze blije ondernemers zijn al geholpen door Pinelab</p>
        <br>
        <br>

        <div class="tile is-ancestor">
          <div class="tile is-vertical is-12">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification is-card">
                  <p class="title">Wormenkwekerij Wasse</p>
                  <p>Wat te doen met je GFT afval? Voor <a href="https://wormenkwekerijwasse.nl" target="_blank">Wormenkwekerij
                    Wasse</a> heb ik een nieuwe webshop opgezet.
                    Een mooi voorbeeld van een uitgebreide webshop met veel producten en artikelen.</p>
                </article>
                <article class="tile is-child notification is-card">
                  <p class="title">Schoonheidssalon Helmich</p>
                  <p>Voor <a href="http://schoonheidssalonhelmich.nl" target="_blank">Schoonheidssalon Helmich</a> is
                    een nieuwe website ontwikkeld.
                    Het oude logo is hergebruikt, maar met nieuwe kleuren. Ook dit is een static site die razendsnel
                    is.</p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-card">
                  <p class="title">Daniël van de Haterd</p>
                  <p>Webshop voor kunstenaar <a href="https://dvandehaterd.nl" target="_blank">Daniël van de Haterd </a>.
                    Cleane minimale vormgeving, om zoveel mogelijk de focus op de kunstwerken te leggen.</p>
                  <figure class="image">
                    <g-image src="/danielvandehaterd.jpg"/>
                  </figure>
                </article>
              </div>
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification is-card">
                  <div class="content">
                    <p class="title">Marc de Fotograaf</p>
                    <p>Ook voor <a href="https://shop.marcdefotograaf.nl/" target="_blank">Marc de Fotograaf</a>
                      een webshop met zo min mogelijk afleiding, zodat de focus op zijn fotografie ligt.</p>
                  </div>
                </article>
                <article class="tile is-child notification is-card">
                  <div class="content">
                    <p class="title">Jouw shop hier?</p>
                    <p>Ben jij toe aan een webshop die wel snel is en goed functioneert?</p>
                    <b-button
                        tag="a"
                        label="Bekijk de mogelijkheden"
                        class="is-dark"
                        type="is-info"
                        size="is-medium"
                        href="/wat-kost-een-webshop/"
                        style="color:#fff!important;"
                    />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="tech">
      <div class="container">
        <h1 class="title">Tech</h1>
        <hr/>
        <p>Hoe werkt dat dan allemaal?</p>
        <br>
        <br>

        <div class="tile is-ancestor">
          <div class="tile is-vertical is-8">
            <div class="tile">
              <div class="tile is-parent is-vertical">
                <article class="tile is-child notification is-card">
                  <p class="title">Open source</p>
                  <p>De webshops bij Pinelab werken met het open source pakket <a href="https://vendure.io"
                                                                                  target="_blank">Vendure</a>.
                    Daarnaast zijn ook alle ontwikkelde <a href="https://www.npmjs.com/~mbrug"
                                                           target="_blank">plugins</a>
                    en <a href="https://github.com/martijnvdbrug" target="_blank">projecten</a> open source, zodat er
                    ook teruggegeven wordt aan de community.
                  </p>
                </article>
                <article class="tile is-child notification is-card">
                  <p class="title">NodeJS</p>
                  <p><a href="https://github.com/martijnvdbrug" target="_blank">NodeJS met Typescript</a> is de
                    favoriete stack waar mee gewerkt wordt. </p>
                </article>
              </div>
              <div class="tile is-parent">
                <article class="tile is-child notification is-card">
                  <p class="title">Cloud based</p>
                  <!--                   <figure class="image is-4by3">
                                       <img src="https://bulma.io/images/placeholders/640x480.png">
                                     </figure>-->
                  <p>Eigen servers zijn niet meer van deze tijd. Alles wat met Pinelab wordt ontwikkeld draait op een
                    Cloud.
                    <a href="https://martijn-brug.medium.com/vendure-ecommerce-on-google-cloud-run-225b26c8133a"
                       target="_blank">Backend gerelateerd werk draait op Google Cloud Run</a>. Frontend wordt gehost
                    op Netlify. </p>
                </article>
              </div>
            </div>
          </div>
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-card">
              <div class="content">
                <p class="title">GraphQL</p>
                <p>Waar mogelijk werk ik met GraphQL.
                  Vendure is een headless e-commerce pakket, wat under-the-hood Apollo server draait voor de GraphQL
                  laag. </p>

              </div>
            </article>
            <article class="tile is-child notification is-card">
              <div class="content">
                <p class="title">Static site</p>
                <p>Alle webshops worden gemaakt met <a
                    href="https://martijn-brug.medium.com/hydrate-your-gridsome-app-a-vendure-example-5a3d5bfb5d43"
                    target="_blank">Gridsome</a>, een VueJS static site generator.
                  Static sites zorgen voor snelle en SEO-proof websites.</p>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>

  </DefaultLayout>
</template>
<script>
import Testimonial from '../components/Testimonial';

export default {
  components: {Testimonial},
  metaInfo: {
    title: 'Fullstack development & e-commerce',
    description: 'Fullstack developer met liefde voor open source en focus op e-commerce.',
    meta: [],
  }
}
</script>