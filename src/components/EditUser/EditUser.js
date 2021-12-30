import React,{useState} from "react";
import { useSelector } from "react-redux";
import {useDispatch} from 'react-redux';
import { useHistory } from "react-router-dom";
import { fetchEdit,userToken } from "../../features/auth/authSlice";
import authApi from "../../apis/commonApi"
import "./edituser.css";

const EditUser = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const token = useSelector(userToken);
    const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  if(token===null){
      history.push("/login")
  }

  
  const handleEdit = async(name,email,phone,token)=>{
        //dispatch(fetchEdit(name,email,phone,token))
        //history.push('/')
        const response = await authApi.post(`/edit-profile?name=${name}&phone=${phone}&email=${email}`,{ headers: {"Content-Type": 'application/json',"Authorization" : `Bearer ${token}`} })
  console.log(response)
        
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
                      <p>Edit your account</p>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          class="form-control"
                          placeholder=" name"
                        />
                        <label class="form-label">name</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          class="form-control"
                          placeholder=" email address"
                        />
                        <label class="form-label">email</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          class="form-control"
                        />
                        <label class="form-label">phone</label>
                      </div>

                      <div class="text-center pt-1 mb-5 pb-1">
                        <button
                          onClick={() => handleEdit(name,email,phone,token)}
                          class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                        >
                          Edit
                        </button>
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

export default EditUser;
