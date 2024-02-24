import React from 'react'
import './sideBar.css'
import { useDispatch } from 'react-redux'
import { setPageState as setPageStateStore } from '@/app/redux/reducers/projectReducer'


const SideBar = () => {


  const dispatch = useDispatch();

  const setPageState=(pageState)=>{
    dispatch(setPageStateStore(pageState))
  }

  return (
    <div className='sideBarContainer'>
      <div className='sideBarContainerList'>
         <div onClick={()=>setPageState("employeDetails")}>Employee Details</div>
         <div onClick={()=>setPageState("projects")}>Projects</div>
         <div onClick={()=>setPageState("projectReports")}>Project Reoprts</div>
      </div>
    </div>
  )
}

export default SideBar