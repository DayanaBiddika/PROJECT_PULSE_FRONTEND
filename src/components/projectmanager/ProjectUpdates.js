import React from 'react';
//import useForm
import { useForm } from 'react-hook-form';
//import axios
import axios from 'axios';
//import useNavigate
import {useNavigate} from 'react-router-dom'



function ProjectUpdates() {
  // useForm
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
    let navigate=useNavigate()
   
    //onSubmit
  const onSubmit = async (data) => {
    try {
      // get token
      const projectManagerToken = sessionStorage.getItem('token');
      // check the token
      if (!projectManagerToken) {
        console.error('project manager token not found');
        return;
      }
      // post axios request
      await axios.post('http://localhost:2828/projectManager-api/projectManager/projectUpdates', data, {
        //token verification
        headers: {
          Authorization: `Bearer ${projectManagerToken}`
        }
      });
   
      //reset
      reset();
    } catch (error) {
      console.error(error);
    }
  };


  


  return (
    <div>
      <h2>Project Updates By Project Manager</h2>
      {/* form submit */}
      <div className="container mx-auto">
      <div className="row mx-auto">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
        {/* project id */}
        <div className="form-group">
          <label htmlFor="projectId" className="form-label">Project Id</label>
          <input type="number" name="projectId" id="projectId" {...register("projectId", { required: true })} className="form-control" />
          {errors.projectId && <span>This field is required</span>}
        </div>
        <br/>
        {/* project manager */}
        <div className="form-group">
          <label htmlFor="projectManager" className="form-label">Project Manager</label>
          <input type="number" name="projectManager" id="projectManager" {...register("projectManager", { required: true })} className="form-control"/>
          {errors.projectManager && <span>This field is required</span>}
        </div>

        <br/>
         {/* date */}
        <div className="form-group">
          <label htmlFor="date" className="form-label">Date</label>
          <input type="date" name="date" id="date" {...register("date", { required: true })} className="form-control" />
          {errors.date && <span>This field is required</span>}
        </div>
        <br/>
        {/* status */}
        <div className="form-group">
          <label htmlFor="projectStatusUpdate" className="form-label">Project Status Update</label>
          <input type="projectStatusUpdate" name="projectStatusUpdate" id="projectStatusUpdate" {...register("projectStatusUpdate", { required: true })} className="form-control" />
          {errors.projectStatusUpdate && <span>This field is required</span>}
        </div>
        <br/>
        {/* schedule status */}
        <div className="form-group">
          <label htmlFor="scheduleStatus" className="form-label">Schedule Status</label>
          <select
                className="form-select form-control"
                id="scheduleStatus"
                {...register("scheduleStatus" ,{required:true})}
              >
                <option defaultChecked>--- Select Schedule Status ---</option>
                <option value="Red">Red</option>
                <option value="Amber">Amber</option>
                <option value="Green">Green</option>
                
              </select>
          {/* <input type="scheduleStatus" name="scheduleStatus" id="scheduleStatus" {...register("scheduleStatus", { required: true })} /> */}
          {errors.scheduleStatus && <span>This field is required</span>}
        </div>
        <br/>
        {/* resource status */}
        <div className="form-group">
          <label htmlFor="resourcingStatus" className="form-label">Resourcing Status</label>
          <select
                className="form-select form-control"
                aria-label=".form-select-sm "
                id="resourcingStatus"
                {...register("resourcingStatus" ,{required:true})}
              >
                <option defaultChecked>--- Select Resourcing Status ---</option>
                <option value="Red">Red</option>
                <option value="Amber">Amber</option>
                <option value="Green">Green</option>
                
              </select>
          {/* <input type="resourcingStatus" name="resourcingStatus" id="resourcingStatus" {...register("resourcingStatus", { required: true })} /> */}
          {errors.resourcingStatus && <span>This field is required</span>}
        </div>
        <br/>
        {/* quality status */}
        <div className="form-group">
          <label htmlFor="qualityStatus" className="form-label">Quality Status</label>
          <select
                className="form-select form-control"
                aria-label=".form-select-sm "
                id="qualityStatus"
                {...register("qualityStatus" ,{required:true})}
              >
                <option defaultChecked>--- Select Quality Status ---</option>
                <option value="Red">Red</option>
                <option value="Amber">Amber</option>
                <option value="Green">Green</option>
                
              </select>
          {/* <input type="qualityStatus" name="qualityStatus" id="qualityStatus" {...register("qualityStatus", { required: true })} /> */}
          {errors.qualityStatus && <span>This field is required</span>}
        </div>
        <br/>
        {/* waiting for client */}
        <div className="form-group">
          <label htmlFor="waitingForClient" className="form-label">Waiting For Client</label>
          <select
                className="form-select form-control"
                aria-label=".form-select-sm "
                id="waitingForClient"
                {...register("waitingForClient" ,{required:true})}
              >
                <option defaultChecked>--- Select Waiting for Client ---</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                
                
              </select>
          {/* <input type="waitingForClient" name="waitingForClient" id="waitingForClient" {...register("waitingForClient", { required: true })} /> */}
          {errors.waitingForClient && <span>This field is required</span>}
        </div>
        <br/>
        <div className="button-container" style={{marginBottom: "20px"}}>
          {/* button */}
         <button className="btn btn-success">Project Updates</button>
  
         
         </div>
          </form>
          </div>
          </div>
          </div>
          </div>
  )}
  //export
  export default ProjectUpdates;