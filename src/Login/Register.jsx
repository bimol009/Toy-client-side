import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import UseTitle from "../Pages/HookPageTitle/UseTitle";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  UseTitle("Registration Page");
  const [showPass, setShowPass] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const {
    createUserEmailPass,
    showEmailVerification,
    googleSignEmailPass,
    gitHubProviderEmailPass,
    user,
    createdProfile,
    setReload,
  } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    setError("");
    setSuccess("");
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const name = form.name.value;
    console.log(email, password, name, photo);

    if (password.length < 6) {
      setError("Please Provide at least 6 ");
      return;
    }

    createUserEmailPass(email, password)
      .then((result) => {
        const loggedUser = result.user;
        loggedUser.displayName = name;
        loggedUser.photoURL = photo;
        createdProfile(name, photo).then(() => {
          setReload(true);
        });
        if (!loggedUser.emailVerified) {
          alert("Please give a Verified Email");
        }
        form.reset("");
        console.log(loggedUser);

        showEmailVerification(result.user).then((result) => {
          alert("Please Verify Your Gmail");
        });
        setSuccess("success");
      })
      .catch((error) => setError(error.message));
  };

  const googleSign = () => {
    googleSignEmailPass()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("SuccessFully Logged in");
      })

      .catch((error) => {
        setError(error);
      });
  };
  const githubSign = () => {
    gitHubProviderEmailPass()
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setSuccess("SuccessFully Logged in");
        Navigate(from, { replace: true });
      })

      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <div className="hero min-h-screen w-full bg-base-200">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleRegister}>
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Name</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Your Name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Your Photo</span>
                  </label>
                  <input
                    type="text"
                    name="photo"
                    required
                    placeholder="Your Photo"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="email"
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
                    required
                    placeholder="password"
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
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>

                <p className="text-danger">{error}</p>
                <p>{success}</p>

                <h5 className="mt-4 text-center">
                  Already Have an account ?
                  <Link to="/login" className="text-danger">
                    Login
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

export default Register;
