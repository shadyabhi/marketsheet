<template>
  <div
    id="app"
    class='ui grid'
  >

    <!-- Navbar -->
    <navbar />

    <!-- Main grid -->
    <div
      id='main'
      class="ui row"
    >
      <router-view />
    </div>

  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style>
html,
#app {
  margin: auto;
  width: 80%;
}
.bolded-text {
  font-size: 1.2em;
  text-align: justify;
  text-align-last: left;
  color: #db28289e;
  font-family: monospace;
}
.spinner {
  margin: 10em;
}
.greyed {
  opacity: 0.2;
}
</style>
