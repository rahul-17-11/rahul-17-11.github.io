import React from 'react'

const SubHero = () => {
  return (
    <div className='w-full border-y border-light-grey text-light-grey flex justify-around uppercase xl:text-4xl md:text-2xl sm:text-4xl py-8 items-center gap-4 bg-brown'>
        <p className='md:block sm:hidden'>Fast Learner</p>
        <p>Adaptability</p>
        <p className='md:block sm:hidden'>Team Work</p>
        <p className='md:block sm:hidden'>Problem Solving</p>
    </div>
  )
}

export default SubHero