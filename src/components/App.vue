<template>
  <div class="messgae">
    {{ message }}
  </div>
</template>

<style lang="less" scoped>
  @import "~less/variables";

  .message {
    color: @red;
  }
</style>

<script>
export default {
  computed: {
    ...mapState({
      message: "message"
    })
  }
}
</script>