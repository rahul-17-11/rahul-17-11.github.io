import React from 'react'

const AboutMeText = () => {
    
  return (
    <div className='flex flex-col md:items-start sm:items-center md:text-left sm:text-center'>
        <h2 className='text-6xl text-cyan mb-10'>About Me</h2>
        <p className='text-white'>Dynamic Frontend Developer skilled in JavaScript and React.js with a strong understanding of responsive design and RESTful API integration. Adept at leveraging Generative AI and learning new tech rapidly, ensuring scalable, high-performance applications. Proven problem-solving and effective communication drive exceptional user experiences.</p>
        <a href="/Rahul_Resume.pdf" download='/Rahul_Resume.pdf' target='_blank'><button className='border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan'>Resume</button></a>
    </div>
  )
}

export default AboutMeText