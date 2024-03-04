"use client"
import React, { useEffect, useState } from 'react'
import './addEmployeeDetails.css'
import { useDispatch, useSelector } from 'react-redux'


const AddEmployeeDetails = ({ closeModal }) => {

    const emptyDetails = {
        userName: "",
        password: "",
        email:'',
        isActive:"",
        phoneNumber:"",
        address:"",
        designation:""
    };

    const dispatch = useDispatch()

    const [employeeDetails, setEmployeeDetails] = useState(emptyDetails);


    const handleChangeFormDetails = (formdata) => {
        setEmployeeDetails({ ...employeeDetails, ...formdata });
    };

    const handelCloseButtonClick = () => {
        modalPopUpStatus()
    }

    const addEmployeeHandler=()=>{
        console.log("lll")
         dispatch(addEmployee(employeeDetails))
         handelCloseButtonClick()
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
                        <form className="form" onSubmit={(e) => {e.preventDefault()}}>
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
                                <div>{`Adhar No * : `}</div>
                                <input
                                    className="addClientFiled"
                                    type="text"
                                    value={employeeDetails.adharNumber}
                                    onChange={(e) =>
                                        handleChangeFormDetails({
                                            adharNumber: e.target.value.trim(),
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
                                <div>{`Salary : `}</div>
                                <input
                                    className="addClientFiled"
                                    type="text"
                                    value={employeeDetails.salary}
                                    onChange={(e) =>
                                        handleChangeFormDetails({
                                            salary: e.target.value.trim(),
                                        })
                                    }
                                />
                            </div>
                            <div>
                                <select value={employeeDetails.department} onChange={(e) => handleChangeFormDetails({department:e.target.value})}>
                                    <option value="SEO">Seo</option>
                                    <option value="designerTeam">designer</option>
                                    <option value="devTeam">dev</option>
                                    <option value="financeTeam">Finance</option>
                                </select>
                            </div>


                            <button type="submit" onClick={() => addEmployeeHandler()}>
                                Add client
                            </button>
                        </form>
                    </div>
                </div>
            </div>

    )
}

export default AddEmployeeDetails