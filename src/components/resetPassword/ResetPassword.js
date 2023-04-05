//import useState,useEffect
import React,{useState,useEffect} from 'react';
//import axios
import axios from 'axios';
//import reset password image
import resetPassword from '../../images/reset-password.png';
//import useForm
import { useForm } from 'react-hook-form';
//import useLocation
 import {useLocation} from 'react-router-dom'

function ResetPassword() {
  // useForm
  let {register,handleSubmit,formState:{errors},setValue}=useForm()

  //state and setting the state
  let [error,setError]=useState([])
  //import state
  let {state}=useLocation();
  
   //useEffect
   useEffect(()=>{
    // setting value
     setValue("email",state)
   })

  // Function to handle form submission
  const onSubmit = async (data) => {  

    console.log("------------data",data)
    
    try {
      //post request
      const response = await axios.post(`http://localhost:2828/user-api/reset-password/email/${state}`, {
        password: data.password,
        otp: data.otp,
      });
      console.log("-----------", response)
      
    } catch (error) {
      setError("submit", { message: error.response.data.message });
    }
  };

  return (
    <div className="mx-auto">
      <div className="row">
        {/* image */}
           <div className="col-sm-3">
          <img src={resetPassword} alt="reset-password" width="300px" height="300px"></img>
        </div>
            <div className="col-sm-9">
         <div className="col-12 col-sm-8 col-md-6 mx-auto">
            <div className='card text-center shadow p-3 m-3'>
               <div className="card-body"></div>
      <h2 className="text-center mb-4 text-info">Reset Password</h2>
      {/* form submit */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* email */}
        <div>
          <label htmlFor="email">Email</label>
          <input type="email"{...register("email")}/>
        </div>
        {/* otp */}

        <div>
          <label htmlFor="otp">Otp:</label>
          <input type="text"{...register("otp")}/>
        </div>
        {/* password */}
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password"{...register("password")}/>
        </div>
        {/* button */}
        <button type="submit" className="btn btn-success mt-3">Reset</button>
      </form>
      </div>
      </div>
      </div>
      </div>
      </div>
      
  );
};

export default ResetPassword;




// import React,{useState} from 'react'
// import axios from 'axios';
// import resetPassword from '../../images/reset-password.png'

// function ResetPassword() {
//         const [password, setPassword] = useState('');
//         const [confirmPassword, setConfirmPassword] = useState('');
//         const [otp, setOtp] = useState('');
//         const [message, setMessage] = useState('');
//         const [isError, setIsError] = useState(false);
        
//         // Function to handle form submission
//         const handleSubmit = async (e) => {
//           e.preventDefault();
//           console.log(otp)
//           console.log(password)
//           try {
//             const response = await axios.post(`http://localhost:2828/user-api/reset-password/email/${e.email}`, {
//               password: password,
//               otp: otp,
//             });
//             console.log("-----------",response)
//             setMessage(response.data.message);
//           } catch (error) {
//             setIsError(true);
//             setMessage(error.response.data.message);
//           }
//         };
      
//         return (
//           <div className="mx-auto">
//             <div className="row">
//             <div className="col-sm-3">
//                 <img src={resetPassword} alt="reset-password" width="300px" height="300px"></img>
//             </div>
//             <div className="col-sm-9">
//           <div className="col-12 col-sm-8 col-md-6 mx-auto">
//       <div className='card text-center shadow p-3 m-3'>
//       <div className="card-body">
//             <h2 className="text-center mb-4 text-info">Reset Password</h2>
//             <form onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="password">New Password:</label>
//                 <input
//                   type="password"
//                   id="password"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//               </div>
//               <br/>
//               <div>
//                 <label htmlFor="confirmPassword">Confirm Password:</label>
//                 <input
//                   type="password"
//                   id="confirmPassword"
//                   value={confirmPassword}
//                   onChange={(e) => setConfirmPassword(e.target.value)}
//                 />
//               </div>
//               <br/>
//               <div>
//                 <label htmlFor="otp">Enter OTP:</label>
//                 <input
//                   type="text"
//                   id="otp"
//                   value={otp}
//                   onChange={(e) => setOtp(e.target.value)}
//                 />
//               </div>
//               <br/>
//               <button type="submit">Reset Password</button>
//             </form>
//             {isError ? <div className="error">{message}</div> : <div>{message}</div>}
//           </div>
//           </div>
//           </div>
//           </div>
//           </div>
//           </div>
//         );
//       };
      


// export default ResetPassword