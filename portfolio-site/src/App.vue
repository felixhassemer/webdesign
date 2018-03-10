<template>
  <html lang="de">
  <head>

  </head>

  <body id="app">
    <app-nav></app-nav>

    <transition name="page" mode="out-in">
      <router-view></router-view>
    </transition>
  </body>

  </html>

</template>

<!-- <script src="../libraries/p5.js" type="text/javascript"></script>
<script src="./scripts/sketch.js"></script> -->

<script>
export default {
  name: 'App',
  data() {
    return {

    };
  }
}
</script>

<style>
@import '../node_modules/normalize.css/normalize.css';

body {
  background-color: #f1e9e3;
  margin: 0;
  padding: 0;
  margin-top: 4em;
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

.page-enter-active, .page-leave-active {
  transition: all 0.3s ease-in-out;
}

.page-enter {
  transform: translateX(50px);
  opacity: 0;
}

.page-leave-to {
  transform: translateX(-50px);
  opacity: 0;
}

</style>
