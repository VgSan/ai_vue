<template>
  <div id="employee" style="height: 800px; padding-left: 30px;">
    <div style="display: contents; position: relative;">
        <h1>Employee List</h1>
        <button style="position: absolute; right: 10px; top: 90px;" class="btn" @click="addEmployee">Add Employee</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "./../../router";

export default {
  computed: {},
  created() {},
  methods: {
    addEmployee() {
      router.replace("/employee/new");
    }
  }
};
</script>

<style>
.btn {
  -webkit-border-radius: 5;
  -moz-border-radius: 5;
  border-radius: 5px;
  font-family: Arial;
  font-size: 20px;
  color: #ffffff;
  background: #ff9900;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}

.btn:hover {
  background: #ff6600;
  text-decoration: none;
}
</style>
