import React, { useState } from 'react'
import './sideBar.css'
import { useNavigate } from 'react-router-dom';


const SideBar = ({ sideBarMenu, openModalCallBack }) => {

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
        <div onClick={() => setPageState("employeDetails")}>Sales Crm</div>

        {
          sideBarMenu && Object.keys(sideBarMenu).map(key => {

            return <div onClick={() => navigateToPage(key)}>{sideBarMenu[key]}</div>

          })
        }

        <div onClick={() => openModal()}>New Entry</div>
      </div>
    </div>
  )
}

export default SideBar