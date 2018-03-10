<template>
  <header class="navbar" v-bind:class="{'nav-up' : this.scrolledUp}">
    <router-link to="/">
      <img id="logo" src="../assets/logo.png" alt="Felix Hassemer Logo"/>
    </router-link>
    <div id="links">
      <router-link to="/about" active-class="active">about</router-link>
      <router-link to="/contact" active-class="active">contact</router-link>
    </div>
  </header>
</template>

<script>

export default {
  name: 'Navigation',
  data() {
    return {
      scrolledUp: false,
      oldY: 0
    };
  },
  methods: {
    handleScroll: function() {
      var newY = window.scrollY;
      var up = 0;
      var down = 0;

      if (newY > this.oldY) {
        this.scrolledUp = true;
      } else {
        this.scrolledUp = false;
      }

      this.oldY = newY;
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

header {
  background-color: #f1e9e3;
  position: fixed;
  top: 0;
  height: 4em;
  width: 100%;
  transition: top 0.2s ease-in-out;
}

/* animation class */
.nav-up {
  top: -4em;
}

#logo {
  position: absolute;
  height: 40%;
  top: 50%;
  transform: translateY(-50%);
  padding-left: 3vw;
}

#links {
  margin: 0;
  padding: 0 3vw 0 0;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#links a {
  text-decoration: none;
  font-size: 1.4em;
  margin-left: 1.2em;
}

#links a:hover {
  border-bottom: solid 1px;
}

.active {
  font-weight: bold;
}

</style>
