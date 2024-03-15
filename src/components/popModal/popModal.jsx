import React, { useEffect, useState } from 'react'
import './popModal.css'

const PopModal = ({ closeModal, inputModal, newEntry, validations }) => {

    console.log("valds", validations)

    const [inputs, setInputs] = useState({})


    const setDetails = (key, val) => {

        const newObj = {}
        newObj[key] = val
        setInputs({ ...inputs, ...newObj })

    }

    const closePopModal = () => {
        closeModal()
    };

    const returnEntry = () => {

        let isValid = true

        validations.forEach(element => {
            if (element in inputs) {
                if (isNaN(inputs[element])) {
                    isValid = false
                    alert("Please enter a valid number for " + element)
                    return
                }
            }
        })

        if (isValid)
            newEntry(inputs)

        return

    }


    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closePopModal}>
                    &times;
                </span>
                <table className="table-container">
                    <thead className="table-header">

                        <tr>
                            {inputModal && Object.keys(inputModal)?.map(key => (
                                <th key={key} className="header-item">
                                    {inputModal[key]}
                                </th>
                            ))}
                        </tr>
                    </thead>

                    <tbody className="table-row">
                        <tr>
                            {inputModal && Object.keys(inputModal)?.map(keys => (
                                <td key={keys} className="row-item">
                                    <input placeholder={keys} value={inputs.item} onChange={(e) => setDetails(keys, e.target.value)} />
                                </td>
                            ))}
                        </tr>
                    </tbody>
                    <button className="button" onClick={() => returnEntry()}>Add</button>
                </table>
            </div>
        </div>
    )
}

export default PopModal