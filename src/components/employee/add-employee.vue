<template>
  <div id="saveEmployee" style="height: 800px; padding-left: 30px; width: 82vw;">
    <div>
        <h1>New Employee</h1>
        <button style="position: absolute; right: 27px; top: 90px;" class="btn" type="submit" @click="saveEmployee">
          <i class="fa fa-save"></i>&nbsp;
          Save
        </button>
    </div>
     <div>
      <div style="margin-top:50px;">        
        <Form ref="employeeForm" label-position="top" :rules="employeeRule" :model="editEmployee">

          <div class="form-group row">
            <label for="firstName" class="col-sm-2 col-form-label">First Name : </label>
            <div class="col-sm-4">
              <Input placeholder="First Name" id="firstName" v-model="editEmployee.firstName" :maxlength="32" :minlength="2" type="text" class="form-control"/>
            </div>
          </div>

          <div class="form-group row">
            <label for="lastName" class="col-sm-2 col-form-label">Last Name : </label>
            <div class="col-sm-4">
              <Input placeholder="LastName" id="lastName" v-model="editEmployee.lastName" :maxlength="32" type="text" class="form-control"/>
            </div>
          </div>
          
          <div class="form-group row">
            <label for="dateOfBirth" class="col-sm-2 col-form-label">DOB : </label>
            <div class="col-sm-4">
              <Input placeholder="1/1/1990" id="dateOfBirth" v-model="editEmployee.dateOfBirth" :maxlength="1024" type="date" class="form-control"/>
            </div>
          </div>	
	
          <div class="form-group row">
            <label for="mailAddress" class="col-sm-2 col-form-label">Email Address : </label>
            <div class="col-sm-4">
              <Input placeholder="ex@mail.com" id="mailAddress" v-model="editEmployee.mailAddress" :maxlength="32" type="text" class="form-control"/>
            </div>
          </div>

          <div class="form-group row">
            <label for="phoneNo" class="col-sm-2 col-form-label">Phone No : </label>
            <div class="col-sm-4">
              <Input placeholder="009411..." id="phoneNo" v-model="editEmployee.phoneNo" :maxlength="14" type="number" class="form-control"/>
            </div>
          </div>

          <div class="form-group row">
            <label for="mobileNo" class="col-sm-2 col-form-label">Mobile No : </label>
            <div class="col-sm-4">
              <Input placeholder="009477..." id="mobileNo" v-model="editEmployee.mobileNo" :maxlength="14" type="number" class="form-control"/>
            </div>
          </div>

          <div class="form-group row">
            <label for="address" class="col-sm-2 col-form-label">Address : </label>
            <div class="col-sm-4">
              <Input placeholder="No x, City" id="address" v-model="editEmployee.address" :maxlength="120" type="text" class="form-control"/>
            </div>
          </div>

          <!-- <div class="form-group row">
            <label for="isActive" class="col-sm-2 col-form-label">Is Active : </label>
            <div class="col-sm-4">
              <Input id="isActive" v-model="editEmployee.isActive" type="checkbox" class="form-check-input"/>
            </div>
          </div> -->

        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    async saveEmployee() {
      if (!!this.editEmployee.id) {
        console.info("Update employee...");
        // this.$refs.userForm.validate(async val => {
        //   if (val) {
        //     await this.$store.dispatch({
        //       type: "employee/update",
        //       data: this.editEmployee
        //     });
        //   }
        // });
      } else {
        console.info("Create employee...");
        console.info(this.editEmployee.firstName);
        //this.$refs.employeeForm.validate(async val => {
        //if (val) {
        await this.$store.dispatch({
          type: "employee/create",
          data: this.editEmployee
        });
        //}
        //});
      }
    }
  },
  data() {
    return {
      editEmployee: {
        firstName: "",
        lastName: "",
        mailAddress: ""
      },
      employeeRule: {
        firstName: [
          { required: true, message: "User Name is required", trigger: "blur" }
        ],
        lastName: [
          { required: true, message: "Name is required", trigger: "blur" }
        ],
        mailAddress: [
          { required: true, message: "Email is required", trigger: "blur" },
          { type: "email" }
        ]
      }
    };
  },
  computed: {},
  created() {}
};
</script>