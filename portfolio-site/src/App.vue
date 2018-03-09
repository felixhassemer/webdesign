<template>
  <html lang="de">
  <head>

  </head>

  <body id="app">

    <navigation></navigation>
    <!-- <about></about> -->
    <gallery></gallery>
  </body>

  </html>

</template>

<link rel="stylesheet" href="../node_modules/normalize.css/normalize.css" />
<script src="../libraries/p5.js" type="text/javascript"></script>
<script src="./scripts/sketch.js"></script>

<script>
import navigation from './components/navigation.vue';
import about from './components/about.vue';
import gallery from './components/gallery.vue';


export default {
  name: 'App',
  data() {
    return {

    };
  },
  components: {
    navigation,
    about,
    gallery
  }
}
</script>

<style>

body {
  background-color: #e9dece;
  margin: 0;
  padding: 0;
  /* overflow-x: hidden; /* hide horizontal scroll bars */
  font-size: 12px;       /* base font size */
  line-height: 1.4;      /* base line height */
}

p, a, h1, h2, h3, h4, h5, h6, small {
  font-family: 'Merriweather Sans', sans-serif;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0.4em;
  color: black;
}

/*Ratios from modularscale.com (Ratio 5:6)*/
small {font-size: 0.75em;}
p {font-size: 1em;}
a {font-size: 1em;}
h6 {font-size: 1.2em;}
h5 {font-size: 1.44em;}
h4 {font-size: 1.728em;}
h3 {font-size: 2.074em;}
h2 {font-size: 2.488em;}
h1 {font-size: 3.583em;}

</style>
