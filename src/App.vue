<template>
  <div id="app">
    <app-header />
    <div v-if="auth" style="display: inline-flex;">
      <div style="background-color: #f4f4f4;"><app-navigation /></div>
      <div><router-view></router-view></div>
    </div>
    <div v-if="!auth" ><router-view></router-view></div>
  </div>
</template>

<script>
import Header from "./components/header/header.vue";
import Navigation from "./components/header/navigation.vue";
export default {
  name: "app",
  components: {
    "app-header": Header,
    "app-navigation": Navigation
  },
  computed: {
    auth() {
      return this.$store.getters["auth/isAuthenticated"];
    }
  },
  created() {
    this.$store.dispatch("auth/tryAutoLogin");
  }
};
</script>

<style>
body,
html {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>