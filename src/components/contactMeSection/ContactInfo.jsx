import React from 'react'
import SingleInfo from './SingleInfo'
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text='rahul1711w@gmail.com' Image={HiOutlineMail} />
        <SingleInfo text='+919890874958' Image={FiPhone} />
        <SingleInfo text='Khamgaon, Maharastra' Image={IoLocationOutline} />
    </div>
  )
}

export default ContactInfo