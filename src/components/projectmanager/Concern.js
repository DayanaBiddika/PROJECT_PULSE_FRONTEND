import React from 'react';
//import useForm
import { useForm } from 'react-hook-form';
//import axios
import axios from 'axios';
//import useLocation
import {useLocation} from 'react-router-dom'




function Concern() {
  // useForm
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  let {state}=useLocation()

    //onSubmit
  const onSubmit = async (data) => {
    try {
      //get the token
      const projectManagerToken = sessionStorage.getItem('token');
      //check the token if not
      if (!projectManagerToken) {
        console.error('project manager token not found');
        return;
      }
       //post request
      await axios.post(`http://localhost:2828/projectManager-api/projectId/${data.projectId}/raise-project-concern`, data, {
        // token verification
        headers: {
          Authorization: `Bearer ${projectManagerToken}`
        }
      });
    
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  

  return (
    <div>
      <h2>Project Concerns By Project Manager</h2>
      {/* onSubmit */}
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
        {/* concern description */}
        <div className="form-group">
          <label htmlFor="concernDescription" className="form-label">Concern Description</label>
          <input type="text" name="concernDescription" id="concernDescription" {...register("concernDescription", { required: true })} className="form-control" />
          {errors.concernDescription && <span>This field is required</span>}
        </div>

        <br/>

       {/* raised by */}
        <div className="form-group">
          <label htmlFor="raisedBy" className="form-label">Raised By</label>
          <input type="text" name="raisedBy" id="raisedBy" {...register("raisedBy", { required: true })} className="form-control" />
          {errors.raisedBy && <span>This field is required</span>}
        </div>
        <br/>
         {/* raised on date */}
        <div className="form-group">
          <label htmlFor="raisedOnDate" className="form-label">Raised On Date</label>
          <input type="date" name="raisedOnDate" id="raisedOnDate" {...register("raisedOnDate", { required: true })} className="form-control" />
          {errors.raisedOnDate && <span>This field is required</span>}
        </div>
        <br/>
           {/* severity */}
        <div className="form-group">
          <label htmlFor="severity" className="form-label">Severity</label>
          <select
                class="form-select form-control"
                aria-label=".form-select-sm "
                id="severity"
                {...register("severity" ,{required:true})}
              >
                <option defaultChecked>--- Select Severity ---</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
                
              </select>
          {/* <input type="text" name="severity" id="severity" {...register("severity", { required: true })} /> */}
          {errors.severity && <span>This field is required</span>}
        </div>
        <br/>
        {/* concern raised */}
        <div className="form-group">
          <label htmlFor="concernRaisedInternallyOrNot" className="form-label">Concern Raised Inernally Or Not</label>
          <select
                class="form-select form-control"
                aria-label=".form-select-sm "
                id="concernRaisedInternallyOrNot"
                {...register("concernRaisedInternallyOrNot" ,{required:true})}
              >
                <option defaultChecked>--- Select Concern Raised ---</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                
                
              </select>
          {/* <input type="text" name="concernRaisedInternallyOrNot" id="concernRaisedInternallyOrNot" {...register("concernRaisedInternallyOrNot", { required: true })} /> */}
          {errors.concernRaisedInternallyOrNot && <span>This field is required</span>}
        </div>
        <br/>
          {/* status */}
         <div className="form-group">
          <label htmlFor="status" className="form-label">Status</label>
          <select
                class="form-select form-control"
                aria-label=".form-select-sm "
                id="status"
                {...register("status" ,{required:true})}
              >
                <option defaultChecked>--- Select Resourcing Status ---</option>
                <option value="Raised">Raised</option>
                <option value="Remediation Suggested">Remediation Suggested</option>
                <option value="Mitigated">Mitigated</option>
                
              </select>
          {/* <input type="text" name="status" id="status" {...register("status", { required: true })} /> */}
          {errors.status && <span>This field is required</span>}
        </div>
        <br/>
          {/* mitigated on */}
        <div className="form-group">
          <label htmlFor="mitigatedOn" className="form-label">Mitigated On</label>
          <input type="date" name="mitigatedOn" id="mitigatedOn" {...register("mitigatedOn", { required: true })} className="form-control" />
          {errors.mitigatedOn && <span>This field is required</span>}
        </div>
        <br/>
        {/* button */}
        <div className="button-container" style={{marginBottom: "20px"}}>
        <button className="btn btn-success">Project Concerns</button>
        </div>
         
          </form>
          </div>
          </div>
          </div>
          </div>
  )}

  //export
  export default Concern;