<template>
  <div class="box has-background-white has-text-grey-dark">
    <p style="margin-bottom: 10px;">
      {{ body }}
    </p>
            <span class="font-semibold has-text-weight-bold">
                {{ name }}
            </span>
        <span class="is-size-7 is-flex is-align-items-center">
          <a :href="link" target="_blank">{{ company }}</a>
            </span>
  </div>
</template>
<script>
export default {
  props: ['name', 'body', 'company', 'link']
}
</script>