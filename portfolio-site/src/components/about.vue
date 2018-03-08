<template>
  <div id="about">

    <div id="intro">
      <h2>Hello, <br> I'm Felix.</h2>
      <p id="description">I'm a graphic designer from Germany. My work revolves around typography, generative design and 3D.</p>
    </div>

  </div>
</template>

<script>

export default {
  name: 'about'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  #about {
    padding: 20px;
    height: calc(100vh - 40px);
  }

  #intro {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 0 5vw;
  }

</style>
