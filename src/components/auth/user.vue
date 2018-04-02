<template>
  <div v-if="users" id="user" style="height: 800px; padding-left: 30px; width: 82vw;">
    <div>
        <h1>Users</h1>
        <button style="position: absolute; right: 27px; top: 90px;" class="btn" @click="addUser">
          <i class="fa fa-plus"></i>&nbsp;
          Add User
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
import router from "./../../router";
import moment from "moment";
import uniq from "lodash/uniq";
import orderBy from "lodash/orderBy";

import without from "lodash/without";
import camelCase from "lodash/camelCase";

const typeOf = o =>
  Object.prototype.toString
    .call(o)
    .slice(8, -1)
    .toLowerCase();
const purify = o => JSON.parse(JSON.stringify(o)); // purify data

var userData = function userData(query, users) {
  query = purify(query);
  const { limit = 10, offset = 0, sort = "", order = "" } = query;

  let rows = users;

  // custom query conditions
  ["id", "email", "password"].forEach(field => {
    switch (typeOf(query[field])) {
      case "array":
        rows = rows.filter(row => query[field].includes(row[field]));
        break;
      case "string":
        rows = rows.filter(row =>
          row[field].toLowerCase().includes(query[field].toLowerCase())
        );
        break;
      default:
        // nothing to do
        break;
    }
  });

  if (sort) {
    rows = orderBy(rows, sort, order);
  }

  const res = {
    rows: rows.slice(offset, offset + limit),
    total: rows.length,
    summary: {
      uid: rows.length,
      age:
        rows.length &&
        ~~(
          rows.map(({ id }) => id).reduce((sum, cur) => sum + cur) / rows.length
        ), // average age
      country: uniq(rows.map(({ country }) => country)).length
    }
  };

  const consoleGroupName =
    "User data - " + moment().format("YYYY-MM-DD HH:mm:ss");
  setTimeout(() => {
    console.group(consoleGroupName);
    console.info("Receive:", query);
    console.info("Respond:", res);
    console.groupEnd(consoleGroupName);
  }, 0);
  return Promise.resolve(purify(res));
};

export default {
  methods: {
    addUser() {
      router.replace("/user/new");
    },
    async getpage() {
      await this.$store.dispatch({
        type: "user/getAll"
      });
    }
  },
  data: () => ({
    columns: [
      { title: "User ID", field: "id", sortable: true },
      { title: "Email", field: "email", sortable: true },
      { title: "Password", field: "password", visible: true }
    ],
    data: [],
    total: 0,
    query: {}
  }),
  watch: {
    query: {
      handler(query) {
        userData(query, this.$store.state.user.users).then(
          ({ rows, total }) => {
            this.data = rows;
            this.total = total;
          }
        );
      },
      deep: true
    }
  },
  computed: {
    users() {
      userData(this.query, this.$store.state.user.users).then(
        ({ rows, total }) => {
          this.data = rows;
          this.total = total;
        }
      );
      return true;
    }
  },
  async created() {
    this.getpage();
  }
};
</script>


