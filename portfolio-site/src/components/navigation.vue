<template>
  <div id="navigation">
    <img id="logo" src="../assets/logo.png" alt="Felix Hassemer Logo"/>
    <div id="links">
      <a href="">about</a>
      <a href="">contact</a>
    </div>

  </div>
</template>

<script>

export default {
  name: 'navigation'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#navigation {
  /* background-color: #555; */
  position: fixed;

  width: 100vw;
}

#logo {
  float: left;
  padding: 20px;
  width: 15vw;
  max-width: 80px;
}

#links {
  float: right;

}

</style>
