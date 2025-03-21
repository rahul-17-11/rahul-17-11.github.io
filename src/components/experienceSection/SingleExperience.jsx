import React from 'react'

const SingleExperience = ({experience}) => {
  return (
    <div className='h-auto w-auto border-2 border-orange border-dashed rounded-2xl mt-12 p-4'>
        <p className='font-bold text-cyan'>{experience.job}</p>
        <p className='text-orange'>{experience.company}</p>
        <p className='text-light-grey'>{experience.date}</p>
        <ul className='list-disc mt-4 pl-4 text-white'>{experience.responsibility.map((ele,i)=>(
            <li key={i}>{ele}</li>
        ))}</ul>
    </div>
  )
}

export default SingleExperience