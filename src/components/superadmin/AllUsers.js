import React from 'react'
//import useNavigate
import { useNavigate } from "react-router-dom";
//import useEffect,useState
import { useEffect, useState } from "react";
//import axios
import axios from "axios";
//import RoleMapping
import RoleMapping from './RoleMapping';

function AllUsers() {
  //state for users
   let [users, setUsers] = useState([]);
   //state for errors
    let [error, setError] = useState("");
    //navigate
    let navigate = useNavigate();
    //get the token
    let token = sessionStorage.getItem("token");
    //get Users
    const getUsers = async () => {
      //check Token
      if (token === null) {
        navigate("/login");
      } else {
        try {
          //get request
          let response = await axios.get(
            "http://localhost:2828/superAdmin-api/superadmin",
            { headers: { Authorization: `Bearer ${token}` } }
          );
          console.log(response);
          //check the status code
          if (response.status === 200) {
            //set users
            setUsers(response.data.payload);
          }
        } catch (err) {
          setError(err);
        }
      }
    };
    //useEffect
    useEffect(() => {
      getUsers();
    }, []);
    //navigate to Assign Role
    const navigateToAssignRole = (userObj) => {
      navigate("assign-role", { state: userObj });
    };
    return (
      <div>
        {/* <div>Super Admin</div> */}
        <div className="container mt-5">
          {error && <p className="text-danger fw-bold text-center">{error}</p>}
          <div className="container">
            <table className="table">
              <thead>
                <th>User Id</th>
                <th>User Name</th>
                <th>Email</th>
                <th>Role</th>
              </thead>
              <tbody>
                {users.map((userObj, index) => {
                  return (
                    <tr key={index}>
                      <td>{userObj.userId}</td>
                      <td>{userObj.username}</td>
                      <td>{userObj.email}</td>
                      <td>{userObj.role}</td>
                      <td>
                        <button
                          className="btn btn-warning btn-sm"
                          onClick={() => navigateToAssignRole(users[index])}
                        >
                          Assign Role
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        </div>
    )
}
//export
export default AllUsers;