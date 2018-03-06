<template>
  <div>
    <div
      class="colorBox"
      :style="{backgroundColor: color}"
    ></div>
    <input type="text" v-model="color">
  </div>

</template>

<script>
export default {
  name: 'p5Circles',
  data() {
    return {
      color: 'red'
    }
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.colorBox {
  width: 200px;
  height: 200px;
  /* background-color: red; */
}

</style>
