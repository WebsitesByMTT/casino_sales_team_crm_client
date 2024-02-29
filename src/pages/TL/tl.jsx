"use client"
import React, { useEffect, useState } from 'react'
import './tl.css'
import { useDispatch, useSelector } from 'react-redux'
import SideBar from '../../components/sideBar/sideBar'
import NavBar from '../../components/navBar/navBar'
import { getTlEntries } from '../../redux/reducer'


const TlDashboard = () => {

    const data = useSelector(state => state.data);

    console.log("daata", data)
    const dispatch = useDispatch()
    const [pageBody, setPageBody] = useState(null)
    const [isOpen, setIsOpen] = useState(false);


    const closeModal = () => {
        setIsOpen(false);
    };



    useEffect(() => {

        dispatch(getTlEntries())

    }, [])

    


    return (
        <>
            <div className='dashboardContainer'>
                <div className='dashboardContainerBottom'>
                    <div className='dashboardContainerBottomLeft'>
                        <SideBar />
                    </div>
                    <div className='dashboardContainerBottomRight'>


                        <table>
                            <thead>
                                <tr>
                                    <th>Time</th>
                                    <th>Date</th>
                                    <th>Customer Name</th>
                                    <th>Game Name</th>
                                    <th>Amount</th>
                                    <th>Account</th>
                                    <th>Remarks</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((item) => {
                                    return (<tr>
                                        <td className='tableCell'>{item.time}</td>
                                        <td className='tableCell'>{item.date}</td>
                                        <td className='tableCell'>{item.accountName}</td>
                                        <td className='tableCell'>{item.gameName}</td>
                                        <td className='tableCell'>{item.amount}</td>
                                        <td className='tableCell'>{item.account}</td>
                                        <td className='tableCell'>{item.remark}</td>
                                    </tr>)
                                })}
                            </tbody>
                        </table>



                    </div>
                </div>
            </div>
        </>
    )

}
export default TlDashboard