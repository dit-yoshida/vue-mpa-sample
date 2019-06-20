<template>
  <div class="component">
    <heading :label="'ログインページ'" />
  </div>
</template>

<script>
import Heading from 'components/Common/Heading.vue';
export default {
  name: 'login',
  components: {
    "heading": Heading
  }
}
</script>

<style>
.component {
  color: blue;
}
</style>
