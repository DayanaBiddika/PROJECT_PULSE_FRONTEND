import React, { useState } from "react";

import { Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";

function RoleMapping() {
  console.log("first statement")
  //state from AllUsers
  let { state } = useLocation();
  console.log("--------------------------",state)
  let [error, setError] = useState("");
  let [res, setRes] = useState({});

  console.log(state);

  let navigate = useNavigate();
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  //state for Modal
  let [showModal, setShowModal] = useState(true);
  // const openModal = () => setShowModal(true);
  const closeModal = () => {
    setShowModal(false);
    navigate('/superadmin-dashboard')
  };
  console.log("--------------------------state",state)

  //onFormSubmit
  const onFormSubmit = async (user) => {
    console.log("User Obj",user);
    // console.log("role---------------------",role)
    var selectedOption = document.querySelector("#role");
    let role = selectedOption.value;
    console.log("role,",role)

    let token = sessionStorage.getItem("token");
    try {
      if (!state.userId) {
        throw new Error("User ID is undefined");
      }

      let response = await axios.put(
        `http://localhost:2828/superAdmin-api/user/role`,
        { userId:state.userId, role:role },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      //  console.log(userId)
      console.log("response is ", response);
      if (response.data.payload) {
        console.log("response.data", response.data);
        setRes(response.data);
      } else {
        console.log("throw", response.data.message);
        throw new Error(response.data.message);
      }
    } catch (err) {
      console.log("err is =-----", err.message);

      setError(err.message);
    }

    
    closeModal();
    
  };
  console.log("error", error);
  console.log("res", res);
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
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Assign Role</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Assign Role Form */}

          <form onSubmit={handleSubmit(onFormSubmit)}>
            {/* userId */}
            <div className="mt-3">
              <label htmlFor="userId" className="form-label">
                userId
              </label>
              <input
                type="number"
                {...register("userId",{required:true})}
                className="form-control"
                
                
              />
            </div>
            {/* Role */}
            <div className="mt-3">
              <label htmlFor="role" className="form-label">
                Role
              </label>
              <select
                class="form-select form-select-sm"
                aria-label=".form-select-sm "
                id="role"
                {...register("role" ,{required:true})}
              >
                <option defaultChecked>--- Select Role ---</option>
                <option value="Admin">Admin User</option>
                <option value="GDO head">Gdo Head</option>
                <option value="project manager">Project Manger</option>
                <option value="HR manager">Hr Manger</option>
                <option value="superAdmin">Super Manger</option>
              </select>
            </div>
            <div className="mt-3 float-end">
              <button className="btn btn-success" >
                Assign Role
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="warning" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

//export
export default RoleMapping;