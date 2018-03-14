<template>
  <div class="wrapper">

    <div class="grid">
      <div class="description full-width">
        <h3>
          Processing: Generative Design
        </h3>
        <p>
          My personal goal with this project was to discover new ways to work, experiment with foundational design principles and develop my skills in the process.
          It has been my first encounter with programming for the visual arts and I was able to find something new and inspiring in this field.
        <br>
          A multitude of different graphical programs were developed with Processing and p5.js during my bachelor semester.
          The interesting ones were taken a step further and brought into a more refined form.
        <br>
          Working directly in code makes creative processes more independent (e.g. from the Adobe Suite) and encourages experimentation.
        </p>
        <p>
          <span class="quote">"The tools influence the process and, indirectly, the results."</span> – Casey Reas
        </p>
      </div>

      <div id="sketch1"></div>


      <!-- <img src="../../assets/projects/Bachelor/autodrawing-1.png" alt="" class="full-width">
      <img src="../../assets/projects/Bachelor/autodrawing-2.png" alt="" class="half-width">
      <img src="../../assets/projects/Bachelor/autodrawing-3.png" alt="" class="half-width">

      <img src="../../assets/projects/Bachelor/musicvis-1.png" alt="" class="full-width">

      <img src="../../assets/projects/Bachelor/musicvis-2.png" alt="" class="quarter-width">
      <img src="../../assets/projects/Bachelor/musicvis-3.png" alt="" class="quarter-width">
      <img src="../../assets/projects/Bachelor/musicvis-4.png" alt="" class="quarter-width">
      <img src="../../assets/projects/Bachelor/musicvis-5.png" alt="" class="quarter-width">

      <img src="../../assets/projects/Bachelor/musicvis-6.png" alt="" class="third-width">
      <img src="../../assets/projects/Bachelor/musicvis-7.png" alt="" class="third-width">
      <img src="../../assets/projects/Bachelor/musicvis-8.png" alt="" class="third-width">

      <img src="../../assets/projects/Bachelor/figures-1.jpg" alt="" class="full-width">

      <img src="../../assets/projects/Bachelor/skate-1.jpg" alt="" class="half-width">
      <img src="../../assets/projects/Bachelor/skate-2.jpg" alt="" class="half-width"> -->
    </div>

  </div>
</template>

<script>
import sketch from '../../scripts/bachelor/linepattern.js';

export default {
  
}
</script>

<style scoped>
.wrapper {
  padding: 0 3vw;
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  /* grid-auto-flow: column; */
  grid-gap: 15px;
  padding: 0;
}

.subgrid {
  display: grid;
  grid-column: span 12;
  grid-template-columns: repeat(12, 1fr);
}

.description {
}

.full-width {
  grid-column: span 12;
}

.half-width {
  grid-column: span 6;
}

.third-width {
  grid-column: span 4;
}

.quarter-width {
  grid-column: span 3;
}

.quote {
  font-style: italic;
}

img {
  width: 100%;
}

#sketch1 {
  grid-column: span 12;
  width: 100%;
  height: 600px;
}
</style>
