/* eslint-disable no-unused-vars */
import React from 'react'
import ProjectsText from './ProjectsText'
import SingleProject from './SingleProject'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'

const projects = [
    {
      name:'EduQuizz',
      year:'Feb2025',
      align:'right',
      image:'/images/eduquizz.png',
      link:'https://educationquizzapp.netlify.app/',
      gitLink:"https://github.com/Aamir-Hamza/B42_WEB_040_Responsive-Riders"
    },
    {
      name:'ShaktiMudra',
      year:'Mar2025',
      align:'left',
      image:'/images/shaktimudra.png',
      link:'https://shaktimudra.netlify.app/',
      gitLink:"https://github.com/rahul-17-11/shaktimudra"
    }
]

const ProjectsMain = () => {
  return (
    <motion.div 
    variants={fadeIn('down',0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{once:false, amount:0}}
    id='projects' className='max-w-[1200px] mx-auto px-4'>
      <ProjectsText />
      <div className='flex flex-col gap-20 max-w-[900px] mx-auto mt-12'>
        {
          projects.map((ele,i)=>(
              <motion.div 
                variants={fadeIn(`${ele.align=='left'?'right':'left'}`,0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{once:false, amount:0}}
                key={i}             
                >
            <SingleProject key={i} name={ele.name} year={ele.year} align={ele.align} image={ele.image} link={ele.link} gitLink={ele.gitLink} />
              </motion.div>
          ))
        }
      </div>
    </motion.div>
  )
}

export default ProjectsMain