import React, { useState } from "react";

import gameimg from "../../assets/images/gamin.jpg";
import logo from "../../assets/images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Joi from "joi";

export default function Login({getusertoken}) {
  let initialuser = {
    email: "",
    password: "",
  };
  let navigat = useNavigate();
  const [userdata, setuserdata] = useState(initialuser);
  const [apierroe, setApierroe] = useState("");
  const [validError, setvalidError] = useState([]);
  const [loading, setloading] = useState(false);

  // function to get user inpute
  function getuserinpute(e) {
    setApierroe('');
    setvalidError([])
    let newuser = { ...userdata };
    newuser[e.target.name] = e.target.value;
    setuserdata(newuser);
  }

  // api function to send user data
  async function senddatatoapi() {
    let { data } = await axios.post(
      "https://online-ecommerce.vercel.app/auth/login",
      userdata
    );
    console.log(data);

    if (data.message === "login success") {
      localStorage.setItem('usertoken',data.token);
      getusertoken()
      setApierroe("");
      setloading(false);
      navigat("/home");
    } else {
      setApierroe(data.message);
      setloading(false);
    }
  }

  // validation
  function validation() {
    const schema = Joi.object({
      password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{4,10}$")),
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
    });

    return schema.validate(userdata, { abortEarly: false });
  }

  // submit function
  function submit(e) {
    e.preventDefault();
    setloading(true);

    let validRes = validation();

    if (validRes.error) {
      setvalidError(validRes.error.details);
      setloading(false);
    } else {
      setvalidError([]);
      senddatatoapi();
    }
  }

  return (
    <>
      <div className="row shadow g-0 mt-5 ">
        <div className="col-sm-6">
          <img className="w-100" src={gameimg} alt="" />
        </div>
        <div className="col-sm-6  text-center p-5">
          <div>
            <img className="logo" src={logo} alt="" />
          </div>
          <h3>Log in GameOver</h3>
          {apierroe ? <p className="alert alert-danger">{apierroe}</p> : ""}

          {validError.map((err, index) => (
            <p key={index} className="alert alert-danger">
              {err.message}
            </p>
          ))}
          <form onSubmit={submit}>
            <input
            onChange={getuserinpute}
              type="text"
              placeholder="Email"
              name="email"
              className="form-control my-3"
            />
            <input
            onChange={getuserinpute}
              type="password"
              placeholder="Password"
              name="password"
              className="form-control my-3"
            />
            <button className="btn btn-dark form-control">{loading? <i className='fas fa-spinner fa-spin'></i>:'Login'}  </button>
          </form>
          <hr />
          <Link>Forgot Password</Link>
          <p>
            Not a member yet ? <Link to="/">Creat Account</Link>
          </p>
        </div>
      </div>
    </>
  );
}
