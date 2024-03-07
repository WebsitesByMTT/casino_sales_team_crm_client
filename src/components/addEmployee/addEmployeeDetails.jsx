"use client"
import React, { useEffect, useState } from 'react'
import './addEmployeeDetails.css'
import { useDispatch, useSelector } from 'react-redux'
import { registration } from '../../redux/api/login'


const AddEmployeeDetails = ({ closeModal }) => {

    const isBigBoss = useSelector(state => state.isBigBoss);



    const emptyDetails = {
        userName: "",
        password: "",
        email: '',
        isActive: true,
        phoneNumber: "",
        address: "",
        designation: "",
        shift:""
    };

    const dispatch = useDispatch()

    const [employeeDetails, setEmployeeDetails] = useState(emptyDetails);

    const handleChangeFormDetails = (formdata) => {
        
        setEmployeeDetails({ ...employeeDetails, ...formdata });
    };

    const addEmployeeHandler = (e) => {
        e.preventDefault()
        dispatch(registration(employeeDetails))
        closeModal()
    }

    return (

        <div className="modal">
            <div className="modal-content">
                <div
                    className="closeButton"
                    onClick={closeModal}
                >
                    &times;
                </div>
                <div className="addUserForm">
                    <form className="form" onSubmit={(e) => { e.preventDefault() }}>
                        <div>
                            <div> {`UserName * : `} </div>
                            <input
                                className="addClientFiled"
                                type="text"
                                value={employeeDetails.userName}
                                onChange={(e) =>
                                    handleChangeFormDetails({
                                        userName: e.target.value.trim(),
                                    })
                                }
                            />
                        </div>
                        <div>
                            <div>{`Password : `} </div>
                            <input
                                className="addClientFiled"
                                type="text"
                                value={employeeDetails.password}
                                onChange={(e) =>
                                    handleChangeFormDetails({
                                        password: e.target.value.trim(),
                                    })
                                }
                            />
                        </div>
                        <div>
                            <div>{`Phone Number : `} </div>
                            <input
                                className="addClientFiled"
                                type="text"
                                value={employeeDetails.phoneNumber}
                                onChange={(e) =>
                                    handleChangeFormDetails({
                                        phoneNumber: e.target.value.trim(),
                                    })
                                }
                            />
                        </div>
                        <div>
                            <div>{`Email * : `}</div>
                            <input
                                className="addClientFiled"
                                type="text"
                                value={employeeDetails.email}
                                onChange={(e) =>
                                    handleChangeFormDetails({
                                        email: e.target.value.trim(),
                                    })
                                }
                            />
                        </div>
                        <div>
                            <div>{`address * : `}</div>
                            <input
                                className="addClientFiled"
                                type="text"
                                value={employeeDetails.address}
                                onChange={(e) =>
                                    handleChangeFormDetails({
                                        address: e.target.value.trim(),
                                    })
                                }
                            />
                        </div>

                        <div>
                            <select value={employeeDetails.designation} onChange={(e) => handleChangeFormDetails({ designation: e.target.value })}>
                                <option selected disabled value="Choose Employee Type">Choose Employee Type</option>
                                <option value="agentSchema">Agent</option>
                                <option value="tlSchema">TL</option>
                                {isBigBoss && <option value="managerSchema">Manager</option>}
                            </select>
                        </div>

                      {employeeDetails.designation === "managerSchema"  && <div>
                            <select value={employeeDetails.shift} onChange={(e) => handleChangeFormDetails({ shift: e.target.value })}>
                                <option selected disabled value="Choose Shift">Choose Shift</option>
                                <option value="day">Day</option>
                                <option value="night">Night</option>
                                <option value="common">Common</option>
                            </select>
                        </div>}

                        <button type="submit" onClick={(e) => addEmployeeHandler(e)}>
                            Add Employee
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default AddEmployeeDetails