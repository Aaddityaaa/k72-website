import React from 'react'
import Video from '../components/Home/Video'
import HeroText from "../components/Home/HeroText"
import BootomText from "../components/Home/BottomText"

const Home = () => {
  return (
    <div>
      <div className='h-screen w-screen fixed'>
      <Video />
    </div>
      <div className='h-screen w-screen relative flex flex-col justify-between  p-1'>
        <HeroText />
        <div className='absolute w-[70vw] lg:w-[18vw] right-2 bottom-30 lg:bottom-20 text-sm font-[font1]'>
          <p>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in.</p>
        </div>
        <BootomText/>
    </div>
    </div>
  )
}

export default Home
