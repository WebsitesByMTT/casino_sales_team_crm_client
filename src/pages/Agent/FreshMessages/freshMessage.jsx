"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SideBar from '../../../components/sideBar/sideBar'
import PopModal from '../../../components/popModal/popModal'
import TableBody from '../../../components/tableBody/tableBody'
import { freshMessageEntryApi, freshMessageGetApi } from '../../../redux/api/agent'
import NavBar from '../../../components/navBar/navBar'


const FreshMessage = () => {


    const data = useSelector(state => state.data);


    const inputModal = {
        'agentName': "Agent Name",
        'time': "Time Stamp",
        'date': "Date",
        'systemNumber': "Game Name",
        'accountName': " Account Name",
        'recieverId': "Player ID/Reciever Facebook ID",
        'remark': "Remark"
    }

    const sideBarMenu = {
        '/firstDepositeEntry': "First Deposite Entry",
        '/freshMessage': "Fresh Message",
        '/freeToPlay': "Free To Play"

    }

    console.log("daata", data)
    const dispatch = useDispatch()
    const [pageBody, setPageBody] = useState(null)
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModalCallBack = () => {
        setIsOpen(true);
    };

    const newEntry = (data) => {
        setIsOpen(false);
        dispatch(freshMessageEntryApi(data))
    };

    useEffect(() => {
        dispatch(freshMessageGetApi())
    }, [])

    return (
        <>
            <div className='dashboardContainer'>
            <div className='dashboardContainerTop'>
                <NavBar/>

                </div>
                <div className='dashboardContainerBottom'>
                    <div className='dashboardContainerBottomLeft'>
                        <SideBar sideBarMenu={sideBarMenu} openModalCallBack={openModalCallBack} />
                    </div>

                    {isOpen && <PopModal newEntry={newEntry} inputModal={inputModal} closeModal={closeModal} />}
                    <div className='dashboardContainerBottomRight'>


                        <TableBody tableHeaders={inputModal} data={data} />

                    </div>
                </div>
            </div>
        </>
    )


}
export default FreshMessage