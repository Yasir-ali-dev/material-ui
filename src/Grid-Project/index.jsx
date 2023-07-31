import React from 'react'
import Navbar from './Navbar';

const linksArray = ["Products", "Services", "Overview", "Contact Us"];

const index = () => {
  return (
    <>
        <Navbar linksArray={linksArray} />
    </>
  )
}

export default index
