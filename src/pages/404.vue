<template>
  <DefaultLayout>

    <section id="404" class="section">
      <div class="container">
        <br>
        <br>
        <br>
        <br>
        <h1 class="title">404 - Deze pagina bestaat niet</h1>
        <br>
        <br>
        <a href="#contact">Misschien wil je contact opnemen?</a>
        <br>
        <br>
        <br>
        <br>
        <b-button
            tag="a"
            label="Of wil je weten wat een webshop kost?"
            type="is-info"
            size="is-medium"
            href="/wat-kost-een-webshop/"
        />
        <br>
        <br>
        <br>
        <br>
      </div>
    </section>
  </DefaultLayout>
</template>
<script>
import global from "@/data/global.json";

export default {
  data: () => ({
    global
  })
};
</script>
