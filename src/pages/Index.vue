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
          <p>Iedereen moet de mogelijkheid hebben om online te verkopen. Bij Pinelab kun je al vanaf <strong>€1100,-</strong> beginnen met je eigen webshop.</p>
          <br>
          <br>

          <div class="tile is-ancestor">
            <div class="tile is-vertical is-8">
              <div class="tile">
                <div class="tile is-parent is-vertical">
                  <article class="tile is-child notification is-card">
                    <p class="title">Best practices</p>
                    <p>Pinelab zorgt dat alle best practices in jouw webshop zijn verwerkt. Alle Pinelab designs houden rekening met het
                      <a href="https://services.google.com/fh/files/events/pdf_retail_ux_playbook.pdf" target="_blank">Google Retail UX Playbook</a></p>
                  </article>
                  <article class="tile is-child notification is-card">
                    <p class="title">Nooit meer kapotte WooCommerce plugins </p>
                    <p class="subtitle">Pinelab heeft een eigen platform gemaakt op basis van het open source platform
                      <a href="vendure.io">Vendure</a> met de daarbij behorende plugins. Zo ben je altijd verzekerd van een werkende website. </p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child notification is-card">
                    <p class="title">Snelheid</p>
                    <figure class="image">
                      <img src="/lighthouse-snelheid-score.jpeg">
                    </figure>
                    <br>
                    <p>Snelheid, lighthouse, statische sites</p>
                  </article>
                </div>
              </div>
            </div>
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-card">
                <div class="content">
                  <p class="title">Geen technische kennis nodig</p>
                  <p class="subtitle">With even more content</p>
                  <div class="content">
                    <!-- Content -->
                  </div>
                </div>
              </article>
              <article class="tile is-child notification is-card">
                <div class="content">
                  <p class="title">Daniel van de Haterd</p>
                  <p class="subtitle">With even more content</p>
                  <div class="content">
                    <!-- Content -->
                  </div>
                </div>
              </article>
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
                    <p>Google retail Playbook</p>
                  </article>
                  <article class="tile is-child notification is-card">
                    <p class="title">NodeJS</p>
                    <p class="subtitle">NodeJS, typescript</p>
                  </article>
                </div>
                <div class="tile is-parent">
                  <article class="tile is-child notification is-card">
                    <p class="title"></p>
                    <figure class="image is-4by3">
                      <img src="https://bulma.io/images/placeholders/640x480.png">
                    </figure>
                    <br>
                    <p>Snelheid, lighthouse, statische sites</p>
                  </article>
                </div>
              </div>
            </div>
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-card">
                <div class="content">
                  <p class="title">GraphQL</p>
                  <p class="subtitle">With even more content</p>
                  <div class="content">
                    <!-- Content -->
                  </div>
                </div>
              </article>
              <article class="tile is-child notification is-card">
                <div class="content">
                  <p class="title">Daniel van de Haterd</p>
                  <p class="subtitle">With even more content</p>
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