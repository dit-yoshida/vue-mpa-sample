<template>
  <div class="components">
    <heading :label="'初期ページ'" />
    <span class="hyphens">
      test test test
    </span>
  </div>
</template>

<script>
import Heading from "components/Common/Heading.vue"
export default {
  name: "Top",
  components: {
    heading: Heading
  }
}
</script>

<style lang="scss" scoped>
.components {
  color: red;

  .heading {
    font-size: 0;
  }

  .hyphens {
    hyphens: auto;
  }
}
</style>
