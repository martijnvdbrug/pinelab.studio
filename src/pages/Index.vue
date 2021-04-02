<template>
  <div>
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
          <p>Iedereen moet de mogelijkheid hebben om online te verkopen. Bij Pinelab kun je al vanaf <strong>€1100,-</strong> beginnen met het online verkopen van je producten in je eigen webshop.</p>
          <br>
          <br>

          <div class="columns has-text-centered">
            <div class="column">
              <b-icon
                  icon="speedometer"
                  size="is-large"
                  type="is-success">
              </b-icon>
              <br>
              <br>
              <h2 class="title">Snel en SEO-proof</h2>
              <p>De webshops van Pinelab zijn altijd razendsnel en SEO-proof, omdat webshops als static site worden gemaakt met Gridsome.
                Pinelab zorgt dat alle best practices in jouw webshop zijn verwerkt. Alle Pinelab designs houden rekening met het
                <a href="https://services.google.com/fh/files/events/pdf_retail_ux_playbook.pdf" target="_blank">Google Retail UX Playbook</a></p>
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
              <p>Pinelab zorgt dat alle best practices in jouw webshop zijn verwerkt. Alle Pinelab designs houden rekening met het
                <a href="https://services.google.com/fh/files/events/pdf_retail_ux_playbook.pdf" target="_blank">Google Retail UX Playbook</a></p>
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
            </div>
          </div>

        </div>

      </section>

      <section class="section" id="tech">
        <div class="container">
          <h1 class="title">Tech</h1>
          <hr/>
          <p>Dus jij noemt jezelf fullstacker?</p>
          <br>
          <br>

          <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child notification is-card">
                    <p class="title">Open source</p>
                    <p>Vendure. Plugins NPM</p>
                  </article>
                  <article class="tile is-child notification is-card">
                    <p class="title">NodeJS</p>
                    <p class="subtitle">NodeJS, typescript</p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child notification is-card">
                    <p class="title">Cloud based</p>
                    <figure class="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/640x480.png">
                    </figure>
                    <br>
                    <p>Google Cloud Run</p>
                  </article>
                </div>
              </div>
            </div>
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-card">
                <div class="content">
                  <p class="title">GraphQL</p>
                  <p class="subtitle">GraphQL, Apollo Server, Vendure</p>
                  <div class="content">
                    <!-- Content -->
                  </div>
                </div>
              </article>
              <article class="tile is-child notification is-card">
                <div class="content">
                  <p class="title">Static site</p>
                  <p class="subtitle">Vue, Gridsome</p>
                  <div class="content">
                    <!-- Content -->
                  </div>
                </div>
              </article>
            </div>
          </div>

        </div>

      </section>

    </DefaultLayout>
  </div>
</template>
<script>
import DefaultLayout from '../layouts/DefaultLayout';

export default {
  components: {DefaultLayout}
}
</script>