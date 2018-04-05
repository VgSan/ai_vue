<template>
  <button class="btn btn-default" title="Edit" @click="editEmployee">
      <i class="fa fa-edit"></i>
    </button>
</template>
<script>
import router from "./../../../router";

export default {
  props: ['value'],
  methods: {
    editEmployee() {
      router.replace("/employee/edit/" + this.value);
    }
  },
}
</script>