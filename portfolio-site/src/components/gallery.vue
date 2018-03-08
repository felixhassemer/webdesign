<template>
  <div id="gallery">
    <div class="grid">

      <a href="./projects/ba_processing-generative.html" target="_blank" class="project-container">
        <div class="project">
          <img src="" alt="" class="image">
          <div class="project-description">
            <h6>Processing: Generative Design</h6>
            <p>
              My bachelor project. A solely digital work, an experiment in learning.
            </p>
          </div>
        </div>
      </a>

      <a href="./projects/ba_exhibition.html" target="_blank" class="project-container">
        <div class="project">
          <img src="" alt="" class="image">
          <div class="project-description">
            <h6>Bachelor exhibition posters</h6>
            <p>
              Poster series for the bachelor exhibition of my graduation.
            </p>
          </div>
        </div>
      </a>

      <a href="./projects/voyager2.html" target="_self" class="project-container">
        <div class="project">
          <img src="" alt="" class="image">
          <div class="project-description">
            <h6>Voyager 2</h6>
            <p>
              A travel journal of the Voyager 2 space probe,
              documenting the exploration of the outer solar system and beyond.
            </p>
          </div>
        </div>
      </a>

      <a href="./projects/experimental_posters.html" target="_blank" class="project-container">
        <div class="project">
          <img src="" alt="" class="image">
          <div class="project-description">
            <h6>Poster series</h6>
            <p>
              Experiments in composition, depth and colour.
            </p>
          </div>
        </div>
      </a>

      <a href="" target="_blank" class="project-container">
        <div class="project">
          <img src="" alt="" class="image">
          <div class="project-description">
            <h6>Wat is dit?</h6>
            <p>
              Poster series for a photography exhibition about an excursion to Mons, Belgium.
            </p>
          </div>
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

/* @import "keyframes.css"; */

/*********************
GLOBAL
**********************/

body {
  background-color: white;
  margin: 0;
  padding: 0;
  overflow-x: hidden;    /* hide horizontal scroll bars */
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

.content {
  /* padding: 15px; */
}

#gallery {
  width: 100vw;
  padding: 0;
  margin: 0;
}

/*---------------    GRID TEMPLATE       -----------------*/

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* grid-auto-rows: 5vh; */
  grid-auto-flow: dense;
  grid-gap: 15px;
  padding: 0px;
}

/*---------------    LOGO und INTROTEXT       -----------------*/
.intro {
  max-width: 768px;
  margin: 0 auto;
}

/*---------------    PROJEKTGALERIE       -----------------*/

.project-container {
  padding: 0;
  opacity: 1;
  /* grid-row: span 4; */
  grid-column: span 6;
  overflow: hidden;
  position: relative;
  /* border-radius: 4px; */
  text-decoration: none;
  background-color: #eee;
}

.project {
  width: 100%;
  height: 100%;
}

.image {
  width: 50%;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translate(0, -50%);
}

.project-description {
  color: black;
  width: calc(50% - 15px);
  opacity: 1;
  margin-left: 50%;
  padding-left: 15px;
  z-index: 2;
}


</style>
