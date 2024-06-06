import React, { useState } from 'react'
import Modal from './Modal';
import './modal.css'

const Home = () => {
    const[isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
        <h1>User Details Modal</h1>
        <button className='btn' onClick={() => setIsModalOpen(true)}>Open Form</button>
        <Modal isOpen={isModalOpen} setOpen={setIsModalOpen}/>
    </div>
  )
}

export default Home
