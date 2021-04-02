<template>
  <div>
    <b-navbar fixed-top transparent>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <img
            src="/pinelab.svg"
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

    <slot />

    <section class="footer" id="contact">
      <div class="content has-text-centered">
        <p>
          github
          linkedIn
          medium
          email
          telefoon
          kvk
        </p>
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
