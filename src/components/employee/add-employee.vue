<template>
  <div id="saveEmployee" style="height: 800px; padding-left: 30px; width: 82vw;">
    <div>
        <h1>{{ editId > 0 ? 'Edit' : 'New' }} Employee </h1>
        <button style="position: absolute; right: 27px; top: 90px;" class="btn" type="submit" @click="saveEmployee">
          <i class="fa fa-save"></i>&nbsp;
          Save
        </button>
    </div>
     <div>
      <div style="margin-top:50px;">        
        <form ref="employeeForm" label-position="top" :rules="employeeRule" :model="editEmployee">

          <div class="form-group row">
            <label for="firstName" class="col-sm-2 col-form-label">First Name : </label>
            <div class="col-sm-4">
              <input placeholder="First Name" id="firstName" v-model="editEmployee.FirstName" :maxlength="32" :minlength="2" type="text" class="form-control"/>
            </div>
          </div>

          <div class="form-group row">
            <label for="lastName" class="col-sm-2 col-form-label">Last Name : </label>
            <div class="col-sm-4">
              <input placeholder="LastName" id="lastName" v-model="editEmployee.LastName" :maxlength="32" type="text" class="form-control"/>
            </div>
          </div>
          
          <div class="form-group row">
            <label for="dateOfBirth" class="col-sm-2 col-form-label">DOB : </label>
            <div class="col-sm-4">
              <input placeholder="1/1/1990" id="dateOfBirth" v-model="editEmployee.DateOfBirth" :maxlength="1024" type="date" class="form-control"/>
            </div>
          </div>	
	
          <div class="form-group row">
            <label for="mailAddress" class="col-sm-2 col-form-label">Email Address : </label>
            <div class="col-sm-4">
              <input placeholder="ex@mail.com" id="mailAddress" v-model="editEmployee.Email" :maxlength="32" type="text" class="form-control"/>
            </div>
          </div>

          <div class="form-group row">
            <label for="phoneNo" class="col-sm-2 col-form-label">Phone No : </label>
            <div class="col-sm-4">
              <input placeholder="009411..." id="phoneNo" v-model="editEmployee.PhoneNo" :maxlength="14" type="number" class="form-control"/>
            </div>
          </div>

          <div class="form-group row">
            <label for="mobileNo" class="col-sm-2 col-form-label">Mobile No : </label>
            <div class="col-sm-4">
              <input placeholder="009477..." id="mobileNo" v-model="editEmployee.MobileNo" :maxlength="14" type="number" class="form-control"/>
            </div>
          </div>

          <div class="form-group row">
            <label for="address" class="col-sm-2 col-form-label">Address : </label>
            <div class="col-sm-4">
              <input placeholder="No x, City" id="address" v-model="editEmployee.Address" :maxlength="120" type="text" class="form-control"/>
            </div>
          </div>

          <!-- <div class="form-group row">
            <label for="isActive" class="col-sm-2 col-form-label">Is Active : </label>
            <div class="col-sm-4">
              <input id="isActive" v-model="editEmployee.isActive" type="checkbox" class="form-check-input"/>
            </div>
          </div> -->

        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "./../../router";

export default {
  props: ["editId"],
  methods: {
    async saveEmployee() {
      if (!!this.editId && this.editId > 0) {
        console.info("Update employee...");
        this.editEmployee.Id = this.editId;
        this.editEmployee.IsActive = 1;
        await this.$store.dispatch({
          type: "employee/update",
          data: this.editEmployee
        });
        router.replace("/employee");
      } else {
        console.info("Create employee...");
        await this.$store.dispatch({
          type: "employee/create",
          data: this.editEmployee
        });
        router.replace("/employee");
      }
    }
  },
  data() {
    return {
      editEmployee: {
        FirstName: "",
        LastName: ""
      },
      employeeRule: {
        FirstName: [
          { required: true, message: "User Name is required", trigger: "blur" }
        ],
        LastName: [
          { required: true, message: "Name is required", trigger: "blur" }
        ],
        Email: [
          { required: true, message: "Email is required", trigger: "blur" },
          { type: "email" }
        ],
        DateOfBirth: [
          {
            required: true,
            message: "Date of birth is required",
            trigger: "blur"
          },
          { type: "date" }
        ]
      }
    };
  },
  computed: {},
  async created() {
    console.log("Edit ID: " + this.editId);
    await this.$store.dispatch({
      type: "employee/get",
      data: this.editId
    });

    this.editEmployee = this.$store.state.employee.employee;
  }
};
</script>