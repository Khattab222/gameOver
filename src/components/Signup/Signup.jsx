import React, { useState } from 'react'
import gameimg from '../../assets/images/gamin.jpg';

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Joi from 'joi';


export default function Signup() {
let initialuser = {
  first_name:" ",
last_name:" ",
email:" ",
password:" ",
age:23

}
let navigat = useNavigate()
const [userdata, setuserdata] = useState(initialuser);
const [apierroe, setApierroe] = useState('');
const [validError, setvalidError] = useState([]);
const [loading, setloading] = useState(false)




// function to get user inpute
function getuserinpute(e) {
  let newuser = {...userdata};
  newuser[e.target.name] = e.target.value;
  setuserdata(newuser);

 
  
}

// api function to send user data 
async function senddatatoapi() {
  let {data} = await axios.post('https://route-movies-api.vercel.app/signup',userdata);
  console.log(data);

  if (data.message ==='success') {
    setApierroe('');
    setloading(false)
    navigat('/')
    
    
    
  }else{
    setApierroe(data.message)
    setloading(false)
  }
}


// validation 
function validation () {
  const schema = Joi.object({
    first_name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    last_name: Joi.string()
        .alphanum()
        .min(3)
        .max(80)
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{4,10}$')),
        email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
        age:Joi.number()
        .min(3)
        .max(50)
        .required(),


  });


  return  schema.validate(userdata,{abortEarly:false});
}

// submit function 
function submit(e) {
  e.preventDefault();
  setloading(true)

  let validRes = validation()

  if (validRes.error) {
    setvalidError(validRes.error.details);
    setloading(false)
    
  }else{
    setvalidError([]);
    senddatatoapi()
  }
 
}





  return (
    <div className="row shadow g-0 mt-5 ">
    <div className="col-sm-6">
      <img className='w-100 ' src={gameimg} alt="" />
    </div>
    <div className="col-sm-6  text-center p-4">
      
        <h3>Creat My Account</h3>
        {apierroe ? <p className="alert alert-danger">{apierroe}</p> : ""}



        {validError.map((err, index) => (
        <p key={index} className="alert alert-danger">
          {err.message}
        </p>
      ))}
        <form onSubmit={submit}>
       <div className="row   ">
       <div className="col-6">
       <input onChange={getuserinpute} type="text" placeholder='First Name' name='first_name' className='border-0  bg-dark text-white form-control my-3 ' />
       </div>
  
       <div className="col-6">
       <input onChange={getuserinpute} type="text" placeholder='Last name' name='last_name' className='border-0  bg-dark text-white form-control my-3 ' />
       </div>
       
       </div>
       <input onChange={getuserinpute} type="email" placeholder='Email Address' name='email' className='border-0  bg-dark text-white form-control my-3 ' />
       <input onChange={getuserinpute} type="number" placeholder='Age' name='age' className='border-0  bg-dark text-white form-control my-3 ' />
       <input onChange={getuserinpute} type="password" placeholder='Password' name='password' className='border-0  bg-dark text-white form-control my-3 ' />
        <button  className='btn btn-dark form-control'> {loading? <i className='fas fa-spinner fa-spin'></i>:'Creat Account'} </button>
        </form>
        <small className=''>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</small>
        <hr />
       
        <p>Already a member? <Link to='/'>Log in</Link></p>
    </div>

   </div>
  )
}
