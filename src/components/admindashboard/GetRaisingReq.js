//import useState,useEffect
import React, { useState, useEffect } from "react";
//import useSelector
import { useSelector } from "react-redux";
//import axios
import axios from "axios";
//import useNavigate
import { useNavigate } from "react-router-dom";

function GetRaisingReq() {
  //get userObj from loginSlice
  const { userObj } = useSelector((state) => state.login);
  // let {state}=useLocation()
  console.log(userObj)
  //get token
  const token = sessionStorage.getItem("token");
  //navigate
  const navigate = useNavigate();
  //set the state
  const [request, setRequest] = useState([]);
  const [error, setError] = useState(null);


  //get Users
  const getRequests = async () => {
    //check Token
    if (token === null) {
    //navigate to login
      navigate("/login");
    } else {
      try {
        //get request
        let response = await axios.get(
          "http://localhost:2828/admin-api/admin/project/raising-request",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log(response);
        //check the statuscode
        if (response.status === 200) {
          //set the project
          setRequest(response.data.payload);
        }
      } catch (err) {
        setError(err);
      }
    }
  };
  //useEffect
  useEffect(() => {
    getRequests();
  }, []);

  
     //if error
  if (error) {
    return <div className="text-center">{error}</div>;
  }

  return (
    <div className="text-center">
      <p>Raising Requests</p>
      <table className="table table-bordered">
        <thead>
          <tr className="text-primary">
            <th>GDO Id</th>
            <th>project Id</th>
            <th>Request Description</th>
          </tr>
        </thead>
        <tbody>
          {request.length && request.map((item, index) => (
            <tr key={index}>
              <td>{item.gdoId}</td>
              <td>{item.projectId}</td>
              <td>{item.requestDescription}</td>
           
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
//export
export default GetRaisingReq;







