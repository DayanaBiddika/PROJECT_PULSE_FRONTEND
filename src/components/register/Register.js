import React from 'react'
//import useForm
import {useForm} from 'react-hook-form'
//import axios
import axios from 'axios'
//import useNavigate
import { useNavigate } from 'react-router-dom'
//import useState
import { useState } from 'react'
//import registration image
import registration from '../../images/registration.jpg'


const Register = () => {
  // useForm
  let {register,handleSubmit,formState:{errors},reset}=useForm()
  //navigate
  let navigate=useNavigate()
  //state for error
  let [error,setError]=useState()
  //state for response error
  let [responseError,setResponseError]=useState("")
  //on submission of form
  const onSubmit=async(userObj)=>{
    // console.log(userObj)
    try{
   //reset
    reset()
    //post request
    let res=await axios.post("http://localhost:2828/user-api/user",userObj);
    //check the status code
    if(res.status===201){
      //navigate
    navigate("/login")
    setError("")
    setResponseError("")
    }
  }catch(err){
    //if error occurs
    console.log("error",err)
    //set error
    setError(err.message)
    //set response error
    setResponseError(err.response.data.message)
  }
  }
  
  return (
    <div className='mx-auto'>
      <div className="row">
        {/* image */}
      <div className="col-sm-3">
                <img src={registration} alt="register" width="200px" height="200px"></img>
            </div>
            <div className="col-sm-9">
          <div className="col-12 col-sm-8 col-md-6 mx-auto">
      <div className='card text-center shadow p-3 m-3'>
      <div className="card-body">
      <p className='text-center mb-4 text-info'>Registration form</p>
      <hr></hr>
      {
        responseError ? <p className='text-danger fs-2 text-center'>{responseError}</p> :  error && <p className='text-danger fs-2 text-center'>{error}</p>
      }
      {/* form submit */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-5 mt-5">

      {/* userId */}
      <div className="mb-4">
          <label htmlFor="userId" className="form-label fw-bold">UserId</label>
          <input type="number" {...register('userId', {required:"*userId required"})} className="form-control"></input>
          {/* validation error msg */}
          {errors.userId && <p className="text-danger"><strong>{errors.userId?.message}</strong></p>}
        </div>
        {/* email */}
        <div className="mb-4">
          <label htmlFor="email" className="form-label fw-bold">Email</label>
          <input type="email" {...register('email', {required:"*email required"})} className="form-control"></input>
          {/* validation error msg */}
          {errors.email && <p className="text-danger"><strong>{errors.email?.message}</strong></p>}
        </div>
        {/* username */}
        <div className="mb-4">
          <label htmlFor="username" className="form-label fw-bold">Username</label>
          <input type="text" {...register('username', {required:"*Username required"})} className="form-control"></input>
          {/* validation error msg */}
          {errors.username && <p className="text-danger"><strong>{errors.username?.message}</strong></p>}
        </div>
        {/* password */}
        <div className="mb-4">
          <label htmlFor="password" className="form-label fw-bold">Password:</label>
          <input type="password" {...register('password', {required:"*Password required"})} className="form-control"></input>
          {/* validation error msg */}
          {errors.password && <p className="text-danger"><strong>{errors.password?.message}</strong></p>}
        </div>
        {/* submit button */}
        <div>
          <button type="submit" className="btn btn-success d-block mx-auto">submit</button>
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
export default Register;



