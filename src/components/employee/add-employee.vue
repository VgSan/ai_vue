<template>
  <div id="addemployee" style="height: 800px; padding-left: 30px; width: 82vw;">
    <div>
        <h1>New Employees</h1>
        <!-- <button style="position: absolute; right: 27px; top: 90px;" class="btn" @click="addEmployee">
          <i class="fa fa-plus"></i>&nbsp;
          Save
        </button> -->
    </div>
     <div>
      <div style="margin-top:50px;">        
        <Form ref="newUserForm" label-position="top" :rules="newUserRule" :model="editUser">

          <div class="form-group row">
            <label for="userName" class="col-sm-2 col-form-label">User Name : </label>
            <div class="col-sm-4">
              <Input placeholder="user name" id="userName" v-model="editUser.userName" :maxlength="32" :minlength="2" type="text" class="form-control"/>
            </div>
          </div>

          <div class="form-group row">
            <label for="name" class="col-sm-2 col-form-label">Name : </label>
            <div class="col-sm-4">
              <Input placeholder="name" id="name" v-model="editUser.name" :maxlength="32" type="text" class="form-control"/>
            </div>
          </div>
          
          <div class="form-group row">
            <label for="surname" class="col-sm-2 col-form-label">Sur Name : </label>
            <div class="col-sm-4">
              <Input placeholder="sur name" id="surname" v-model="editUser.surname" :maxlength="1024" type="text" class="form-control"/>
            </div>
          </div>

          <div class="form-group row">
            <label for="emailAddress" class="col-sm-2 col-form-label">Email Address : </label>
            <div class="col-sm-4">
              <Input placeholder="ex@mail.com" id="emailAddress" v-model="editUser.emailAddress" :maxlength="32" type="text" class="form-control"/>
            </div>
          </div>

        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    
  },
  data() {
    const validatePassCheck = (rule, value, callback) => {
      if (!value) {
        callback(new Error("Please enter your password again"));
      } else if (value !== this.editUser.password) {
        callback(new Error("The two input passwords do not match!"));
      } else {
        callback();
      }
    };
    return {
      editUser: {},
      newUserRule: {
        userName: [
          { required: true, message: "User Name is required", trigger: "blur" }
        ],
        name: [
          { required: true, message: "Name is required", trigger: "blur" }
        ],
        surname: [
          { required: true, message: "Surname is required", trigger: "blur" }
        ],
        emailAddress: [
          { required: true, message: "Email is required", trigger: "blur" },
          { type: "email" }
        ],
        password: [
          { required: true, message: "Password is required", trigger: "blur" }
        ],
        confirmPassword: { validator: validatePassCheck, trigger: "blur" }
      }
    };
  },
  computed: {},
  created() {}
};
</script>