import React from "react";
import { Formik } from "formik";
import moment from "moment-timezone";

const AddUser = () => (
  <div className="add_user">
    Add user
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        dob: moment(new Date()).format("YYYY-MM-DD"),
        state: ""
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = " Username is Required";
        }
        if (!values.email) {
          errors.email = " Email is Required";
        }
        if (!values.phone) {
          errors.phone = " Phone is Required";
        }
        if (
          !/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/gm.test(
            values.phone
          )
        ) {
          errors.phone = "Enter a valid phone number(10 digits)";
        }
        if (!values.state) {
          errors.state = " State is Required";
        }
        return errors;
      }}
      onSubmit={(e, { resetForm }) => {
        let previousData = localStorage.getItem("userData");
        if (previousData) {
          let array = [];
          array.push(previousData);
          array.push(JSON.stringify(e));
          localStorage.setItem("userData", array);
          resetForm();
        } else {
          localStorage.setItem("userData", JSON.stringify(e));
          resetForm();
        }
      }}
      render={(props) => (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            props.handleSubmit();
          }}
          className="shadow p-3 mb-5 bg-white rounded lh-lg row justify-content-center"
        >
          <div class="form-group row mb-4 w-75">
            <div class="col text-center">Username</div>
            <div class="col">
              <input
                className="rounded border"
                type="text"
                name="name"
                placeholder="Username"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.name}
              />
              <span class="error">
                {" "}
                {props.errors.name && props.touched.name && props.errors.name}
              </span>
            </div>
          </div>
          <div class="form-group row mb-4 w-75">
            <div class="col text-center">Email</div>
            <div class="col">
              <input
                className="rounded border"
                type="email"
                name="email"
                placeholder="Email"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.email}
              />
              <span class="error">
                {" "}
                {props.errors.email &&
                  props.touched.email &&
                  props.errors.email}
              </span>
            </div>
          </div>
          <div class="form-group row mb-4 w-75">
            <div class="col text-center">Phone</div>
            <div class="col">
              <input
                className="rounded border"
                type="phone"
                name="phone"
                placeholder="Phone"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.phone}
              />
              <span class="error">
                {" "}
                {props.errors.phone &&
                  props.touched.phone &&
                  props.errors.phone}
              </span>
            </div>
          </div>
          <div class="form-group row mb-4 w-75">
            <div class="col text-center">DOB</div>
            <div class="col">
              <input
                className="rounded border"
                type="date"
                name="dob"
                placeholder="dd-mm-yyyy"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.dob}
              />
              <span class="error">
                {" "}
                {props.errors.dob && props.touched.dob && props.errors.dob}
              </span>
            </div>
          </div>
          <div class="form-group row mb-4 w-75">
            <div class="col text-center ">State</div>
            <div class="col">
              <input
                className="rounded border"
                type="text"
                name="state"
                placeholder="State"
                onChange={props.handleChange}
                onBlur={props.handleBlur}
                value={props.values.state}
              />
              <span class="error">
                {" "}
                {props.errors.state &&
                  props.touched.state &&
                  props.errors.state}
              </span>
            </div>
          </div>
          <button type="submit" class="btn  form-group row mb-4 w-50">
            Create User
          </button>
        </form>
      )}
    />
  </div>
);

export default AddUser;
