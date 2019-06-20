<template>
  <div class="components">
    <heading :label="'初期ページ'" />
  </div>
</template>

<script>
import Heading from 'components/Common/Heading.vue';
export default {
  name: 'top',
  components: {
    "heading": Heading
  }
}
</script>

<style>
.component {
  color: red;
}
</style>
