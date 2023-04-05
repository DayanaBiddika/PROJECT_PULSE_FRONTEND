//this component is used for routing errors

import React from 'react'
//import useRouteError which is used for routing error and returns error obj
import {useRouteError} from 'react-router-dom'

function ErrorPage() {
    const error=useRouteError()
    console.log(error)

  return (
    <div className='text-center'>
        <h2 className='text-danger'>{error.statusText}</h2>
        <h3 className='text-warning'>{error.data}</h3>
    </div>
  )
}

export default ErrorPage