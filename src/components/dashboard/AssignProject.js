import React from 'react';
//import useForm
import { useForm } from 'react-hook-form';
//import axios
import axios from 'axios';
//import useNavigate
import {useNavigate} from 'react-router-dom'
//import useSelector
import {useSelector} from 'react-redux'


function AssignProject() {
  //useForm returns object 
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  //userObj
  const { userObj } = useSelector((state) => state.login);
  //useNavigate
    let navigate=useNavigate()

  const onSubmit = async (data) => {
    try {
      //get token
      const gdoToken = sessionStorage.getItem('token');
      //check the token
      if (!gdoToken) {
        console.error('gdo token not found');
        return;
      }
     
      await axios.post('http://localhost:2828/gdo-api/gdo/projectTeam', data, {
        headers: {
          Authorization: `Bearer ${gdoToken}`
        }
      });
      console.log('Team assigned with projects', data);
      //reset
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  //navigate
  // const getProjects=()=>{
  //   navigate(`projects/${userObj.userId}`)
  // }

  //navigate
  

  return (
    <div>

        
      <h1>Assign Team By GDO</h1>
      {/* form submit */}
      <div className="container mx-auto">
      <div className="row mx-auto">
        <div className="col-10 col-sm-8 col-md-6 mx-auto"></div>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto">
        {/* employee id */}
        <div className="justify-content-md-center">
        <div className="form-group">
          <label htmlFor="empId" className="form-label">Employee Id</label>
          <input type="number" name="empId" id="empId" {...register("empId", { required: true })} className="form-control" />
          {errors.empId && <span>This field is required</span>}
        </div>
        <br/>
        {/* projectid */}

        <div className="form-group">
          <label htmlFor="projectId" className="form-label">Project Id</label>
          <input type="number" name="projectId" id="projectId" {...register("projectId", { required: true })} className="form-control"/>
          {errors.projectId && <span>This field is required</span>}
        </div>
        <br/>
          {/* username */}
        <div className="form-group">
          <label htmlFor="username" className="form-label">Username</label>
          <input type="text" name="username" id="username" {...register("username", { required: true })} className="form-control" />
          {errors.username && <span>This field is required</span>}
        </div>
        <br/> 
        {/* role */}

        <div className="form-group">
          <label htmlFor="role" className="form-label">Role</label>
          <input type="text" name="role" id="role" {...register("role", { required: true })} className="form-control"/>
          {errors.role && <span>This field is required</span>}
        </div>
        <br/>
        {/* start date */}

        <div className="form-group">
          <label htmlFor="startDate" className="form-label">Start Date</label>
          <input type="date" name="startDate" id="startDate" {...register("startDate", { required: true })} className="form-control" />
          {errors.startDate && <span>This field is required</span>}
        </div>
        <br/>
        {/* end date */}

        <div className="form-group">
          <label htmlFor="endDate" className="form-label">End Date</label>
          <input type="date" name="endDate" id="endDate" {...register("endDate", { required: true })} className="form-control"/>
          {errors.endDate && <span>This field is required</span>}
        </div>
        <br/>
        {/*status  */}

        <div className="form-group">
          <label htmlFor="status" className="form-label">Status</label>
          <select
                class="form-select form-control"
                aria-label=".form-select-sm "
                id="status"
                {...register("status" ,{required:true})}
              >
                <option defaultChecked>--- Select Status ---</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                
              </select>
          {/* <input type="text" name="status" id="status" {...register("status", { required: true })} /> */}
          {errors.status && <span>This field is required</span>}
        </div>
        <br/>
        {/* billing status */}

        <div className="form-group">
          <label htmlFor="billingStatus" className="form-label">Billing Status</label>
          <select
                class="form-select form-control"
                aria-label=".form-select-sm "
                id="billingStatus"
                {...register("billingStatus" ,{required:true})}
              >
                <option defaultChecked>--- Select Billing Status ---</option>
                <option value="Billed">Billed</option>
                <option value="Buffer">Buffer</option>
                
              </select>
          {/* <input type="text" name="billingStatus" id="billingStatus" {...register("billingStatus", { required: true })} /> */}
          {errors.billingStatus && <span>This field is required</span>}
        </div>
        <br/>
        {/* exposed to customer */}

        <div className="form-group">
          <label htmlFor="exposedToCustomer" className="form-label">Exposed To Customer</label>
          <select
                class="form-select form-control"
                aria-label=".form-select-sm "
                id="exposedToCustomer"
                {...register("exposedToCustomer" ,{required:true})}
              >
                <option defaultChecked>--- Select exposed to customer ---</option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
          {/* <input type="text" name="exposedToCustomer" id="exposedToCustomer" {...register("exposedToCustomer", { required: true })} /> */}
          {errors.exposedToCustomer && <span>This field is required</span>}
          </div>
          <br/>
          {/* allocation type */}

          <div className="form-group">
          <label htmlFor="allocationType" className="form-label">Allocation Type</label>
          <select
                class="form-select form-control"
                aria-label=".form-select-sm "
                id="allocationType"
                {...register("allocationType" ,{required:true})}
              >
                <option defaultChecked>--- Select Type of Project ---</option>
                <option value="Permanent">Permanent</option>
                <option value="Temporary">Temporary</option>
              </select>
          {/* <input type="text" name="allocationType" id="allocationType" {...register("allocationType", { required: true })} /> */}
          {errors.allocationType && <span>This field is required</span>}
          </div>
          <br/>
          
          {/* buttons */}

          <div  className="button-container" style={{marginBottom: "20px"}}>
          <button className="btn btn-success">Assign Team</button>
          {/* <button className="btn btn-waring float-end" onClick={getProjects}>Get Projects</button> */}
          </div>
          </div>
          </form>
          </div>
          </div>
          </div>

         
          
  )}

  //export
  export default AssignProject;