import React from 'react'

const ProjectCard = (props) => {
    return (
        <>
            <div className='group w-full lg:w-1/2 h-full hover:rounded-4xl overflow-hidden relative transition-all'>
                <img className='h-full w-full object-cover' src={props.image1} alt="img" />
                <div className=' opacity-0 group-hover:opacity-100 absolute top-0 left-0 h-full w-full bg-black/50 flex items-center justify-center'>
                    <h5 className='font-[font1] uppercase text-[3vw] border-2 border-white px-2 rounded-4xl '>View Projects</h5>
                </div>
            </div>
            <div className='group w-full lg:w-1/2 h-full hover:rounded-4xl overflow-hidden relative transition-all'>
                <img className='h-full w-full object-cover' src={props.image2} alt="img" />
                <div className=' opacity-0 group-hover:opacity-100 absolute top-0 left-0 h-full w-full bg-black/50 flex items-center justify-center'>
                    <h5 className='font-[font1] uppercase text-[3vw] border-2 border-white px-2 rounded-4xl '>View Projects</h5>
                </div>
            </div>
        </>
    )
}

export default ProjectCard

