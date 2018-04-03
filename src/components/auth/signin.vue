<template>
  <div id="signin">
    <div class="signin-form">
      <form @submit.prevent="onSubmit">
        <div style="margin-top: 10px; margin-bottom: 20px; text-align: center;">
          <img style="top-padding: 5px;" src="../../assets/aisys/img/aisys_logo.png">
        </div>
        <div class="input">
          <!-- <label for="email">Mail</label> -->
          <input placeholder="mail"
                  type="email"
                  id="email"
                  v-model="email">
        </div>
        <div class="input">
          <!-- <label for="password">Password</label> -->
          <input placeholder="password"
                  type="password"
                  id="password"
                  v-model="password">
        </div>
        <div>
          <button style="width: -webkit-fill-available;" class="btn" type="submit">LOGIN</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    onSubmit() {
      const formData = {
        email: this.email,
        password: this.password
      };
      console.log(formData);
      this.$store.dispatch("auth/login", {
        email: formData.email,
        password: formData.password
      });
    }
  }
};
</script>

<style scoped>
.signin-form {
  width: 400px;
  margin: 100px auto;
  border: 1px solid #eee;
  padding: 20px;
  box-shadow: 0 2px 3px #ccc;
}

.input {
  margin: 10px auto;
}

.input label {
  display: block;
  color: #4e4e4e;
  margin-bottom: 6px;
}

.input input {
  font: inherit;
  width: 100%;
  padding: 6px 12px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}

.input input:focus {
  outline: none;
  border: 1px solid #ed9f04;
  background-color: #eee;
}
</style>