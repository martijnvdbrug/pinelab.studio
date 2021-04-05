<template>
  <div>
    <b-navbar fixed-top transparent class="box2">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
              src="/pinelab_logo.png"
              alt="Pinelab.studio logo"
              style="padding-right: 30px;"
          >
        </b-navbar-item>
      </template>
      <template #start>
        <g-link v-for="link of global.links"
                :to="link.url"
                :key="link.url"
                class="navbar-item"
        >
          {{ link.name }}
        </g-link>
      </template>
    </b-navbar>

    <slot/>

    <section class="footer" id="contact">
      <div class="content">
        <div class="columns">

          <div class="column is-offset-one-quarter ">
            <h1> Contact </h1>
            <br>
            <a href="mailto:martijn@pinelab.studio" target="_blank"><p> martijn@pinelab.studio</p></a><br>
            <a href="tel:0031622037928"><p> +31 622037928 </p></a><br>
            <p> KVK 76205436 </p><br>
          </div>

          <div class="column">

            <a href="https://www.instagram.com/martijn.van.pinelab/" target="_blank">
              <b-icon
                  icon="instagram"
                  size="is-large"
                  type="is-primary">
              </b-icon>
            </a>
            <br>
            <a href="http://martijn-brug.medium.com/" target="_blank">
              <b-icon
                  icon="size-m"
                  size="is-large"
                  type="is-primary">
              </b-icon>
            </a>
            <br>
            <a href="https://www.linkedin.com/in/martijn-van-de-brug-28309930/" target="_blank">
              <b-icon
                  icon="linkedin"
                  size="is-large"
                  type="is-primary">
              </b-icon>
            </a>
            <br>
            <a href="https://www.npmjs.com/~mbrug" target="_blank">
              <b-icon
                  icon="npm"
                  size="is-large"
                  type="is-primary">
              </b-icon>
            </a>
            <br>
            <a href="https://www.facebook.com/pinelab.studio" target="_blank">
              <b-icon
                  icon="facebook"
                  size="is-large"
                  type="is-primary">
              </b-icon>
            </a>

          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import global from "@/data/global.json";

export default {
  data: () => ({
    global
  })

};
</script>
<style>
.box2 {
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086),
  0 100px 80px rgba(0, 0, 0, 0.12);
}
</style>
