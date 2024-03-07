"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SideBar from '../../components/sideBar/sideBar'
import PopModal from '../../components/popModal/popModal'
import { addTlEntry, getTlEntries } from '../../redux/api/tl'
import TableBody from '../../components/tableBody/tableBody'
import NavBar from '../../components/navBar/navBar'


const TlDashboard = () => {

    const data = useSelector(state => state.data);


    const inputModal = {
        'timeStamp': "Time Stamp",
        'date': "Date",
        'customerName': "Customer Name",
        'gameName': "Game Name",
        'amount': "Amount",
        'accountName': "Account Name",
        'remark': "Remarks"
    }

    const sideBarMenu = {

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
        dispatch(addTlEntry(data))
    };

    useEffect(() => {
        dispatch(getTlEntries())
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
export default TlDashboard