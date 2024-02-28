import React, { useEffect, useState } from 'react'
import './popModal.css'

const PopModal = ({ closeModal, inputModal, newEntry }) => {

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
        newEntry(inputs)

    }


    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closePopModal}>
                    &times;
                </span>
                <div className="table-container">
                    <div className="table-header">
                        {inputModal && inputModal?.map((header, index) => (
                            <div key={index} className="header-item">
                                {header}
                            </div>
                        ))}
                    </div>

                    <div className="table-row">
                        {inputModal && inputModal?.map((item, index) => (
                            <div key={index} className="row-item">
                                <input placeholder={item} value={inputs.item} onChange={(e) => setDetails(item, e.target.value)} />
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