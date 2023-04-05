//import useEffect
import React,{useEffect}from 'react'
//import useForm
import {useForm} from 'react-hook-form'
//import useDispatch,useSelector
import {useDispatch,useSelector} from 'react-redux';
//import useNavigate
import { useNavigate } from 'react-router-dom';

//import userLogin from loginslice
import { userLogin } from '../../slices/loginSlice';

//import login
import login from '../../images/undraw_Authentication_re_svpt.png'


function Login() {
  // import userObj
  let {userObj,userLoginStatus,errorMessage,status}=useSelector(state=>state.login)
  console.log(userObj)

  // useForm
  let {register,handleSubmit,formState:{errors},reset}=useForm()

  // useDispatch
  let dispatch=useDispatch()
  // useNavigate 
  let navigate=useNavigate()
  
 //useEffect
  useEffect(()=>{
    // check the status
    if(status==="success"){
      // check the role
      if(userObj.role==="GDO head"){
        // navigate
        navigate(`/gdo-dashboard/projects/${userObj.userId}`)
      }
      //check the role
      else if(userObj.role==="project manager"){
        navigate(`/projectmanager-dashboard`)
      }
      //check the role
      else if(userObj.role==="Admin"){
        navigate('/admin-dashboard')
      }
      //check the role
      else if(userObj.role=="superAdmin"){
        navigate('/superadmin-dashboard')
      }
      else{
        // navigate('/login')
      }
    }
  },[status])
  console.log("Status of login : ",status)

        //onSubmit
      const onSubmit=async(userCredentials)=>{
        // dispatch userLogin credentials from login slice
   dispatch(userLogin(userCredentials))
}


 
  
 //navigate to forgot password
  const ForgotPassword=()=>{
    navigate('/forgot-password')
  }

  

  return (
    <div className='mx-auto'>
      <div className="row">
      <div className="col-sm-3">
                <img src={login} alt="login" width="300px" height="300px"></img>
            </div>
       <div className="col-sm-9">
          <div className="col-12 col-sm-8 col-md-6 mx-auto">
      <div className='card text-center shadow p-3 m-3'>
      <div className="card-body">
      <p className='text-center mb-4 text-info'>Login</p>

         {errorMessage && <p className='text-danger'>{errorMessage}</p>}
      <form onSubmit={handleSubmit(onSubmit)} className="p-5 mt-4">
        {/* userid */}
        <div className="mb-3 mt-4">
          <label htmlFor="userId" className="form-label fw-bold">UserId</label>
          <input type="text" {...register('userId', {required:"*User Id required"})} className="form-control col-md-6"></input>
          {/* validation error msg */}
          {errors.userId && <p className="text-danger"><strong>{errors.Id?.message}</strong></p>}
        </div>
        
        {/* password*/}
        <div className="mb-3 mt-4">
          <label htmlFor="password" className="form-label fw-bold">Password</label>
          <input type="password" {...register('password', {required:"* password required"})} id="password" className="form-control col-md-6"></input>
          {errors.password && <p className="text-danger"><strong>{errors.password?.message}</strong></p>}

        </div>
        {/* submit button */}
        <div>
          <button type="submit" className="btn btn-success d-block mx-auto">submit</button>
        </div>
        <div>
          <button type="button" className="btn btn-warning float-end mt-3" onClick={ForgotPassword}>Forgot password</button>
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
export default Login
