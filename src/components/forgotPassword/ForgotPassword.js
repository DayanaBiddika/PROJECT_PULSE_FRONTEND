import React from 'react'
//import useForm
import {useForm} from 'react-hook-form'
//import axios
import axios from 'axios'
//import useNavigate
import { useNavigate } from 'react-router-dom'
//import useState
import { useState } from 'react'

//import the image for forgot password
import forgotPassword from '../../images/forgot-password.avif'

const ForgotPassword = () => {
  // useForm returns object
  let {register,handleSubmit,formState:{errors},reset}=useForm()

 let navigate=useNavigate()
  //state for error
  let [error,setError]=useState()
  //state for response error
  let [responseError,setResponseError]=useState("")
  //on submission of form
  const onSubmit=async(userObj)=>{
    // console.log(userObj)
    try{
    // console.log(userObj)
    reset()
    let forgetPassword=await axios.post("http://localhost:2828/user-api/forget-password",userObj);
    if(forgetPassword.status===200){
      
    console.log("forgot password email triggered")
    navigate('/reset-password',{state:userObj.email})

    }
  }catch(err){
    //if error occurs
    console.log("error",err)
    setError(err.message)
    setResponseError(err.response.data.message)
  }
  }
  
  return (
    <div className='mx-auto'>
      <div className="row">
        {/* image */}
      <div className="col-sm-3">
                <img src={forgotPassword} alt="forgot-password" width="300px" height="300px"></img>
            </div>
            <div className="col-sm-9">
          <div className="col-12 col-sm-8 col-md-6 mx-auto">
      <div className='card text-center shadow p-3 m-3'>
      <div className="card-body">
      <p className='text-center mb-4 text-info'>Send Otp</p>
      <hr></hr>
      {
        responseError ? <p className='text-danger fs-2 text-center'>{responseError}</p> :  error && <p className='text-danger fs-2 text-center'>{error}</p>
      }
      {/* onSubmit */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-5 mt-5">
      
        {/* email */}
        <div className="mb-4">
          <label htmlFor="email" className="form-label fw-bold">Email</label>
          <input type="email" {...register('email', {required:"*email required"})} className="form-control"></input>
          {/* validation error msg */}
          {errors.email && <p className="text-danger"><strong>{errors.email?.message}</strong></p>}
        </div>
        <div>
          {/* button */}
        <button className="btn btn-success me-5">Send Otp</button>
        {/* <button type="submit" className="btn btn-warning float-end mt-3" onClick={ResetPassword}>Reset password</button> */}
        </div>
      </form>
      </div>
      </div>
      </div>
      </div>
      </div>

    </div>
  )
}
//export
export default ForgotPassword;



