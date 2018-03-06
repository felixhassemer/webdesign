<template>
  <html lang="de">

  <head>

  </head>
  <body>
    <myCanvas></myCanvas>
  </body>

  </html>

</template>

<script src="../libraries/p5.js" type="text/javascript"></script>
<script src="./scripts/sketch.js"></script>

<script>
import myCanvas from './components/myCanvas.vue';

export default {
  name: 'App',
  components: {
    myCanvas
  }
}
</script>

<style>

</style>
