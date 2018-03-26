<template>
  <div id="dashboard" style="height: 800px; padding-left: 30px;">
    <h1>Survey!</h1>
    <!-- <p>You should only get here if you're authenticated!</p> -->
    <p v-if="email">Your email address: {{ email }}</p>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    computed: {
      email () {
        return !this.$store.getters.user ? false : this.$store.getters.user.email
      }
    },
    created () {
      this.$store.dispatch('fetchUser')
    }
  }
</script>

<style scoped>
  h1, p {
    text-align: center;
  }

  p {
    color: red;
  }
</style>