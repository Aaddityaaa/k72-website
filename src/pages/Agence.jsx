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
  const moveRef1 = useRef(null)
  const moveRef2 = useRef(null)
  const directorRef = useRef(null)
  const parentRef = useRef(null)

  useGSAP(() => {

    const tl = gsap.timeline();

    tl.from(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current,
        // markers: true,
        start: "top 25%",
        end: "top -140%",
        pin: true,
        scrub: true,
        onUpdate: function (e) {
          let imageIndex;
          if (e.progress < 1) {
            imageIndex = Math.floor(e.progress * imageArray.length);
          } else {
            imageIndex = imageArray.length - 1;
          }
          // console.log(imageRef.current.src)
          imageRef.current.src = imageArray[imageIndex]
        }
      }
    })

    gsap.killTweensOf(moveRef1.current)
    gsap.to(moveRef1.current, {
      transform: 'translateX(-70%)',
      duration: 7,
      repeat: -1,
      ease: 'linear',

    })
    gsap.killTweensOf(moveRef2.current)
    gsap.to(moveRef2.current, {
      transform: 'translateX(50%)',
      duration: 9,
      repeat: -1,
      ease: 'linear',
    })

    gsap.from(directorRef.current, {
      scrollTrigger: {
        trigger: directorRef.current,
        // markers: true,
        start: 'top 60%',
        end: 'top -20%',
        scrub: true,
        onEnter: () => {
          parentRef.current.style.backgroundColor = 'black';
          parentRef.current.style.color = 'white';
        },
        onLeave: () => {
          parentRef.current.style.backgroundColor = 'white';
          parentRef.current.style.color = 'black';
        },
        onEnterBack: () => {
          parentRef.current.style.backgroundColor = 'black';
          parentRef.current.style.color = 'white';
        },
        onLeaveBack: () => {
          parentRef.current.style.backgroundColor = 'white';
          parentRef.current.style.color = 'black';
        }
      }
    })
  })
  return (
    <div ref={parentRef} className='pt-1 relative bg-white text-black'>

      <div ref={imageDivRef} className='absolute top-[20vw] lg:top-[12vw] left-[30vw] h-[35vw] lg:h-[20vw] w-[25vw] lg:w-[15vw] overflow-hidden'>
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

      <div className=' h-screen p-10 lg:p-20 flex flex-col justify-around'>
        <div className='flex justify-between lg:justify-around font-[font2] text-[4vw] lg:text-[1.5vw]'>
          <div>Experties</div>
          <div>
            <p>Strategy</p>
            <p>Advertising</p>
            <p>Branding</p>
            <p>Design</p>
            <p>Content</p>
          </div>
        </div>
        <div className='flex flex-col lg:flex-row font-[font2] gap-3 justify-around text-[4vw] lg:text-[1.5vw]' >
          <div className='w-[80vw] lg:w-[25vw]'>
            Our Work_ Born in curiosity, raised by dedication and fed with a steady diet of creativity.
          </div>
          <div className='w-[80vw] lg:w-[25vw]'>
            Our Creative_ Simmering in an environment where talent can come to a full boil. Encouraged to become the best versions of ourselves.
          </div>
          <div className='w-[80vw] lg:w-[25vw]'>
            Our Culture_ We’re open to each other. Period. The team works together to create a space that makes us proud.
          </div>
        </div>
      </div>

      <div ref={directorRef} className='h-screen w-full flex items-center justify-center relative'>
        <div className='w-[60vw] lg:w-[23vw] h-[95vw] lg:h-[35vw] rounded-2xl lg:rounded-4xl overflow-hidden lg:z-5'>
          <img className='w-full h-full object-cover' src="https://k72.ca/images/teamMembers/SebR_640X960.jpg?w=640&h=960&s=81dfdbd4b658503ba32862901a1ea3ca" alt="director-img" />
        </div>
        <div ref={moveRef1} className='absolute top-72 lg:top-25 flex gap-[40vw]'>
          <div>
            <h2 className='text-[#D3FD50] text-[8vw] font-[font2] uppercase'>SÉBASTIEN</h2>
          </div>
          <div>
            <h2 className='text-[#D3FD50] text-[8vw] font-[font2] uppercase'>SÉBASTIEN</h2>
          </div>
          <div>
            <h2 className='text-[#D3FD50] text-[8vw] font-[font2] uppercase'>SÉBASTIEN</h2>
          </div>
          <div>
            <h2 className='text-[#D3FD50] text-[8vw] font-[font2] uppercase'>SÉBASTIEN</h2>
          </div>
          <div>
            <h2 className='text-[#D3FD50] text-[8vw] font-[font2] uppercase'>SÉBASTIEN</h2>
          </div>
          <div>
            <h2 className='text-[#D3FD50] text-[8vw] font-[font2] uppercase'>SÉBASTIEN</h2>
          </div>
          <div>
            <h2 className='text-[#D3FD50] text-[8vw] font-[font2] uppercase'>SÉBASTIEN</h2>
          </div>

        </div>
        <div ref={moveRef2} className='z-6 absolute bottom-72 lg:bottom-30 flex gap-[70vw]'>
          <div className='flex gap-[5vw] leading-[5.5vw] items-end'>
            <h2 className='text-[#D3FD50] text-[8vw] font-[font2] uppercase pt-2'>ROY</h2>
            <p className='text-white font-[font2] uppercase text-[2vw] leading-[1.5vw] shrink-0'>Assiciative creative director</p>
          </div>
          <div className='flex gap-[5vw] leading-[5.5vw] items-end'>
            <h2 className='text-[#D3FD50] text-[8vw] font-[font2] uppercase pt-2'>ROY</h2>
            <p className='text-white font-[font2] uppercase text-[2vw] leading-[1.5vw] shrink-0'>Assiciative creative director</p>
          </div>
          <div className='flex gap-[5vw] leading-[5.5vw] items-end'>
            <h2 className='text-[#D3FD50] text-[8vw] font-[font2] uppercase pt-2'>ROY</h2>
            <p className='text-white font-[font2] uppercase text-[2vw] leading-[1.5vw] shrink-0'>Assiciative creative director</p>
          </div>
          <div className='flex gap-[5vw] leading-[5.5vw] items-end'>
            <h2 className='text-[#D3FD50] text-[8vw] font-[font2] uppercase pt-2'>ROY</h2>
            <p className='text-white font-[font2] uppercase text-[2vw] leading-[1.5vw] shrink-0'>Assiciative creative director</p>
          </div>
          <div className='flex gap-[5vw] leading-[5.5vw] items-end'>
            <h2 className='text-[#D3FD50] text-[8vw] font-[font2] uppercase pt-2'>ROY</h2>
            <p className='text-white font-[font2] uppercase text-[2vw] leading-[1.5vw] shrink-0'>Assiciative creative director</p>
          </div>
          <div className='flex gap-[5vw] leading-[5.5vw] items-end'>
            <h2 className='text-[#D3FD50] text-[8vw] font-[font2] uppercase pt-2'>ROY</h2>
            <p className='text-white font-[font2] uppercase text-[2vw] leading-[1.5vw] shrink-0'>Assiciative creative director</p>
          </div>
          <div className='flex gap-[5vw] leading-[5.5vw] items-end'>
            <h2 className='text-[#D3FD50] text-[8vw] font-[font2] uppercase pt-2'>ROY</h2>
            <p className='text-white font-[font2] uppercase text-[2vw] leading-[1.5vw] shrink-0'>Assiciative creative director</p>
          </div>
          <div className='flex gap-[5vw] leading-[5.5vw] items-end'>
            <h2 className='text-[#D3FD50] text-[8vw] font-[font2] uppercase pt-2'>ROY</h2>
            <p className='text-white font-[font2] uppercase text-[2vw] leading-[1.5vw] shrink-0'>Assiciative creative director</p>
          </div>
          <div className='flex gap-[5vw] leading-[5.5vw] items-end'>
            <h2 className='text-[#D3FD50] text-[8vw] font-[font2] uppercase pt-2'>ROY</h2>
            <p className='text-white font-[font2] uppercase text-[2vw] leading-[1.5vw] shrink-0'>Assiciative creative director</p>
          </div>
          <div className='flex gap-[5vw] leading-[5.5vw] items-end'>
            <h2 className='text-[#D3FD50] text-[8vw] font-[font2] uppercase pt-2'>ROY</h2>
            <p className='text-white font-[font2] uppercase text-[2vw] leading-[1.5vw] shrink-0'>Assiciative creative director</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Agence
