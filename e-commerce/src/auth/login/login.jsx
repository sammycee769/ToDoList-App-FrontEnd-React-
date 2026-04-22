import React,{useState} from "react";
import { Link } from "react-router";
import { useLoginMutation } from "../../apis/productApi";
import { useNavigate } from "react-router";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGoogle } from "react-icons/fa";
import "./login.css";

const Login = () => {
  const userDetails ={
    username:"",
    password:""
  }

  const navigate = useNavigate();
  const [error,setError] = useState("");
  const [userProfile,setUserProfile] = useState(userDetails);
  const [login,{userData,isLoading}] = useLoginMutation();
  const handleChange = (event) =>{
    const {name,value} = event.target
    setUserProfile((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  const handleSubmit = async (event) =>{
    event.preventDefault();
    try {
      const {token} = await login(userProfile).unwrap()
      console.log("Login successful:", token);
      if(!token){
        setError("Check your network connection and try again.")
        alert("Login failed. Please check your credentials and try again.");
        return;
      }
      navigate("/products");
    } catch (error) {
      setError(error?.data);
      alert("Login failed. Please check your credentials and try again.");
    }
  }
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">

          {/* Image */}
          <div className="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample"
            />
          </div>

          {/* Form */}
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>

              {/* Social buttons */}
              <div className="d-flex flex-row align-items-center justify-content-center justify-content-lg-start">
                <p className="lead fw-normal mb-0 me-3">Sign in with</p>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <FaFacebookF />
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <FaTwitter />
                </button>

                <button type="button" className="btn btn-primary btn-floating mx-1">
                  <FaLinkedinIn />
                </button>
              </div>

              {/* Divider */}
              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0">Or</p>
              </div>

              {/* Email */}
              <div className="mb-4">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Enter username"
                  name="username"
                  // value={data.username}
                  onChange={handleChange}
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  name="password"
                  // value={data.password}
                  onChange={handleChange}
                />
                {error && <p className="text-danger mt-2">{error}</p>}
              </div>


              {/* Remember + Forgot */}
              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input className="form-check-input me-2" type="checkbox" />
                  <label className="form-check-label">
                    Remember me
                  </label>
                </div>

                <a href="#!" className="text-body">
                  Forgot password?
                </a>
              </div>

              {/* Button */}
              <div className="text-center text-lg-start mt-4 pt-2">
                <button
                  disabled={isLoading}
                  onClick={handleSubmit}
                  type="submit"
                  className="btn btn-primary btn-lg"
                  style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                >{isLoading ? "Logging in..." : "Login"}
                </button>

                <p className="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <Link to="/" className="text-danger">
                    Register
                  </Link>
                </p>
              </div>

            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div className="text-white mb-3 mb-md-0">
          © 2026. All rights reserved.
        </div>

        <div>
          <a href="#!" className="text-white me-4"><FaFacebookF /></a>
          <a href="#!" className="text-white me-4"><FaTwitter /></a>
          <a href="#!" className="text-white me-4"><FaLinkedinIn /></a>
          <a href="#!" className="text-white"><FaGoogle /></a>
        </div>
      </div>
    </section>
  );
};

export default Login;