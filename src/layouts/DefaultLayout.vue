<template>
  <div>
    <b-navbar fixed-top transparent class="box2" id="realnavbar">
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

    <Footer/>

  </div>
</template>
<script>
import global from "@/data/global.json";
import Footer from "../components/Footer";

export default {
  data: () => ({
    global
  }),
  components: {
    Footer
  }
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
