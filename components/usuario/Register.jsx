import React, { useState } from "react";
import {formRegister} from '../../services/usuario'
const Register = () => {



  return (
    <div>
      <h1>Register</h1>
      {/* <form onSubmit={handleSubmit(handleRegistration)}>
        <div>
          <input
            {...register("firsName", { required: true, minLength: 3 })}
            placeholder="first Name"
          />
          {errors.firsName && <p>firsname name is required</p>}
        </div>

        <div>
          <input
            {...register("lastName", { required: true, minLength: 3 })}
            placeholder="Last Name"
          />
          {errors.lastName && <p>Last name is required</p>}
        </div>
        <div>
          <input
            {...register("username", {
              required: "username is required",
              min: 3,
            })}
            placeholder="Username"
          />
          {errors.username && <p>Username is required</p>}
        </div>
        <div>
          <input
            {...register("password", {
              required: "password Address is required",
              minLength: 2,
            })}
          />
          {errors.password && <p>password is required</p>}
        </div>
        <div>
          <input
            {...register("mail", { required: "Email Address is required" })}
          />
          <p>{errors.mail?.message}</p>
        </div>

        <input type="submit" />
      </form> */}
     
    </div>
  );
};

export default Register;
