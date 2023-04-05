//import useState,useEffect
import React, { useState, useEffect } from "react";
//import useSelector
import { useSelector } from "react-redux";
//import axios
import axios from "axios";
//import useNavigate
import { useNavigate } from "react-router-dom";

function GetConcerns() {
  //get userObj from loginSlice
  const { userObj } = useSelector((state) => state.login);
  // let {state}=useLocation()
  console.log(userObj)
  //get token
  const token = sessionStorage.getItem("token");
  //navigate
  const navigate = useNavigate();
  //set the state
  const [concerns, setConcerns] = useState([]);
  const [error, setError] = useState(null);


  //get Users
  const getConcerns = async () => {
    //check Token
    if (token === null) {
    //navigate to login
      navigate("/login");
    } else {
      try {
        //get request
        let response = await axios.get(
          "http://localhost:2828/admin-api/admin/project/get-concerns",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        console.log(response);
        //check the statuscode
        if (response.status === 200) {
          //set the project
          setConcerns(response.data.payload);
        }
      } catch (err) {
        setError(err);
      }
    }
  };
  //useEffect
  useEffect(() => {
    getConcerns();
  }, []);

  
     //if error
  if (error) {
    return <div className="text-center">{error}</div>;
  }

  return (
    <div className="text-center">
      <p>Projects concerns</p>
      <table className="table table-bordered">
        <thead>
          <tr className="text-primary">
            <th>project Id</th>
            <th>project Manager</th>
            <th>concern Description</th>
            <th>concern RaisedBy</th>
            <th>on Date</th>
            <th>severity</th>
            <th>Raised Internally Or Not</th>
            <th>Status Of Concern</th>
            <th>Concern Mitigated On Date</th>
          </tr>
        </thead>
        <tbody>
          {concerns.length && concerns.map((item, index) => (
            <tr key={index}>
              <td>{item.projectId}</td>
              <td>{item.projectManager}</td>
              <td>{item.concernDescription}</td>
              <td>{item.concernRaisedBy}</td>
              <td>{item.onDate}</td>
              <td>{item.severity}</td>
              <td>{item.raisedInternallyOrNot}</td>
              <td>{item.statusOfConcern}</td>
              <td>{item.concernMitigatedOnDate}</td>
           
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
//export
export default GetConcerns;







