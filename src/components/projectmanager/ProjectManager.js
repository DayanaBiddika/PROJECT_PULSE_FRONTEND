import React from 'react'
//import outlet
import {Outlet} from 'react-router-dom'

function ProjectManager() {
  return (
    <div>
      <div><Outlet/></div>
      
    </div>
  )
}
//export
export default ProjectManager