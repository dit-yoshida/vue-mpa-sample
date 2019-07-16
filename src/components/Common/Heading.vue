<template>
  <h1 class="component">
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

<style lang="scss">
.component {
  font-style: italic;
}
</style>
