"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SideBar from '../../../components/sideBar/sideBar'
import PopModal from '../../../components/popModal/popModal'
import TableBody from '../../../components/tableBody/tableBody'
import { coinSheetEntryApi, coinSheetGetAPi } from '../../../redux/api/manager'
import BigBoss from '../../../components/navBar/navBar'
import NavBar from '../../../components/navBar/navBar'
import ProgressReports from '../../../components/ProgressReport/progressReport'


const CoinSheet = () => {

    const data = useSelector(state => state.data);


    const inputModal = {
        'initialCoin': "Initial Coins",
        'spend': "Spend",
        'remaining': "Remaining",
        'incentive': "Incentive",
    }

    const tableHeaders = {
        'date': "Date",
        'initialCoin': "Initial Coins",
        'spend': "Spend",
        'remaining': "Remaining",
        'incentive': "Incentive",
    }

    const validations = ["initialCoin", "spend", "remaining", "incentive"]

    const xAxis = 'date'
    const yAxis = ["initialCoin"]
    
    const sideBarMenu = {
        '/acountRecords': "Account Records",
        '/balanceSheet': "Balance Sheet",
        '/coinSheet': "Coin Sheet"

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
        dispatch(coinSheetEntryApi(data))
    };

    useEffect(() => {
        dispatch(coinSheetGetAPi())
    }, [])

    return (
        <>
            <div className='dashboardContainer'>
                <div className='dashboardContainerTop'>
                    <NavBar />

                </div>
                <div className='dashboardContainerBottom'>
                    <div className='dashboardContainerBottomLeft'>
                        <SideBar sideBarMenu={sideBarMenu} openModalCallBack={openModalCallBack} />
                    </div>
                    {/* <div onClick={() => setIsOpen(true)}>New Entry</div> */}

                    {isOpen && <PopModal newEntry={newEntry} inputModal={inputModal} closeModal={closeModal} validations={validations} />}
                    <div className='dashboardContainerBottomRight'>

                        {data && <ProgressReports data={data} xAxis={xAxis} yAxis={yAxis} />}
                        <TableBody tableHeaders={tableHeaders} data={data} />

                    </div>
                </div>
            </div>
        </>
    )

}
export default CoinSheet