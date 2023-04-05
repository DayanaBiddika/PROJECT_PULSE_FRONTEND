import React from 'react'
//import NavLink
import {NavLink} from 'react-router-dom';
//import useSelector,useDispatch
import { useSelector, useDispatch } from 'react-redux';

//import clearState
import { clearState } from '../../slices/loginSlice';

function Header() {
  // import status from login slice
    const { status } = useSelector(state => state.login);

    // usedispatch which dispatches the action object to reducer function
  const dispatch = useDispatch();

  //logout
    const logout = () => {
        // Remove token
        sessionStorage.removeItem('token');
        // Clear the state
        dispatch(clearState());
      };
  return (


    <ul className="nav justify-content-center bg-dark p-2">
      {status === 'success' ? (
        // If user is logged in, render Logout link only
        <li className="nav-item">
          <NavLink className="me-5" to="/login" onClick={logout}>
            Logout
          </NavLink>
        </li>
      ) : (
        // If user is not logged in, render Register and Login links only
        <>
        <li className="nav-item">
          <NavLink className="me-5" to ="/">
            Home
          </NavLink>
        </li>
          <li className="nav-item">
            <NavLink className="me-5" to="/register">
              Register
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="me-5" to="/login">
              Login
            </NavLink>
          </li>
        </>
         )
        }
        </ul>
  )}
        //export
        export default Header;