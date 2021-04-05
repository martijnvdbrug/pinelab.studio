<template>
  <DefaultLayout>

    <section id="webshop-calculator" class="section" >
    <div class="container" >
    <br>
    <br>
    <br>
    <br>
    <h1 class="title"> Werk aan de winkel.... </h1>
    <p>We zijn er mee bezig, binnenkort kun je hier berekenen wat een website voor jou gaat kosten.</p>
    <br>
    <br>
    <br>
    <br>
    <b-button
        label="Vraag alvast meer informatie aan"
        type="is-info"
        size="is-medium"
        @click="isModalActive = true"/>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
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
    }
  }
}
</script>