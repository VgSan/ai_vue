<template>
  <header id="header">
    <div class="logo">
      <router-link to="/">
        <img style="top-padding: 5px;" src="../../assets/aisys/img/aisys_logo.png">
      </router-link>
    </div>
    <nav>
      <ul>
        <li v-if="auth">
          <button @click="onLogout" class="logout"><i class="fa fa-sign-out"></i>&nbsp; Logout</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    auth() {
      return this.$store.getters['auth/isAuthenticated'];
    }
  },
  methods: {
    onLogout() {
      this.$store.dispatch("auth/logout");
    }
  }
};
</script>

<style scoped>
#lines {
  border-bottom: 7px double;
  border-top: 2px solid;
  border-color: rgba(255, 255, 255, 0.9);
  content: "";
  height: 3px;
  width: 20px;
  box-sizing: content-box;
  cursor: pointer;
}

#header {
  height: 75px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  padding: 0 20px;
}

.logo {
  font-weight: bold;
  color: white;
}

.logo a {
  text-decoration: none;
  color: white;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-flow: row;
  align-items: center;
}

li {
  margin: 0 16px;
}

li a {
  text-decoration: none;
  color: white;
}

li a:hover,
li a:active,
li a.router-link-active {
  color: #fa923f;
}

.logout {
  background-color: transparent;
  border: none;
  font: inherit;
  color: white;
  cursor: pointer;
}
</style>