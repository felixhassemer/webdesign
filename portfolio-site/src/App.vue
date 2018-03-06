<template>
  <html lang="de">

  <head>

  </head>
  <body>
    <p5Circles></p5Circles>
    <canv></canv>
  </body>

  </html>

</template>

<script src="../libraries/p5.js" type="text/javascript"></script>
<script src="./js/sketch.js"></script>

<script>
import p5Circles from './components/p5Circles.vue';
import canv from './components/canvas.vue';


export default {
  name: 'App',
  components: {
    p5Circles,
    canv
  }
}
</script>

<style>

</style>
