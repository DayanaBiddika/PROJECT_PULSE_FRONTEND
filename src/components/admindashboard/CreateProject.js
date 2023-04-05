import React from 'react';
//import useForm 
import { useForm } from 'react-hook-form';
//import axios
import axios from 'axios';
//import useLocation,useNavigate
import {useLocation, useNavigate} from 'react-router-dom'


function AdminDashboard() {
  //useForm which returns the object
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  //navigate
    let navigate=useNavigate()
    //getting state
    let {state}=useLocation()

  const onSubmit = async (data) => {
    try {
      //get token from session storage
      const adminToken = sessionStorage.getItem('token');
      //check the token exists or not
      if (!adminToken) {
        console.error('Admin token not found');
        return;
      }
       //post request
      await axios.post('http://localhost:2828/admin-api/admin/project', data, {
        // headers which checks the token
        headers: {
          Authorization: `Bearer ${adminToken}`
        }
      });
      console.log('Project created', data);
      reset();
    } catch (error) {
      console.error(error);
    }
  };
 //navigate to the getProjects
  // const getProjects=()=>{
  //   navigate('get-projects')
  // }

  

  
  return (
    <div className="text-center mx-auto">
      <h1 className="text-center">Create Project</h1>
      <div className="row">
          <div className="col-12 col-sm-8 col-md-6 mx-auto">
      {/* form submission */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* projectId */}
        <div className="mb-3">
          <label htmlFor="projectId">Project Id</label>
          <input type="number" name="projectId" id="projectId" {...register("projectId", { required: true })} className="form-control" />
          {/* error */}
          {errors.projectId && <span>This field is required</span>}
        </div>
        <br/>
        {/* project name */}
        <div className="mb-3">
          <label htmlFor="projectName">Project Name</label>
          <input type="text" name="projectName" id="projectName" {...register("projectName", { required: true })} className="form-control"/>
          {/* error */}
          {errors.projectName && <span>This field is required</span>}
        </div>
        <br/>
          {/* client */}
        <div className="mb-3">
          <label htmlFor="client">Client</label>
          <input type="number" name="client" id="client" {...register("client", { required: true })} className="form-control"/>
          {/* error */}
          {errors.client && <span>This field is required</span>}
        </div>
        <br/>
            {/* gdoId */}
        <div className="mb-3">
          <label htmlFor="gdoId">GDO Id</label>
          <input type="number" name="gdoId" id="gdoId" {...register("gdoId", { required: true })} className="form-control"/>
          {/* error */}
          {errors.gdoId && <span>This field is required</span>}
        </div>
        <br/>
           {/* project manager */}
        <div className="mb-3">
          <label htmlFor="projectManager">Project Manager</label>
          <input type="number" name="projectManager" id="projectManager" {...register("projectManager", { required: true })} className="form-control"/>
          {/* error  */}
          {errors.projectManager && <span>This field is required</span>}
        </div>
        <br/>
           {/* hr manager */}
        <div className="mb-3">
          <label htmlFor="hrManager">HR Manager</label>
          <input type="number" name="hrManager" id="hrManager" {...register("hrManager", { required: true })} className="form-control"/>
          {/* error */}
          {errors.hrManager && <span>This field is required</span>}
        </div>
        <br/>
         {/* client adcount manager */}
        <div className="mb-3">
          <label htmlFor="clientAccountManager">Client Account Manager</label>
          <input type="text" name="clientAccountManager" id="clientAccountManager" {...register("clientAccountManager", { required: true })} className="form-control"/>
          {/* error */}
          {errors.clientAccountManager && <span>This field is required</span>}
        </div>
        <br/>
           {/* status of project */}
        <div className="mb-3">
          <label htmlFor="statusOfProject">Status</label>
          <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm "
                id="statusOfProject"
                {...register("statusOfProject" ,{required:true})}
              >
                <option defaultChecked>--- Status Of Project ---</option>
                <option value="sales">Sales</option>
                <option value="pre-sales">Pre Sales</option>
                <option value="client sign off">Client Sign Off</option>
                <option value="in progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="paused">Paused</option>
                <option value="deferred">Deferred</option>
              </select>
          {/* <input type="text" name="statusOfProject" id="statusOfProject" {...register("statusOfProject", { required: true })} className="form-control"/> */}
          {/* error */}
          {errors.statusOfProject && <span>This field is required</span>}
        </div>
        <br/>
          {/* start date */}
        <div className="mb-3">
          <label htmlFor="startDate">Start Date</label>
          <input type="date" name="startDate" id="startDate" {...register("startDate", { required: true })} className="form-control"/>
          {/* error */}
          {errors.startDate && <span>This field is required</span>}
          </div>
          <br/>
           {/* end date */}
          <div className="mb-3">
          <label htmlFor="endDate">End Date</label>
          <input type="date" name="endDate" id="endDate" {...register("endDate", { required: true })} className="form-control"/>
          {/* error */}

          {errors.endDate && <span>This field is required</span>}
          </div>
          <br/>
          {/* project fitness */}
          <div className="mb-3">
          <label htmlFor="overAllProjectFitnessIndicator">overAllProjectFitnessIndicator</label>
          <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm "
                id="overAllProjectFitnessIndicator"
                {...register("overAllProjectFitnessIndicator" ,{required:true})}
              >
                <option defaultChecked>--- Select Indicator ---</option>
                <option value="amber">Amber</option>
                <option value="green">Green</option>
                <option value="red">Red</option>
              </select>
          {/* <input type="text" name="overAllProjectFitnessIndicator" id="overAllProjectFitnessIndicator" {...register("overAllProjectFitnessIndicator", { required: true })} className="form-control"/> */}
          {/* error */}
          {errors.overAllProjectFitnessIndicator && <span>This field is required</span>}
          </div>
          <br/>
           {/* domain */}
          <div className="mb-3">
          <label htmlFor="domain">Domain</label>
          <input type="text" name="domain" id="domain" {...register("domain", { required: true })} className="form-control" />
            {/*error  */}
          {errors.domain && <span>This field is required</span>}
          </div>
          <br/>
           {/* type of project */}
          <div className="mb-3">
          <label htmlFor="typeOfProject">Type of project</label>
          <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm "
                id="typeOfProject"
                {...register("typeOfProject" ,{required:true})}
              >
                <option defaultChecked>--- Select Type of Project ---</option>
                <option value="Development">Development</option>
                <option value="DevOps">DevOps</option>
                <option value="Test Automation">Test Automation</option>
                <option value="Performance Testing">Performance Testing</option>
                <option value="Security">Security</option>
                <option value="Sustenance Engineering">Sustenance Engineering</option>
                <option value="Mobility">Mobility</option>
                <option value="Storage">Storage</option>
              </select>
          {/* <input type="text" name="typeOfProject" id="typeOfProject" {...register("typeOfProject", { required: true })} className="form-control" /> */}
          {/* error */}
          {errors.typeOfProject && <span>This field is required</span>}
          </div>
          <br/>
          {/* button */}
          <div className="button-container" style={{marginBottom: "20px"}}>
           
          <button className="btn btn-success">Create project</button>
          {/* <button className="btn btn-warning float-end" onClick={getProjects}>Projects under Admin</button> */}
          {/* <button className="btn btn-warning float-end" onClick={getProjectsById}>Specific Project</button> */}
          </div>

        
         
          </form>
          </div>
          </div>
        
          
          </div>
  )}
  //export
  export default AdminDashboard;