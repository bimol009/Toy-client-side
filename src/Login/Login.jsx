import React, { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseTitle from "../Pages/HookPageTitle/UseTitle";
import { AuthContext } from "../Provider/AuthProvider";
import './Login.css'

const Login = () => {
  UseTitle("Login Page");
  const [showPass, setShowPass] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { forgotPass, signIn, googleSignEmailPass, gitHubProviderEmailPass } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const emailRef = useRef();

  const location = useLocation();

  const from = location?.state?.from.pathname || "/";

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    setError("");
    setSuccess("");
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const loggedUser = result.user;

        if (!loggedUser.emailVerified) {
          alert("please verified");
          navigate(from, { replace: true });
        }

        forgotPass();
        form.reset("");
        setSuccess("SuccessFully Logged in");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const passwordReset = () => {
    const email = emailRef.current.value;
    console.log(email);
    if (!email) {
      alert("please provide your email for forget password");
    }
    forgotPass(email)
      .then(() => {
        alert("please recheck");
      })
      .catch((error) => setError(error));
  };

  const googleSign = () => {
    googleSignEmailPass()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        setSuccess("SuccessFully Logged in");
      })

      .catch((error) => {
        setError(error.message);
      });
  };
  const githubSign = () => {
    gitHubProviderEmailPass()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
        setSuccess("SuccessFully Logged in");
      })

      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen w-full bg-red-200 mt-5 mb-5 rounded">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleLogin}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    ref={emailRef}
                    placeholder="email"
                    required
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type={showPass ? "text" : "password"}
                    name="password"
                    placeholder="password"
                    required
                    className="input input-bordered"
                  />
                  <p
                    onClick={() => {
                      setShowPass(!showPass);
                    }}
                  >
                    {showPass ? (
                      <button className="btn btn-link">Hide Pass</button>
                    ) : (
                      <button className="btn btn-link">Click To Show</button>
                    )}
                  </p>
                  <label className="label">
                    <p>
                      Forgot password?
                      <a className="btn btn-link" onClick={passwordReset}>
                        Please Recheck
                      </a>
                    </p>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>

                <p className="text-danger">{error}</p>
                <p>{success}</p>

                <h5 className="mt-4 text-center">
                  Do not Have an account ?
                  <Link to="/register" className="text-danger">
                    Register
                  </Link>
                </h5>

                <div className="form-control ">
                <label htmlFor="" className="label">
                <div onClick={googleSign} className="btn btn-primary ">
                    <div className="display">
                      <img
                        className="img"
                        src="https://i.ibb.co/0VYz0t4/download.png"
                        alt=""
                      />

                      <p>Continue with google Account</p>
                    </div>
                  </div>
                </label>

                  <div onClick={githubSign} className="btn btn-primary">
                    <div className="display gap-2">
                      <img
                        className="img"
                        src="https://i.ibb.co/TWkR133/download-1-removebg-preview.png"
                        alt=""
                      />

                      <p>Continue with GitHub</p>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
