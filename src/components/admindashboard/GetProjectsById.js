import React,{useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { userLogin } from '../../slices/loginSlice'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
//import useLocation
import { useLocation } from 'react-router-dom';

function GetProjectsById() {
  //get token
  let token = sessionStorage.getItem('token');
  //usenavigate
  let navigate = useNavigate();
  //userObj
  let {userObj} = useSelector(state=>state.login);
  console.log("userobj",userObj)
  //set the states
  let [top,setTop] = useState({});
  let [details,setDetails]=useState({});
  let [updates,setUpdates] = useState([]);
  let [team,setTeam] = useState([]);
  let [concerns,setConcerns] = useState([]);
  //import state 
  let { state } = useLocation();
  console.log('state in use location',state)

  //useEffect
  useEffect(()=>{
    console.log("use effect renders")
    if(token===null){
      navigate('/login')
    }
    else{
      getData()
    }
  },[])

  const getData = async() =>{
    let result;
     if(userObj.role==="Admin"){
      result=await axios.get(`http://localhost:2828/admin-api/admin/portfolioDashboard/${state.projectId}`,{
        headers: {Authorization: `bearer ${token}`}
      })
    }

    console.log("result...",result)
    if(result.data.payload){
      //setDetails
      setDetails(result.data.payload)
      //setTeam
      setTeam(result.data.payload.employeeProjectDetails);
      //setUpdates
      setUpdates(result.data.payload.projectUpdates)
      //setConcerns
      setConcerns(result.data.payload.projectConcerns)
      //setTop
      setTop(result.data)
      console.log("result in project detail",result.data)
      console.log("details in project detail",state)
    }
  }
  console.log("rendering again")
  console.log("updates",updates)
  

  //navigate to get concerns
  const getConcerns=()=>{
    navigate('/admin-dashboard/get-concerns')
  }
  

  return (
    <div className='text-white'>
      <div className='row ms-5'>
        <div className='col mt-5'>
          <p className='display-4'>Project Details</p>
          <ul class="list-group">
            <li class="list-group-item bg-dark border-white text-white"><b>Project Id : </b>{details.projectid}</li>
            <li class="list-group-item bg-dark border-white text-white"><b>GDO Id : </b>{details.gdoId}</li>
            <li class="list-group-item bg-dark border-white text-white"><b>Project Name : </b>{details.projectName}</li>
            <li class="list-group-item bg-dark border-white text-white"><b>Client : </b>{details.client}</li>
            <li class="list-group-item bg-dark border-white text-white"><b>Project Manager : </b>{details.projectManager}</li>
            <li class="list-group-item bg-dark border-white text-white"><b>HR Manager : </b>{details.hrManager}</li>
            <li class="list-group-item bg-dark border-white text-white"><b>Client Account Manager : </b>{details.clientAccountManager}</li>
            <li class="list-group-item bg-dark border-white text-white"><b>Project Status : </b>{details.statusOfProject}</li>
            <li class="list-group-item bg-dark border-white text-white"><b>Project Start Date : </b>{details.startDate}</li>
            <li class="list-group-item bg-dark border-white text-white"><b>Project End Date : </b>{details.endDate}</li>
            <li class="list-group-item bg-dark border-white text-white"><b>Project Fitness Indicator : </b>{details.overAllProjectFitnessIndicator}</li>
            <li class="list-group-item bg-dark border-white text-white"><b>Project Domain : </b>{details.domain}</li>
            <li class="list-group-item bg-dark border-white text-white"><b>Project Type : </b>{details.typeOfProject}</li>
          </ul>
        </div>
        <div className='col me-5' style={{marginLeft:"100px",marginTop:"120px"}}>
          <div class="card bg-dark border-white text-white" style={{width:"50%"}}>
              <div class="card-body">
                  <div class="row">
                          <div class="h3 font-weight-bold">
                            <p className='display-6'>Project Fitness</p>
                            <div>
                              <h2>{top.projectFitness}</h2>
                            </div>
                          </div>
                  </div>
              </div>
          </div>
          <div class="card mt-5 bg-dark border-white text-white" style={{width:"50%"}}>
              <div class="card-body">
                  <div class="row">
                          <div class="h3 font-weight-bold">
                          <p className='display-6'>Concerns</p>
                            <div>
                              <h2>{top.concernIndicator}</h2>
                            </div>
                          </div>
                  </div>
              </div>
          </div>
          <div class="card mt-5 bg-dark border-white text-white" style={{width:"50%"}}>
              <div class="card-body">
                  <div class="row">
                          <div class="h3 font-weight-bold">
                          <p className='display-6'>Team Members</p>
                            <div>
                              <h2>{top.teamSize}</h2>
                            </div>
                          </div>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <br/>
      <br/>
      <p className='display-4'>Project Updates</p>
      
      <table class="table table-bordered text-black text-center" style={{border:"white"}}>
        <thead className='text-dark' style={{backgroundColor:"#0074B7"}}>
            <tr>
                <th scope="col">Id</th>
              <th scope="col">Project Id</th>
              <th scope="col">Project Manager</th>
              <th scope="col">Date</th>
              <th scope="col">Project Status Update</th>
              <th scope="col">Schedule Status</th>
              <th scope="col">Resourcing status</th>
              <th scope="col">Quality Status</th>
              <th scope="col">Waiting For Client</th>
            </tr>
          </thead>
          <tbody>

          {updates?.map((updateObj,index) => {
            return(<tr>
                {console.log("updateObj",updateObj)}
              <td>{updateObj.id}</td>
              <td>{updateObj.projectId}</td>
              <td>{updateObj.projectManager}</td>
              <td>{updateObj.date}</td>
              <td>{updateObj.projectStatusUpdate}</td>
              <td>{updateObj.scheduleStatus}</td>
              <td>{updateObj.resourcingStatus}</td>
              <td>{updateObj.qualityStatus}</td>
              <td>{updateObj.waitingForClient}</td>
            </tr>)
          })}

          </tbody>
      </table>
      <br/>
      <p className='display-4'>Project Concerns</p>
      <table class="table table-bordered text-black text-center" style={{border:"white"}}>
      <thead className='text-dark' style={{backgroundColor:"#0074B7"}}>
          <tr>
          <th scope="col">Id</th>
            <th scope="col">Project Id</th>
            <th scope="col">Project Manager</th>
            <th scope="col">Concern Description</th>
            <th scope="col">Concern Raised By</th>
            <th scope="col">On Date</th>
            <th scope="col">Severity</th>
            <th scope="col">Raised Internally Or Not</th>
            <th scope="col">Status Of Concern</th>
            <th scope="col">Concern Mitigated On Date</th>
          </tr>
        </thead>
        <tbody>
        {concerns?.map((concernObj,index) => {
        return(<tr>
            <td>{concernObj.id}</td>
            <td>{concernObj.projectId}</td>
            <td>{concernObj.projectManager}</td>
            <td>{concernObj.concernDescription}</td>
            <td>{concernObj.concernRaisedBy}</td>
            <td>{concernObj.onDate}</td>
            <td>{concernObj.severity}</td>
            <td>{concernObj.raisedInternallyOrNot}</td>
            <td>{concernObj.statusOfConcern}</td>
            <td>{concernObj.concernMitigatedOnDate}</td>
          </tr>)
        })}

        </tbody>
      </table>
      <div class="container">
            <div class="row">
        <div class="col-md-12 d-flex justify-content-md-end">
       <button class="btn btn-warning" onClick={getConcerns}>Concerns</button>
    </div>
  </div>
</div>

      <br/>
      <p className='display-4 text-white'>Team Composition</p>
      <table class="table table-bordered text-black text-center" style={{border:"white"}}>
        <thead className='bg-dark text-white border-white'>
          <tr>
            <th scope="col">Emp Id</th>
            <th scope="col">Project Id</th>
            <th scope="col">User Name</th>
            <th scope="col">Role</th>
            <th scope="col">Start Date</th>
            <th scope="col">End Date</th>
            <th scope="col">status</th>
            <th scope="col">billingStatus</th>
            <th scope="col">exposedToCustomer</th>
            <th scope="col">allocationType</th>
          </tr>
        </thead>
        <tbody>
        {team?.map((teamObj,index) => {
        return(<tr>
            <th>{teamObj.empId}</th>
            <th>{teamObj.projectId}</th>
            <td>{teamObj.username}</td>
            <td>{teamObj.role}</td>
            <td>{teamObj.startDate}</td>
            <td>{teamObj.endDate}</td>
            <td>{teamObj.status}</td>
            <td>{teamObj.billingStatus}</td>
            <td>{teamObj.exposedToCustomer}</td>
            <td>{teamObj.allocationType}</td>
          </tr>)
        })}
        </tbody>
      </table>
      </div>
  )
}
//export
export default GetProjectsById;












