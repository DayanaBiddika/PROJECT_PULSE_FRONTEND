//import useState,useEffect
import React, { useState, useEffect } from "react";
//import useSelector
import { useSelector } from "react-redux";
//import axios
import axios from "axios";
//import useNavigate
import { useNavigate } from "react-router-dom";

function GetProjectsPm() {
  // userobj
  const { userObj } = useSelector((state) => state.login);
  console.log(userObj)
  //get token
  const token = sessionStorage.getItem("token");
  //navigate
  const navigate = useNavigate();
  //states
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);

  //useEffect
  useEffect(() => {
    //if there is no token
    if (token == null) {
      setError("Please log in to continue");
      // check the role
    } else if (userObj.role !== "project manager") {
      setError("You are not authorized to view this page");

    } else {
      // get request
      axios
        .get(`http://localhost:2828/projectManager-api/${userObj.userId}/portfolioDashboard`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res); // Verify the response data
          // set projects
          setProjects(res.data.payload,()=>{
            navigate('projectmanager-dashboard')
          });
        })
        .catch((err) => {
          console.log(err);
          //set error
          setError("Failed to get projects. Please try again later.");
        });
    }
  }, [token, userObj, navigate]);

  //navigate to detailed view
  const navigateToDetailedView=(projectObj)=>{
    //navigate to project
    navigate(`/projectmanager-dashboard/project`,{state:projectObj})
  }
  //if error
  if (error) {
    return <div className="text-center">{error}</div>;
  }
   //navigate to project update
  const projectUpdate=()=>{
    navigate('project-update')
  }

  return (
    <div className="text-center">
      <p>Projects Under Project Manager</p>
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
              <td>
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
      {/* button */}
      <button className="btn btn-success flex-inline-justify-content-right" onClick={projectUpdate}>project updates</button>
    </div>
  );
}
//export
export default GetProjectsPm;







