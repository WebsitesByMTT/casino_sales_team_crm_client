"use client"
import React, { useEffect, useState } from 'react'
import './tl.css'
import { useDispatch, useSelector } from 'react-redux'
import SideBar from '../../components/sideBar/sideBar'
import NavBar from '../../components/navBar/navBar'


const TlDashboard = () => {

    const pageState = useSelector(state => state.user);
    const dispatch = useDispatch()
    const [pageBody, setPageBody] = useState(null)
    const [isOpen, setIsOpen] = useState(false);


    const closeModal = () => {
        setIsOpen(false);
      };

      
    const getPageComponent = () => {
        // setPageBody(getPageComponentController(pageState))
    }

    useEffect(() => {
     

    }, [])

    useEffect(() => {
        getPageComponent()
    }, [pageState])


    return (
        <>
            <div className='dashboardContainer'>
               
                <div className='dashboardContainerBottom'>
                    <div className='dashboardContainerBottomLeft'>
                        <SideBar />
                    </div>
                    <div className='dashboardContainerBottomRight'>

                    </div>
                </div>
            </div>
        </>
    )
}
export default TlDashboard