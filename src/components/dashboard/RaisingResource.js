import React from 'react';
//import useForm
import { useForm } from 'react-hook-form';
//import axios
import axios from 'axios';
//import useNavigate
import {useNavigate} from 'react-router-dom'



function RaisingResource() {
  // useForm returns object
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  //useNavigate
    let navigate=useNavigate()

   //function for onSubmit
  const onSubmit = async (data) => {
    try {
      // get the token
      const gdoToken = sessionStorage.getItem('token');
      
    // check the gdo token
      if (!gdoToken) {
        console.error('gdo token not found');
        return;
      }
        //post request
      await axios.post('http://localhost:2828/gdo-api/gdo/resourcingRequest', data, {
        headers: {
          Authorization: `Bearer ${gdoToken}`
        }
      });
      //console log
      console.log('Raising Resource Request', data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Resource Request</h1>
      {/* onSubmit */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          {/* gdo id */}
          <label htmlFor="gdoId">GDO Id</label>
          <input type="number" name="gdoId" id="gdoId" {...register("gdoId", { required: true })} />
          {errors.gdoId && <span>This field is required</span>}
        </div>
        <br/>

        <div className="form-group">
          {/* project id */}
          <label htmlFor="projectId">Project Id</label>
          <input type="number" name="projectId" id="projectId" {...register("projectId", { required: true })} />
          {errors.projectId && <span>This field is required</span>}
        </div>
        <br/>

        <div className="form-group">
          {/* request description */}
          <label htmlFor="requestDescription">Request Description</label>
          <input type="text" name="requestDescription" id="requestDescription" {...register("requestDescription", { required: true })} />
          {errors.requestDescription && <span>This field is required</span>}
        </div>
        <br/>
        {/* button */}
         <button className="btn btn-success">Raise Resource Request</button>
          </form>
          </div>
  )}
  export default RaisingResource;