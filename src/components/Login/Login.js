import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom';
import { fetchLogin } from "../../features/auth/authSlice";
import "./login.css";

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async(email,password)=>{
        const params ={
            email,password
        }
        await dispatch(fetchLogin(params))
        history.push('/')
        
  }
  return (
    <section class="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-xl-10">
            <div class="card rounded-3 text-black">
              <div class="row g-0">
                <div class="col-lg-6">
                  <div class="card-body p-md-5 mx-md-4">
                    <div class="text-center">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                        style={{ width: "185px" }}
                        alt="logo"
                      />
                      <h4 class="mt-1 mb-5 pb-1">We are The Lotus Team</h4>
                    </div>

                    <div>
                      <p>Please login to your account</p>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          class="form-control"
                          placeholder=" email address"
                          required
                        />
                        <label class="form-label">email</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          class="form-control"
                          required
                        />
                        <label class="form-label">Password</label>
                      </div>

                      <div class="text-center pt-1 mb-5 pb-1">
                        <button
                          onClick={() => handleLogin(email,password)}
                          class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                        >
                          Log in
                        </button>
                      </div>

                      <div class="d-flex align-items-center justify-content-center pb-4">
                        <p class="mb-0 me-2">Don't have an account?</p>
                        <Link to='/signup' type="button" class="btn btn-outline-danger">
                          Create new
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 class="mb-4">We are more than just a company</h4>
                    <p class="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
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

export default Login;
