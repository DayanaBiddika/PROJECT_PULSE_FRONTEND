//import app.css
import './App.css';
//import createBrowser,RouterProvider
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
//import Rootlayout
import RootLayout from './components/RootLayout';
//import Home
import Home from './components/home/Home';
//Import register
import Register from './components/register/Register';
//import login
import Login from './components/login/Login';
//import forget password
import ForgotPassword from './components/forgotPassword/ForgotPassword';
//import reset password
import ResetPassword from './components/resetPassword/ResetPassword';
//import gdo dashboard
import GdoDashboard from './components/dashboard/GdoDashboard';
//import admin dashboard
import AdminDashboard from './components/admindashboard/AdminDashboard';
//import project manager dashboard
import ProjectManager from './components/projectmanager/ProjectManager';
//import all users
import AllUsers from './components/superadmin/AllUsers';
//import role mapping
import RoleMapping from './components/superadmin/RoleMapping';
//import super admin
import SuperAdmin from './components/superadmin/SuperAdmin';
//import create project
import CreateProject from './components/admindashboard/CreateProject';
//import get projects
import GetProjects from './components/admindashboard/GetProjects';
//import assign project
import AssignProject from './components/dashboard/AssignProject';
//import project
import Project from './components/dashboard/Project';
//import raising resource
import RaisingResource from './components/dashboard/RaisingResource';
//import get projects by project manager
import GetProjectsPm from './components/projectmanager/GetProjectsPm';
//import updateproject by admin
import UpdateProject from './components/admindashboard/UpdateProject';
//import projectupdates
import ProjectUpdates from './components/projectmanager/ProjectUpdates';
//import concern
import Concern from './components/projectmanager/Concern'
//import get projects by id
import GetProjectsById from './components/admindashboard/GetProjectsById'
//import delete project
import DeleteProject from './components/admindashboard/DeleteProject'
//import get concerns
import GetConcerns from './components/admindashboard/GetConcerns';
//import get raising request
import GetRaisingReq from './components/admindashboard/GetRaisingReq';
//import get specific project
import GetSpecificProject from './components/projectmanager/GetSpecificProject';
//import get project id
import GetProjectId from './components/dashboard/GetProjectId';

import ErrorPage from './components/ErrorPage';


function App() {
  const browserRouterObj=createBrowserRouter([
    {
      path:'/',
      element:<RootLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/register',
          element:<Register/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
        path:'/forgot-password',
        element:<ForgotPassword/>
        },
        {
          path:'/reset-password',
          element:<ResetPassword/>
        },
        {
          path:'gdo-dashboard',
          element:<GdoDashboard/>,
          children:[
            {
              path:"assign-team",
              element:<AssignProject/>

            },
            {
              path:"projects/:userId",
              element:<Project/>
            },
            {
              path:"resource-request",
              element:<RaisingResource/>
            },
            {
              path:'project-by-id',
              element:<GetProjectId/>
            }
          ]
        },
        {
          path:'projectmanager-dashboard',
          element:<ProjectManager/>,
          children:[
            {
              path:"project-update",
              element:<ProjectUpdates/>
            },
            {
              path:"",
              element:<GetProjectsPm/>
            },
            {
              path:'concerns',
              element:<Concern/>
            },
            {
              path:'project',
              element:<GetSpecificProject/>
            }
          ]
        },
        {
          path:'admin-dashboard',
          element:<AdminDashboard/>,
          children:[
            {
              path:"create-project",
              element:<CreateProject/>
            },
            {
              path:"",
              element:<GetProjects/>
            },
            {
              path:'update-project',
              element:<UpdateProject/>
            },
            {
              path:'projects',
              element:<GetProjectsById/>
            },
            {
              path:'delete-project',
              element:<DeleteProject/>
            },
            {
              path:'get-concerns',
              element:<GetConcerns/>
            },
            {
              path:'get-request',
              element:<GetRaisingReq/>
            }
          ]
        },
        {
          path:'superadmin-dashboard',
          element:<SuperAdmin/>,
          children:[
            {
              path:'',
              element:<AllUsers/>
            },
            {
              path:'assign-role',
              element:<RoleMapping/>
            }
          ]
        }
      ]
    }
  ])
  return (
    <div className="text-center">
          
      <RouterProvider router={browserRouterObj}/>
    </div>
  );
}

export default App;
