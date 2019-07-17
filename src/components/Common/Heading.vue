<template>
  <h1 class="components">
    {{ label }}
  </h1>
</template>

<script>
export default {
  name: "Heading",
  props: {
    label: String
  }
}
</script>

<style lang="scss" scoped>
.components {
  font-style: italic;
}
</style>
