import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function DeleteProject() {

    console.log("-------------------------")
  //state from AllUsers
  let { state } = useLocation();
  console.log("state",state)
  let [error, setError] = useState("");
  let [res, setRes] = useState({});

 // console.log(state);

  
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //onFormSubmit
  const onFormSubmit = async (data) => {
    console.log("-------------------")
    try {
       //delete request 
      let response = await axios.delete(
        `http://localhost:2828/admin-api/admin/project/${state.projectId}`,data)
      
    
    console.log("response is ", response);
    if (response.data.payload) {
      console.log("response.data", response.data);
      setRes(response.data)
    } else {
      console.log("throw", response.data.message);
      throw new Error(response.data.message);
    }
   }catch (err) {
    console.log("err is =-----", err.message);
   }
}
  return(
    <div>
      {/* onformsubmit */}
         <form onSubmit={handleSubmit(onFormSubmit)}>
          {/* button */}
        <button type="submit">Delete Project</button>
      </form>
    </div>
  )}
//export
  export default DeleteProject;