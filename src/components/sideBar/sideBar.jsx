import React, { useState } from 'react'
import './sideBar.css'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import CircleIcon from '@mui/icons-material/Circle';

const loginType = {
  "managerSchema": "Manager",
  "tlSchema": "TL",
  "agentSchema": "Agent"
}

const SideBar = ({ sideBarMenu, openModalCallBack }) => {


  const designation = useSelector(state => state.user.designation);

  const navigate = useNavigate()

  console.log("sideMenu", sideBarMenu)

  const openModal = () => {

    openModalCallBack()

  };

  const navigateToPage = (navigateValue) => {
    console.log("navigatePage", navigateValue)

    navigate(navigateValue)
  };



  return (
    <div className='sideBarContainer'>

      <div className='sideBarContainerList'>

        <div className='sideBarTitleContainer'>
          <div className='accountCircle'>
            <CircleIcon style={{ color: "gray", fontSize: "50px" }} />
          </div>
          <div className='sideBarTitleRightContainer'>
            <div>Sales Crm</div>
            <div className='designation'>{loginType[designation]}</div>
          </div>
        </div>

        {
          sideBarMenu && Object.keys(sideBarMenu).map(key => {

            return <div onClick={() => navigateToPage(key)}>{sideBarMenu[key]}</div>

          })
        }

      </div>
      <div className='newEntry' onClick={() => openModal()}>New Entry</div>

    </div>
  )
}

export default SideBar