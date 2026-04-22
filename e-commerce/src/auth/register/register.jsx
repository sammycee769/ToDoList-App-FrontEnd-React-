import React from 'react'
import { Link } from 'react-router'
import { FaSignInAlt } from "react-icons/fa";
import "./register.css"; 

const Register = () => {
  return (
    <section className="vh-100 bg-light d-flex align-items-center">
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black rounded-4">
              <div className="card-body p-md-5">
                <div className="row justify-content-center">

                  {/* FORM */}
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                    <p className="text-center h1 fw-bold mb-5 mt-4">
                      Sign up
                    </p>

                    <form className="mx-1 mx-md-4">

                      {/* Name */}
                      <div className="d-flex align-items-center mb-4">
                        <span className="me-3">👤</span>
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Your Name"
                        />
                      </div>

                      {/* Email */}
                      <div className="d-flex align-items-center mb-4">
                        <span className="me-3">📧</span>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your Email"
                        />
                      </div>

                      {/* Password */}
                      <div className="d-flex align-items-center mb-4">
                        <span className="me-3">🔒</span>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Password"
                        />
                      </div>

                      {/* Repeat Password */}
                      <div className="d-flex align-items-center mb-4">
                        <span className="me-3">🔑</span>
                        <input
                          type="password"
                          className="form-control"
                          placeholder="Repeat your password"
                        />
                      </div>

                      {/* Checkbox */}
                      <div className="form-check d-flex justify-content-center mb-4">
                        <input className="form-check-input me-2" type="checkbox" />
                        <label className="form-check-label">
                          I agree to Terms of service
                        </label>
                      </div>

                      {/* Button */}
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary btn-lg">
                          Register
                        </button>
                      </div>
                      <div className="d-flex justify-content-center mt-3">
                      <span>
                        Have an account from edu?{" "}
                        <Link to="/login" className="text-primary fw-bold">
                          Login
                        </Link>
                      </span>
                    </div>
                    </form>
                  </div>

                  {/* IMAGE */}
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center justify-content-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="sample"
                    />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;