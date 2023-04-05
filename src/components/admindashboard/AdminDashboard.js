//import react
import React from 'react'
//import Outlet
import { Outlet } from "react-router-dom";

function AdminDashboard() {
  return (
    <div>
        <div>
          {/* placeholder which replace the respective component */}
        <Outlet />
      </div>
    </div>
  )
}
//export
export default AdminDashboard;