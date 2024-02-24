"use client"
import React, { useEffect, useState } from 'react'
import './employeeDetails.css'
import AddEmployeeDetails from '../addEmployee/addEmployeeDetails'
import { useDispatch, useSelector } from 'react-redux'
import { employees } from '@/app/redux/reducers/employeeReducers'



const EmployeeDetails = () => {


    const employeeData = useSelector(state => state.employeeSliceReducer.employees);


    const dispatch = useDispatch()

    const [isAddClientModalOpen, setIsClientPopModalOpen] = useState(false);

    const handleSearchBar = async () => {

    }

    const handleSearchButton = async () => {

    }

    const openAddEmployeeModal = () => {
        setIsClientPopModalOpen(!isAddClientModalOpen)
    }

    useEffect(() => {
        dispatch(employees({}))
    }, [])

    return (
        <div className='employeeContainer'>

            <div className='employeeContainerUpperContainer'>
                <button className="searchButton" onClick={() => openAddEmployeeModal()}>
                    Add Employee
                </button>

                <div>
                    <input className='employeeSearchInput' placeholder='Enter Employee name' onChange={() => handleSearchBar()} />
                    <button className="searchButton" onClick={() => handleSearchButton()}>
                        Search
                    </button>

                </div>


            </div>

            <div className='employeeContainerBody'>
                {
                    employeeData && employeeData.map(items => {

                        return (
                            <div className='employeeDepartments'>
                                <div>{items._id}</div>
                                <div>{items.users && items.users.map(items => {
                                    return (
                                        <div className='employeeCards'>
                                            <div>  Name : {items.userName}  </div>
                                            <div>   Phone Number :{items.phoneNumber}  </div>
                                            <div>  Adhar Number : {items.adharNumber}  </div>
                                            <div>   Address : {items.address}  </div>
                                            <div>   Salary : {items.salary}  </div>
                                        </div>
                                    )
                                })}</div>
                            </div>
                        )
                    })
                }
            </div>

            {isAddClientModalOpen && <AddEmployeeDetails modalPopUpStatus={openAddEmployeeModal} />}
        </div>
    )
}

export default EmployeeDetails