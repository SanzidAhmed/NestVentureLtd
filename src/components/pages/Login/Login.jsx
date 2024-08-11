import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data.email);
    logIn(data.email, data.password).then((result) => {
      console.log(result);
      const user = result.user;
      console.log(user);
      reset();
      navigate(from, { replace: true });
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white ">
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="card bg-base-100 md:w-[500px] w-full shrink-0 shadow-2xl rounded-none ">
          <div className=" flex justify-center items-center">
            <img
              src="https://i.ibb.co/HBSJn8G/Colorful-Illustrative-Hummingbird-Animals-Logo-removebg-preview.png"
              alt=""
              className="h-40 py-4 md:py-6 w-40  "
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
            <div className="form-control">
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="input input-bordered rounded-none"
                required
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <input
                type="password"
                {...register("password", { required: true })}
                placeholder="Password"
                className="input input-bordered rounded-none"
                required
              />
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Login"
                className="btn btn-primary bg-red-900 text-white border-none hover:bg-red-700 rounded-none"
              ></input>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
