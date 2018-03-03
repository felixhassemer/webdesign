<template>
  <div>
    <h1>{{ msg }}</h1>

    <div id="canvas">
    </div>
    <button v-on:click="clicked">Click here</button>
  </div>

</template>

<script>
// import p5 from '../../libraries/p5.js';
import p5 from "../../node_modules/p5/lib/p5.js"


export default {
  name: 'p5Circles',
  data () {
    return {
      msg: 'Hello World'
    }
  },
  mounted: function(){
    require('../../node_modules/p5/lib/p5.js');
  },
  methods: {
    clicked: function() {
      // p5.createCanvas(200,200);
      p5.background(0);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
