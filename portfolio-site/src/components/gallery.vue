<template>
  <div id="gallery">
    <div class="grid">

      <!-- Bachelor Projekt -->
      <router-link to="/projects/bachelor" class="p-container">
        <div class="p">
          <img src="../assets/project_gallery/Bachelor_cover.png" alt="" class="p-cover">
          <h6 class="p-title">Processing: Generative Design</h6>
          <p class="p-description">
            My bachelor thesis. A solely digital work, an experiment in learning.
          </p>
        </div>
      </router-link>

      <!-- Bachlorausstellung 2017 -->
      <router-link to="/projects/bachelor_exhibition" class="p-container">
        <div class="p">
          <img src="../assets/project_gallery/BachelorExhibition_cover.jpg" alt="" class="p-cover">
          <h6 class="p-title">Bachelor exhibition posters</h6>
          <p class="p-description">
            Poster series for the bachelor exhibition of my graduation.
          </p>
        </div>
      </router-link>

      <!-- Voyager Newspaper -->
      <router-link to="/projects/voyager" class="p-container">
        <div class="p">
          <img src="../assets/project_gallery/Voyager_cover.jpg" alt="" class="p-cover">
          <h6 class="p-title">Voyager 2</h6>
          <p class="p-description">
            A travel journal of the Voyager 2 space probe,
            documenting the exploration of the outer solar system and beyond.
          </p>
        </div>
      </router-link>

      <!-- Typo Poster Experimente -->
      <router-link to="/projects/abstract_posters" class="p-container">
        <div class="p">
          <img src="../assets/project_gallery/AbstractPosters_cover.jpg" alt="" class="p-cover">
          <h6 class="p-title">Poster series</h6>
          <p class="p-description">
            Experiments in composition, depth and colour.
          </p>
        </div>
      </router-link>

      <!-- Fotoausstellung Mons -->
      <router-link to="/projects/mons_exhibition" class="p-container">
        <div class="p">
          <img src="../assets/project_gallery/MonsExhibition_cover.jpg" alt="" class="p-cover">
          <h6 class="p-title">Wat is dit?</h6>
          <p class="p-description">
            Poster series for a photography exhibition about an excursion to Mons, Belgium.
          </p>
        </div>
      </router-link>

    </div>
  </div>
</template>

<script>

export default {
  name: 'Gallery',

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
  /* grid-auto-flow: row; */
  grid-gap: 15px;
  padding: 0px;
}

/*---------------    PROJEKTGALERIE       -----------------*/


.p-container {
  grid-column: span 12;
  padding: 0 3vw;
  margin-bottom: 4vh;
  text-decoration: none;
}

.p {
  width: 100%;
}

.p-cover {
  width: 100%;
  margin-bottom: 1vh;
}

.p-title, .p-description {
  padding-left: 3vw;
}

/* .image {
  width: 50%;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translate(0, -50%);
} */

</style>
