<template>
    <nav class="side_menu">
      <ul>
        <li v-if="auth">
          <router-link to="/dashboard">
            <i class="fa fa-tachometer-alt"></i>&nbsp;
            <span class="side_menu_label">Dashboard</span>
          </router-link>
        </li>
        <li v-if="auth">
          <router-link to="/service">
            <i class="fa fa-tasks"></i>&nbsp;
            <span class="side_menu_label">Service</span>
          </router-link>
        </li>
        <li v-if="auth">
          <router-link to="/survey">
            <i class="fa fa-book"></i>&nbsp;
            <span class="side_menu_label">Survey</span>
          </router-link>
        </li>
      </ul>
    </nav>
</template>

<script>
export default {
  computed: {
    auth() {
      return this.$store.getters.isAuthenticated;
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("logout");
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 25px;
  height: 100%;
  display: block;
}

li {
  margin: 0 16px;
  height: 50px;
}

li a {
  text-decoration: none;
  color: black;
}

li a:hover,
li a:active,
li a.router-link-active {
  color: #fa923f;
}

.side_menu {
  width: 220px;
  left: 0;
  top: 0;
  bottom: 0;
  padding-top: 10px;
}

.side_menu_label {
  font-size: 1.125em;
  letter-spacing: -0.3px;
}
</style>