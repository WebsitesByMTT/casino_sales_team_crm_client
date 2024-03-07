"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SideBar from '../../../components/sideBar/sideBar'
import PopModal from '../../../components/popModal/popModal'
import TableBody from '../../../components/tableBody/tableBody'
import { accountRecordEntryApi, accountRecordsGetApi } from '../../../redux/api/manager'
import BigBoss from '../../../components/navBar/navBar'
import NavBar from '../../../components/navBar/navBar'


const AccountRecords = () => {

    const data = useSelector(state => state.data);

    const inputModal = {

        'userName': "User Name",
        'password': "Password",
        'status': " Status",
        'fbAccountLink': "Player ID/Reciever Facebook ID",
        'agentNameOfFbAccount': "Agent Name of Fb Account"
    }

    const sideBarMenu = {
        '/acountRecords': "Account Records",
        '/balanceSheet': "Balance Sheet",
        '/coinSheet': "Coin Sheet"

    }

    console.log("daata", data)
    const dispatch = useDispatch()
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
    };

    const openModalCallBack = () => {
        setIsOpen(true);
    };

    const newEntry = (data) => {
        setIsOpen(false);
        dispatch(accountRecordEntryApi(data))
    };

    useEffect(() => {
        dispatch(accountRecordsGetApi())
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
export default AccountRecords