import React from 'react';
//import outlet
import {Outlet} from 'react-router-dom'

function GdoDashboard() {
  return (
    <div>
      {/* outlet which is a placeholder */}
      <Outlet />
    </div>
  )
}

export default GdoDashboard
