//import useState,useEffect
import React, { useState, useEffect } from "react";
//import useSelector
import { useSelector } from "react-redux";
//import axios
import axios from "axios";
//import useNavigate
import { useNavigate, useParams } from "react-router-dom";

function Project() {
  //import userObj
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
    //check the token 
    if (token == null) {
      // error message
      setError("Please log in to continue");
      // check the role
    } else if (userObj.role !== "GDO head") {
      // set this message
      setError("You are not authorized to view this page");

    } else {
      // get request
      axios
        .get(`http://localhost:2828/gdo-api/${userObj.userId}/portfolioDashboard `, {
          // token verification
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res); // Verify the response data
          //set projects
           setProjects(res.data.payload, () => {
            // navigate to gdo-dashaboard
            navigate("gdo-dashboard");
           });
        })
        .catch((err) => {
          console.log(err);
          setError("Failed to get projects. Please try again later.");
        });
    }
  }, [token, userObj, navigate]);

  //navigate to detailed view
  const navigateToDetailedView=(projectObj)=>{
    navigate('../project-by-id',{state:projectObj})
  }
  //navigate to assign team
  const assignTeam=()=>{
    navigate('/gdo-dashboard/assign-team')
  }
   //navigate to resource request
  const resourceRequest=()=>{
    navigate("/gdo-dashboard/resource-request")
  }

  //if error occurs
  if (error) {
    return <div className="text-center">{error}</div>;
  }

  return (
    <div className="text-center">
      <p>Projects</p>
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
                          Update Project
                        </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="btn btn-success" onClick={assignTeam}>Assign Team</button>
      <div className="me-2">
  {/* button */}
        <button className="btn btn-warning float-end" onClick={resourceRequest}>Raise Resource</button>
        </div>
   
    <div></div>
    </div>
  );
}
//export
export default Project;







