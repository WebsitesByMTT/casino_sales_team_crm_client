"use client"
import React, { useEffect, useState } from 'react'
import './balanceSheet.css'
import { useDispatch, useSelector } from 'react-redux'
import SideBar from '../../../components/sideBar/sideBar'
import PopModal from '../../../components/popModal/popModal'
import TableBody from '../../../components/tableBody/tableBody'
import { balanceSheetEntryApi, balanceSheetGetApi } from '../../../redux/api/manager'
import NavBar from '../../../components/navBar/navBar'


const BalanceSheet = () => {

    const data = useSelector(state => state.data);    


    const inputModal = {
        'employeeName': "Employee Name",
        'designation': "Designation",
        'employeeEmail': "Employee Email",
        'salary': "Salary",
        'incentive': "Incentive",
        'totalSalary': " Total Salary",
        'review': "Review"
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
        dispatch(balanceSheetEntryApi(data))
    };

    useEffect(() => {
        dispatch(balanceSheetGetApi())
    }, [])

    return (
        <>
            <div className='dashboardContainer'>
                <NavBar/>
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
export default BalanceSheet