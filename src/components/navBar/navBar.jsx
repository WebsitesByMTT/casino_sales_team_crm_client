import React, { useEffect, useState } from 'react'
import './navBar.css'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AddEmployeeDetails from '../addEmployee/addEmployeeDetails'
import PersonIcon from '@mui/icons-material/Person';

const NavBar = () => {

    const navigate = useNavigate()
    const isBigBoss = useSelector(state => state.isBigBoss);
    const designation = useSelector(state => state.user.designation);
    console.log("nabbar", designation)

    const account = useSelector(state => state.user.email);

    const [isModalOpen, setIsModalOpen] = useState(false)

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="navBarContainer">

            {
                isBigBoss &&
                <div className='bigBossContainer'>
                    <div className='navButtons' onClick={() => navigate('/acountRecords')}> Manager </div>
                    <div  className='navButtons'  onClick={() => navigate('/firstDepositeEntry')}>Agent</div>
                    <div className='navButtons' onClick={() => navigate('/tlDashboard')}>TL</div>
                </div>
            }


            {(isBigBoss || designation === "managerSchema") && <div className='addEmployee' onClick={() => setIsModalOpen(true)}>
                Add Employee
            </div>}

            {isModalOpen && <AddEmployeeDetails closeModal={closeModal} />}

            <div className='accountInfo'><PersonIcon/> :  {account}</div>

        </div>
    )
}

export default NavBar