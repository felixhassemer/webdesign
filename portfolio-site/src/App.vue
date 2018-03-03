<template>
  <html lang="de">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- <title>Felix Hassemer | Designer</title> -->
  </head>
  <body>
    <p5Circles></p5Circles>
  </body>

  </html>

</template>

<script src="../libraries/p5.js" type="text/javascript"></script>
<script src="./js/sketch.js"></script>

<script>
import p5Circles from './components/p5Circles';
// import p5js from '../libraries/p5.js';
import p5 from "../node_modules/p5/lib/p5.js";
// Object.definePrototype(vm.prototype, '$p5', { value: p5 });

export default {
  name: 'App',
  components: {
    p5Circles
  },
  mounted: function(){
    require('../node_modules/p5/lib/p5.js')
  }
}
</script>

<style>

</style>
