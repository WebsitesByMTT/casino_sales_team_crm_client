import React, { useEffect, useState } from 'react'
import './navBar.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AddEmployeeDetails from '../addEmployee/addEmployeeDetails'

const NavBar = () => {

    const navigate = useNavigate()
    const isBigBoss = useSelector(state => state.isBigBoss);

    const account = useSelector(state => state.user.email);

    const [isModalOpen, setIsModalOpen]= useState(false)

    const closeModal =()=>{
        setIsModalOpen(false)
    }
     
    return (
        <div className="navBarContainer">

            {
                isBigBoss &&
                <div className='bigBossContainer'>
                    <div onClick={() => navigate('/acountRecords')}> Manager </div>
                    <div onClick={() => navigate('/firstDepositeEntry')}>Agent</div>
                    <div onClick={() => navigate('/tlDashboard')}>TL</div>
                </div>
            }
            
            <div>Account : {account}</div>

            <div className='addEmployee' onClick={()=>setIsModalOpen(true)}> 
                Add Employee
            </div>

           { isModalOpen && <AddEmployeeDetails closeModal={closeModal}/>}
        </div>
    )
}

export default NavBar