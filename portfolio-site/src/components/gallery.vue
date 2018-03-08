<template>
  <div id="gallery">
    <div class="grid">

      <!-- Bachelor Projekt -->
      <a href="./projects/ba_processing-generative.html" target="_blank" class="project-container">
        <div class="project">
          <img src="../assets/img/bachelor/autodrawing-1.png" alt="" class="image">
        </div>
      </a>
      
      <!-- Bachlorausstellung 2017 -->
      <a href="./projects/ba_exhibition.html" target="_blank" class="project-container">
        <div class="project">
          <img src="../assets/img/ba_exhibition/poster_01.jpg" alt="" class="image">
        </div>
      </a>

      <!-- Voyager Newspaper -->
      <a href="./projects/voyager2.html" target="_self" class="project-container">
        <div class="project">
          <img src="../assets/img/voyager2/voyager_01.jpg" alt="" class="image">
        </div>
      </a>

      <!-- Typo Poster Experimente -->
      <a href="./projects/experimental_posters.html" target="_blank" class="project-container">
        <div class="project">
          <img src="../assets/img/exp_posters/exp_posters_01.jpg" alt="" class="image">
        </div>
      </a>

      <!-- Fotoausstellung Mons -->
      <a href="" target="_blank" class="project-container">
        <div class="project">
          <img src="../assets/img/photo_exhibition/Ausstellungsplakat-1.jpg" alt="" class="image">
        </div>
      </a>

    </div>
  </div>
</template>

<script>

export default {
  name: 'gallery',

  data() {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/*---------------    GRID TEMPLATE       -----------------*/

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-flow: row;
  grid-gap: 15px;
  padding: 0px;
}

/*---------------    PROJEKTGALERIE       -----------------*/
img {
  width: 200px;
}

/* .project-container {
  padding: 0;
  opacity: 1;
  grid-column: span 6;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  background-color: #eee;
} */

/* .image {
  width: 50%;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translate(0, -50%);
} */

</style>
