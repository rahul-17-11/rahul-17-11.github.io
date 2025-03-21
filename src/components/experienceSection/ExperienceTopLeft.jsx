import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
        <p className='font-bold text-orange uppercase text-3xl font-roboto text-center'>Since 2022</p>
        <div className='flex justify-center items-center gap-4'>
            <ExperienceInfo number="2" text='Years'/>
        </div>
    </div>
  )
}

export default ExperienceTopLeft