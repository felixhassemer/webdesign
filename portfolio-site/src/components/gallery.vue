<template>
  <div id="gallery">
    <div class="grid">

      <!-- Bachelor Projekt -->
      <a href="./ps/ba_processing-generative.html" target="_blank" class="p-container">
        <div class="p">
          <img src="../assets/img/bachelor/autodrawing-1.png" alt="" class="p-cover">
          <h6 class="p-title">Processing: Generative Design</h6>
          <p class="p-description">
            My bachelor thesis. A solely digital work, an experiment in learning.
          </p>
        </div>
      </a>

      <!-- Bachlorausstellung 2017 -->
      <a href="./ps/ba_exhibition.html" target="_blank" class="p-container">
        <div class="p">
          <img src="../assets/img/ba_exhibition/poster_01.jpg" alt="" class="p-cover">
          <h6 class="p-title">Bachelor exhibition posters</h6>
          <p class="p-description">
            Poster series for the bachelor exhibition of my graduation.
          </p>
        </div>
      </a>

      <!-- Voyager Newspaper -->
      <a href="./ps/voyager2.html" target="_self" class="p-container">
        <div class="p">
          <img src="../assets/img/voyager2/voyager_01.jpg" alt="" class="p-cover">
          <h6 class="p-title">Voyager 2</h6>
          <p class="p-description">
            A travel journal of the Voyager 2 space probe,
            documenting the exploration of the outer solar system and beyond.
          </p>
        </div>
      </a>

      <!-- Typo Poster Experimente -->
      <a href="./ps/experimental_posters.html" target="_blank" class="p-container">
        <div class="p">
          <img src="../assets/img/exp_posters/exp_posters_01.jpg" alt="" class="p-cover">
          <h6 class="p-title">Poster series</h6>
          <p class="p-description">
            Experiments in composition, depth and colour.
          </p>
        </div>
      </a>

      <!-- Fotoausstellung Mons -->
      <a href="" target="_blank" class="p-container">
        <div class="p">
          <img src="../assets/img/photo_exhibition/Ausstellungsplakat-1.jpg" alt="" class="p-cover">
          <h6 class="p-title">Wat is dit?</h6>
          <p class="p-description">
            Poster series for a photography exhibition about an excursion to Mons, Belgium.
          </p>
        </div>
      </a>

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
  /* background-color: #eee; */

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
