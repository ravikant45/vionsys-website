"use client"
import React, { useState } from 'react'
import Navbar from './Navbar';
import PopUp from '../../PopUp';

const ClientNavbar = () => {
    const [showModal, setShowModal]= useState(false);
  return (
    <div>
    <Navbar showModal={showModal} setShowModal={setShowModal}/>
    <PopUp showModal={showModal} setShowModal={setShowModal} />
    </div>
  )
}

export default ClientNavbar