import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {

  const imageArray = [
    "/Images/image1.jpg",
    "/Images/image2.jpg",
    "/Images/image3.jpg",
    "/Images/image4.jpg",
    "/Images/image5.jpg",
    "/Images/image6.jpg",
    "/Images/image7.jpg",
    "/Images/image8.jpg",
    "/Images/image9.jpg"
  ]

  gsap.registerPlugin(ScrollTrigger)
  const imageDivRef = useRef(null)
  const imageRef = useRef(null)

  useGSAP(() => {
    gsap.from(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 25%",
        end: "top -140%",
        pin: true,
        scrub: true,
        onUpdate: function(e){
          let imageIndex;
          if(e.progress < 1){
            imageIndex = Math.floor(e.progress * imageArray.length);
          }else{
            imageIndex = imageArray.length - 1;
          }
          // console.log(imageRef.current.src)
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })
  })
  return (
    <div className='py-1 bg-red-100 relative'>

      <div ref={imageDivRef} className='absolute top-[10vw] lg:top-[12vw] left-[30vw] h-[20vw] w-[15vw] overflow-hidden'>
        <img ref={imageRef} className='object-cover rounded-xl lg:rounded-3xl h-full w-full  border border-gray-500' src="/Images/image1.jpg" alt="image" />
      </div>

      <div className='relative'>
        <div className='uppercase text-[18vw] font-[font1] leading-[15vw] text-center mt-[60vh]'>
        <h2>SEVEN7Y</h2>
        <h2>Two</h2>
        
      </div>
      <div className=' pl-[50%] mt-10'>
        <p className='font-[font1] text-[4vw] leading-[4vw] text-end'>We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand <span className='block text-start'>is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</span></p>
      </div>
      </div>

      <div className='bg-red-100 h-screen '>

      </div>
    </div>
  )
}

export default Agence
