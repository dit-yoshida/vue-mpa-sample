<template>
  <div class="components">
    <heading :label="'ログインページ'" />
  </div>
</template>

<script>
import Heading from "components/Common/Heading.vue"
export default {
  name: "Login",
  components: {
    heading: Heading
  }
}
</script>

<style lang="scss" scoped>
.components {
  color: blue;
}
</style>
