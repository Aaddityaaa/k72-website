import React from 'react'
import Video from './Video'

const HeroText = () => {
    return (
        <div className='font-[font1] text-[10vw] lg:text-[8.5vw] uppercase leading-[8.5vw] lg:leading-[7.5vw] text-center pt-5 mt-90 lg:mt-0'>
            <div>THE SPARK FOR</div>
            <div className='flex items-center justify-center'>ALL
                
                <div className='h-[6.5vw] rounded-full overflow-hidden -mt-5'>
                    <Video />
                </div>
                THINGS
            </div>
            <div>CREATIVE</div>
        </div>
    )
}

export default HeroText
