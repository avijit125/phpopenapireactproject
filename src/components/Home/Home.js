import React from "react";
import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { userInfo, userToken } from "../../features/auth/authSlice";

const Home = () => {
  const history = useHistory();
  const user = useSelector(userInfo);
  const token = useSelector(userToken);
  

  if (Object.keys(user).length === 0 && token === null) {
    history.push("/signup");
  }

  const nameOfUser = () => {
    if (!user.name) {
      return null;
    }

    return user.name;
  };
  const emailOfUser = () => {
    if (!user.email) {
      return null;
    }

    return user.email;
  };
  const phoneOfUser = () => {
    if (!user.phone) {
      return null;
    }

    return user.phone;
  };
  const imgOfUser = () => {
    if (!user.image) {
      return "https://picsum.photos/200/300";
    }

    return user.phone;
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          <div class="card" style={{ width: "18rem" }}>
            <img class="card-img-top" src={imgOfUser()} alt="Card  cap" />
            <div class="card-body">
              <h5 class="card-title">name : {nameOfUser()}</h5>
              <p class="card-text">email : {emailOfUser()}</p>
              <p class="card-text">Phone number: {phoneOfUser()}</p>
              <Link to='/edit' class="btn btn-primary">Edit Profile</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
