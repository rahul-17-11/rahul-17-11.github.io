import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial link='https://github.com/rahul-17-11' Icon={FiGithub} />
        <SingleContactSocial link='https://www.linkedin.com/in/rahulw1711/' Icon={FaLinkedinIn}/>
    </div>
  )
}

export default ContactSocial