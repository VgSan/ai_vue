<template>
  <div id="employee" style="height: 800px; padding-left: 30px; width: 82vw;">
    <div>
        <h1>Employees</h1>
        <button style="position: absolute; right: 27px; top: 90px;" class="btn" @click="addEmployee">
          <i class="fa fa-plus"></i>&nbsp;
          Add Employee
        </button>
    </div>
    <div>
      <!-- <code>query: {{ query }}</code> -->
      <div>
        <datatable v-bind="$data" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "./../../router";
import mockData from "./../../_mockData";

export default {
  computed: {},
  created() {},
  methods: {
    addEmployee() {
      router.replace("/employee/new");
    },
    reloadUsersBtn() {
      //reloadUsers();
      mockData(this.query).then(({ rows, total }) => {
        this.data = rows;
        this.total = total;
      });
    }
  },

  data: () => ({
    columns: [
      { title: "User ID", field: "uid", sortable: true },
      { title: "Username", field: "name" },
      { title: "Age", field: "age", sortable: true },
      { title: "Email", field: "email" },
      { title: "Country", field: "country" }
    ],
    data: [],
    total: 0,
    query: {}
  }),
  watch: {
    query: {
      handler(query) {
        mockData(query).then(({ rows, total }) => {
          this.data = rows;
          this.total = total;
        });
      },
      deep: true
    }
  }
};
</script>
