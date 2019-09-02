<template>
  <div>
    <h3>表示結果</h3>
    <p>{{ getCode }}</p>
    <div>
      <p>key</p>
      <input
        disabled
        type="text"
        value="userId"
      >
      <p>value</p>
      <input
        type="text"
        @change="inputValue"
      >
    </div>
    <div>
      <button @click="apiClick">
        送信
      </button>
    </div>
    <p>value:{{ params.userId }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      params: {
        userId: "",
      }
    }
  },
  computed: {
    getCode: function(){
      return this.$store.getters.getCode
    }
  },
  methods: {
    inputValue: function(event){
      this.params.userId = event.target.value
    },
    apiClick: function(){
      this.$store.dispatch("setCodeAction", this.params)
    }
  }
}
</script>