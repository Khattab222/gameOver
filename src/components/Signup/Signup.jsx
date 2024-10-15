import React, { useState } from 'react'
import gameimg from '../../assets/images/gamin.jpg';

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Joi from 'joi';


export default function Signup() {
let initialuser = {
  userName:" ",

email:" ",
password:" ",
phone:''

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

  try {
    let {data} = await axios.post('https://online-ecommerce.vercel.app/auth/signup',userdata);

    
    
        setApierroe('');
        setloading(false)
        navigat('/login')
    
  } catch (error) {
    setApierroe(error.response.data.Error);
    setloading(false)
  }



}


// validation 
function validation () {
  const schema = Joi.object({
    userName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{4,10}$')),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    phone:Joi.number().required(),


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
      
    
       <input onChange={getuserinpute} type="text" placeholder='UserName' name='userName' className='border-0  bg-dark text-white form-control my-3 ' />
      
  
      
       
     
       <input onChange={getuserinpute} type="email" placeholder='Email Address' name='email' className='border-0  bg-dark text-white form-control my-3 ' />
       <input onChange={getuserinpute} type="number" placeholder='phone' name='phone' className='border-0  bg-dark text-white form-control my-3 ' />
       <input onChange={getuserinpute} type="password" placeholder='Password' name='password' className='border-0  bg-dark text-white form-control my-3 ' />
        <button  className='btn btn-dark form-control'> {loading? <i className='fas fa-spinner fa-spin'></i>:'Creat Account'} </button>
        </form>
        <small className=''>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</small>
        <hr />
       
        <p>Already a member? <Link to='/login'>Log in</Link></p>
    </div>

   </div>
  )
}
