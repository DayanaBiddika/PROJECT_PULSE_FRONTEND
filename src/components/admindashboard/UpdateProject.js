import React, { useState,useEffect } from "react";

import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import {useNavigate} from 'react-router-dom'

function UpdateProject() {

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
    setValue,getValues
  } = useForm();

  let navigate=useNavigate()

  //state for Modal
  let [showModal, setShowModal] = useState(true);



  const closeModal = () => {
    setShowModal(false);
    navigate('../')
    
  };

  //onFormSubmit
  const onFormSubmit = async (data) => {
    console.log("-------------------")

       let token = sessionStorage.getItem("token");
    try {
        // console.log("---------------------",formData)
        console.log("projectName",data.projectName)
        console.log("--------------data",data)
      let response = await axios.put(
        `http://localhost:2828/admin-api/admin/project/${state.projectId}`,
        data,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      // console.log(state)

      console.log("response is ", response);
      if (response.data.payload) {
        console.log("response.data", response.data);
        // setFormData({projectId: data.projectId, projectName: data.projectName});
        setRes(response.data)
      } else {
        console.log("throw", response.data.message);
        throw new Error(response.data.message);
      }
    } catch (err) {
      console.log("err is =-----", err.message);

      setError(err.message);
    }

    // closeModal
    closeModal();
  };
  console.log("error", error);
  console.log("res", res);
  
  //useEffect
  useEffect(()=>{
    //setting the values to update the project
      setValue("projectId",state.projectId)
      setValue("projectName",state.projectName)
      setValue("client",state.client)
      setValue("gdoId",state.gdoId)
      setValue("projectManager",state.projectManager)
      setValue("hrManager",state.hrManager)
      setValue("clientAccountManager",state.clientAccountManager)
      setValue("statusOfProject",state.statusOfProject)
      setValue("startDate",state.startDate.split("T")[0])
      setValue("endDate",state.endDate.split("T")[0])
      setValue("overAllProjectFitnessIndicator",state.overAllProjectFitnessIndicator)
      setValue("domain",state.domain)
      setValue("typeOfProject",state.typeOfProject)

  },[])
  return (
    <div>
      <div>
      {Object.keys(error) && (
          <p className="text-danger text-center fw-bold">{error}</p>
        )}
        {Object.keys(res).length && (
          <div className="text-success text-center fw-bold">
            <p>{res.message}</p>
            <p>
              {res.payload[0]}
              <span className="text-dark"> ---- </span>
              {res.payload[1]}
            </p>
          </div>
        )}
      </div>
      
      {/* Modal */}
      <Modal show={showModal} onHide={closeModal} size="lg">
        {/* Modal Header */}
        <Modal.Header closeButton>
          {/* Modal Title */}
          <Modal.Title>Update Project</Modal.Title>
          
        </Modal.Header>
        {/* Modal body */}
        <Modal.Body>
          
           {/* onSubmit */}
          <form onSubmit={handleSubmit(onFormSubmit)}>
            <div className="container">
              <div className="row row-cols-2">
              {/* projectId */}
            <div className="mt-3 col-12 col-md-6">
              <label htmlFor="projectId" className="form-label">
                projectId
              </label>
              <input
                type="number"
                {...register("projectId")}
                className="form-control"
                
              />
            </div>
           {/* project name */}
            <div className="mt-3 col-12 col-md-6">
              <label htmlFor="projectName" className="form-label">
                Project Name
              </label>
              <input
                type="text"
                {...register("projectName")}
                className="form-control"
              />
              
            </div>
            {/* client */}
            <div className="mt-3 col-12 col-md-6">
              <label htmlFor="client" className="form-label">
                client
              </label>
              <input
                type="number"
                {...register("client")}
                className="form-control"
              />
              
            </div>
            {/* gdo id */}
            <div className="mt-3 col-12 col-md-6">
              <label htmlFor="gdoId" className="form-label">
                gdo Id
              </label>
              <input
                type="number"
                {...register("gdoId")}
                className="form-control"
              />
              
            </div>
            {/* project manager */}
            <div className="mt-3 col-12 col-md-6">
              <label htmlFor="projectManager" className="form-label">
                Project Manager
              </label>
              <input
                type="number"
                {...register("projectManager")}
                className="form-control"
              />
              
            </div>
            {/* hr manager */}
            <div className="mt-3 col-12 col-md-6">
              <label htmlFor="hrManager" className="form-label">
                HR Manager
              </label>
              <input
                type="text"
                {...register("hrManager")}
                className="form-control"
              />
              
            </div>
            {/* client account manager */}
            <div className="mt-3 col-12 col-md-6">
              <label htmlFor="clientAccountManager" className="form-label">
                Client Account Manager
              </label>
              <input
                type="text"
                {...register("clientAccountManager")}
                className="form-control"
              />
              
            </div>
            {/* status of project */}
            <div className="mt-3 col-12 col-md-6">
              <label htmlFor="statusOfProject" className="form-label">
                Status
              </label>
              <input
                type="text"
                {...register("statusOfProject")}
                className="form-control"
              />
              
            </div>
            {/* start date */}
            <div className="mt-3 col-12 col-md-6">
              <label htmlFor="startDate" className="form-label">
                Start Date
              </label>
              <input
                type="date"
                {...register("startDate")}
                className="form-control"
              />
              
            </div>
            {/* end date */}
            <div className="mt-3 col-12 col-md-6">
              <label htmlFor="endDate" className="form-label">
                End Date
              </label>
              <input
                type="date"
                {...register("endDate")}
                className="form-control"
              />
              
            </div>
            {/* project fitness */}
            <div className="mt-3 col-12 col-md-6">
              <label htmlFor="overAllProjectFitnessIndicator" className="form-label">
                Fitness Indicator
              </label>
              <input
                type="text"
                {...register("overAllProjectFitnessIndicator")}
                className="form-control"
              />
              
            </div>
            {/* domain */}
            <div className="mt-3 col-12 col-md-6">
              <label htmlFor="domain" className="form-label">
                Domain
              </label>
              <input
                type="text"
                {...register("domain")}
                className="form-control"
              />
              
            </div>
            {/* type of project */}
            <div className="mt-3 col-12 col-md-6">
              <label htmlFor="typeOfProject" className="form-label">
                Type of project
              </label>
              <input
                type="text"
                {...register("typeOfProject")}
                className="form-control"
              />
              
            </div>

            <div className="mt-3 float-end">
              {/* button */}
              <button className="btn btn-success" type="submit">
                Update Project
              </button>
            </div>
            </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          {/* close modal */}
          <Button variant="warning" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
//export
export default UpdateProject;