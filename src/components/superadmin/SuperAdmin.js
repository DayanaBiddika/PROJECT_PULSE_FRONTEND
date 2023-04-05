import React from 'react'
//import outlet
import { Outlet } from "react-router-dom";

function SuperAdmin() {
  return (
    <div>
      <h2 className="text-center">Welcome to Super Admin Dashboard</h2>
        <div>
        <Outlet />
      </div>
    </div>
  )
}

export default SuperAdmin;