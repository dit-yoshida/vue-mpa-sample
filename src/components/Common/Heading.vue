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

<style>
.component {
  font-style: italic;
}
</style>
