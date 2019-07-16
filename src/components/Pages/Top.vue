<template>
  <div class="components">
    <heading :label="'初期ページ'" />
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

<style lang="scss">
.component {
  color: red;

  .heading {
    font-size: 0;
  }
}
</style>
