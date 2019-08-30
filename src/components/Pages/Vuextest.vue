<template>
  <div>
    <h3>表示結果</h3>
    <p>{{ getCode }}</p>
    <div>
      <p>key</p>
      <!--v-on:changeで、テキストボックス内の入力内容が変わるたびに発火する-->
      <input
        type="text"
        @change="inputKey"
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
    <p>key:{{ param.key }}</p>
    <p>value:{{ param.value }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      param: {
        key: "",
        value: ""
      }
    }
  },
  computed: {
    getCode: function(){
      return this.$store.getters.getCode
    }
  },
  methods: {
    inputKey: function(event){
      this.param.key = event.target.value
      console.log(event)
    },
    inputValue: function(event){
      this.param.value = event.target.value
    },
    apiClick: function(){
      console.log(this.param)
      this.$store.dispatch("setCodeAction", this.param)
    }
  }
}
</script>