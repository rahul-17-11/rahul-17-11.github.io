import React from 'react'
import { Link } from 'react-scroll';

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const FooterMain = () => {
  return (
    <div className='px-4'>
        <div className=' h-[1px] w-full bg-light-grey mt-24'></div>
        <div className='md:flex sm:hidden justify-between text-light-grey mt-4 max-w-[1200px] mx-auto'> 
            <p className='text-3xl'>Rahul Waghmare</p>
            <ul className='flex gap-4 text-xl'>
                {links.map((item,i)=>(
                    <li key={i}><Link className='hover:text-white transition-all duration-500 cursor-pointer' smooth={true} spy={true} duration={500} offset={-130} to={item.section}>{item.link}</Link></li>
                ))}
            </ul>
        </div>
        <p className="max-w-[1200px] mx-auto text-right mt-2 mb-12 text-sm text-light-brown">
        © Rahul | All Rights Reserved.
      </p>
    </div>
  )
}

export default FooterMain