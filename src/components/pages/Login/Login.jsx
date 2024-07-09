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
    watch,
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
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link to="/register" className="text-base underline">
                    Register here
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                ></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
