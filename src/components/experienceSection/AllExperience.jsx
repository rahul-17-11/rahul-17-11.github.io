/* eslint-disable no-unused-vars */
import React from 'react'
import SingleExperience from './SingleExperience'
import { motion } from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants'
import { div } from 'framer-motion/client'

const experiences = [
    {
        job:"Assistant System Engineer",
        company: "Tata Consultancy Services",
        date: "Feb-2022 to Dec-2023",
        responsibility: [
            `Trained extensively in AWS, gaining substantial
            experience with the platform's services that
            augmented problem-solving skills necessary for
            optimizing web applications' performance and
            scalability.`,
            `Successfully completed LAMP server setup and
            WordPress deployment, experiences that
            showcase an ability to integrate systems
            effectively, indicative of skills transferable to
            frontend-backend integration tasks.`,
            `Focused primarily on enhancing user interaction
            and input handling, ensuring that applications
            are user-friendly, which aligns with the need to
            deliver exceptional user experiences across
            multiple platforms.`
        ]
    }
]

const AllExperience = () => {
  return (
    <div className='flex items-center justify-center'>
        {
            experiences.map((experience,index)=>(
                <motion.div 
                variants={fadeIn('right',0.2)}
                initial='hidden'
                whileInView='show'
                viewport={{once:false, amount:0}}
                key={index}             
                >
                <SingleExperience experience={experience} />
                </motion.div>
            ))
        }
    </div>
  )
}

export default AllExperience