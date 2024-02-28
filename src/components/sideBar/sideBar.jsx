import React, { useState } from 'react'
import './sideBar.css'
import { useDispatch } from 'react-redux'
import PopModal from '../popModal/popModal';
import { addTlEntry } from '../../redux/reducer';


const SideBar = () => {

  const inputModal = [
    'timeStamp',
    'date',
    'customerName',
    'gameName',
    'amount',
    'accountName',
    'remarks'
  ]


  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const newEntry = (data) => {
    setIsOpen(false);
    addTlEntry(data)

  };


  const dispatch = useDispatch();

  const setPageState = (pageState) => {
    // dispatch(setPageStateStore(pageState))
  }

  return (
    <div className='sideBarContainer'>
      <div className='sideBarContainerList'>
        <div onClick={() => setPageState("employeDetails")}>Sales Crm</div>

        <div onClick={() => setIsOpen(true)}>New Entry</div>

        {isOpen && <PopModal newEntry={newEntry} inputModal={inputModal} closeModal={closeModal} />}
      </div>
    </div>
  )
}

export default SideBar