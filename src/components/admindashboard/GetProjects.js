//import useState,useEffect
import React, { useState, useEffect } from "react";
//import useSelector
import { useSelector } from "react-redux";
//import axios
import axios from "axios";
//import useNavigate
import { useNavigate } from "react-router-dom";

function GetProjects() {
  //get userObj from loginSlice
  const { userObj } = useSelector((state) => state.login);
  // let {state}=useLocation()
  console.log(userObj)
  //get token
  const token = sessionStorage.getItem("token");
  //navigate
  const navigate = useNavigate();
  //set the state
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);


  //get Users
  const getProjects = async () => {
    //check Token
    if (token === null) {
    //navigate to login
      navigate("/login");
    } else {
      try {
        //get request
        let response = await axios.get(
          "http://localhost:2828/admin-api/admin/portfolioDashboard",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log(response);
        //check the statuscode
        if (response.status === 200) {
          //set the project
          setProjects(response.data.payload);
        }
      } catch (err) {
        setError(err);
      }
    }
  };
  //useEffect
  useEffect(() => {
    getProjects();
  }, []);

  //navigate to update project
  const navigateToUpdateProject = (projectObj) => {
    navigate("update-project", { state: projectObj });
  };

  const navigateToDeleteProject=(projectObj)=>{
    navigate(`delete-project`,{state:projectObj})
  }

  const navigateToDetailedView=(projectObj)=>{
    navigate(`projects`,{state:projectObj})
  }

  const navigateToCreateProject=()=>{
    navigate('create-project')
  }

  //navigate to get raising request
  const getRequest=()=>{
    navigate('get-request')
  }

  
     //if error
  if (error) {
    return <div className="text-center">{error}</div>;
  }

  return (
    <div className="text-center">
      <p>Projects Under Admin</p>
      <table className="table table-bordered">
        <thead>
          <tr className="text-primary">
            <th>Project Name</th>
            <th>Client</th>
            <th>Client Account Manager</th>
            <th>Status of Project</th>
            <th>Start Date</th>
            <th>End Date</th>
            <th>Overall Project Fitness Indicator</th>
            <th>Domain</th>
            <th>Type of Project</th>
          </tr>
        </thead>
        <tbody>
          {projects.length && projects.map((item, index) => (
            <tr key={index}>
              <td>{item.projectName}</td>
              <td>{item.client}</td>
              <td>{item.clientAccountManager}</td>
              <td>{item.statusOfProject}</td>
              <td>{item.startDate}</td>
              <td>{item.endDate}</td>
              <td>{item.overAllProjectFitnessIndicator}</td>
              <td>{item.domain}</td>
              <td>{item.typeOfProject}</td>
              <td>
                {/* button */}
              <button
                          className="btn btn-warning btn-sm"
                          onClick={() => navigateToUpdateProject(item)}
                        >
                          Update Project
                        </button>
              </td>
              <td>
                {/* button */}
              <button
                          className="btn btn-warning btn-sm"
                          onClick={() => navigateToDeleteProject(item)}
                        >
                          Delete Project
                        </button>

              </td>
              <td>
                {/* button */}
              <button
                          className="btn btn-warning btn-sm"
                          onClick={() => navigateToDetailedView(item)}
                        >
                          Detailed Project
                        </button>

              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-success flex-inline-justify-content-right" onClick={navigateToCreateProject}>create project</button>
      <div class="container">
            <div class="row">
        <div class="col-md-12 d-flex justify-content-md-end">
       <button class="btn btn-warning mb-5" onClick={getRequest}>Resource Request</button>
    </div>
  </div>
</div>
    </div>
  );
}
//export
export default GetProjects;







