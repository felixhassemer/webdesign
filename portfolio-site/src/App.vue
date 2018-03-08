<template>
  <html lang="de">

  <head>

  </head>
  <body id="app">
    <topsection></topsection>
    <gallery></gallery>
    <!-- <myCanvas v-show="showCanvas"></myCanvas> -->
    <!-- <button @click="showCanvas = !showCanvas">Press me</button> -->
  </body>

  </html>

</template>

<script src="../libraries/p5.js" type="text/javascript"></script>
<script src="./scripts/sketch.js"></script>

<script>
// import myCanvas from './components/myCanvas.vue';
import topsection from './components/topsection.vue';
import gallery from './components/gallery.vue';


export default {
  name: 'App',
  data() {
    return {
      // showCanvas: true
    };
  },
  components: {
    // myCanvas,
    topsection,
    gallery
  }
}
</script>

<style>

body {
  background-color: #e9dece;
  margin: 0;
  padding: 0;
}

#app {
  /* background-color: red; */
  width: 100vw;
  padding: 0;
  margin: 0;
}

</style>
