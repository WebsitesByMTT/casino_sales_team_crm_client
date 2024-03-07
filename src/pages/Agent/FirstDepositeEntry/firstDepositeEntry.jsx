"use client"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SideBar from '../../../components/sideBar/sideBar'
import PopModal from '../../../components/popModal/popModal'
import TableBody from '../../../components/tableBody/tableBody'
import { firstDepositeEntryApi, firstDepositeGetApi } from '../../../redux/api/agent'
import NavBar from '../../../components/navBar/navBar'
import CircleIcon from '@mui/icons-material/Circle';

const FirstDepositeEntry = () => {

    const data = useSelector(state => state.data);


    const inputModal = {
        'agentName': "Agent Name",
        'date': "Date",
        'customerName': "Customer Name/ FB ID",
        'gameName': "Game Name",
        'amountOfCoin': "Amount of Coins",
        'accountName': " Account Name",
        'remark': "Remark"
    }

    const sideBarMenu = {
        '/firstDepositeEntry': "First Deposite Entry",
        '/freshMessage': "Fresh Message",
        '/freeToPlay': "Free To Play"
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
        dispatch(firstDepositeEntryApi(data))
    };

    useEffect(() => {
        dispatch(firstDepositeGetApi())
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
export default FirstDepositeEntry