"use client"
import React, { useState } from 'react'
import Navbar from './Navbar';
import PopUp from '../../PopUp';

const ClientNavbar = () => {
    const [showModal1, setShowModal1]= useState(false);
  return (
    <div>
    <Navbar showModal1={showModal1} setShowModal1={setShowModal1}/>
    <PopUp showModal1={showModal1} setShowModal1={setShowModal1} />
    </div>
  )
}

export default ClientNavbar