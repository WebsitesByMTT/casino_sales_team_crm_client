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
                <div className="table-container">
                    <div className="table-header">
                        {inputModal && Object.keys(inputModal)?.map(key => (
                            <div key={key} className="header-item">
                                {inputModal[key]}
                            </div>
                        ))}
                    </div>

                    <div className="table-row">
                        {inputModal && Object.keys(inputModal)?.map(keys => (
                            <div key={keys} className="row-item">
                                <input placeholder={keys} value={inputs.item} onChange={(e) => setDetails(keys, e.target.value)} />
                            </div>
                        ))}
                    </div>
                    <button className="button" onClick={() => returnEntry()}>Add</button>
                </div>
            </div>
        </div>
    )
}

export default PopModal