import React, { useContext, useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { FullNavContext } from '../../context/NavContext';

const FullScreenNav = () => {

    // const currentPath = useLocation().pathname;
    const [navOpen, setNavOpen] = useContext(FullNavContext)
    // console.log(navOpen);

    const fullNavLinkRef = useRef(null)
    const fullScreenRef = useRef(null)
    const myFooter = useRef(null)

    // console.log(props.children) 
    const gsapAnimation = () => {
        const tl = gsap.timeline();


        tl.from('.stair2', {
            delay: 0.5,
            height: 0,
            stagger: {
                amount: -0.3,
            },
        })
        tl.from('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.3,
            }
        })
        tl.from('.navLink', {
            opacity: 0
        })
        // tl.from(myFooter.current,{
        //     translateY: '20%',
        //     delay: 0.5,
        //     stagger: true
        // })
    }

    useGSAP(() => {
        if (navOpen) {
            gsap.to('.fullScreenNav', {
                display: 'block',
            })
            gsapAnimation()
        } else {
            gsap.to('.fullScreenNav', {
                display: 'none',
            })

        }
    }, [navOpen])


    return (
        <div ref={fullScreenRef} className='fullScreenNav h-screen w-full z-20 absolute  overflow-hidden leading-tight'>

            <div className='h-screen w-full absolute '>
                <div className="h-full w-full flex">
                    <div className="stair2 w-1/5 bg-black h-full"></div>
                    <div className="stair2 w-1/5 bg-black h-full"></div>
                    <div className="stair2 w-1/5 bg-black h-full"></div>
                    <div className="stair2 w-1/5 bg-black h-full"></div>
                    <div className="stair2 w-1/5 bg-black h-full"></div>
                </div>
            </div>
            <div ref={fullNavLinkRef} className='relative'>
                <div className='navLink flex w-full justify-between items-start p-3'>
                    <div className='p-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="103" height="44" viewBox="0 0 103 44">
                            <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                        </svg>
                    </div>
                    <div onClick={() => { setNavOpen(false) }} className='arrowParent h-20 w-20 relative cursor-pointer'>
                        <div className='arrowChild bg-white h-28 w-0.5 -rotate-45 origin-top absolute'></div>
                        <div className='arrowChild bg-white h-28 w-0.5 rotate-45 origin-top absolute right-0'></div>
                    </div>
                </div>

                <div className='lg:py-10 py-35 '>

                    <div className='link origin-top border-t border-white relative  '>
                        <h1 className='font-[font2] text-[12vw] lg:text-[7vw] leading-[12vw] lg:leading-[7vw] py-2 lg:py-0   uppercase text-center'>Projects</h1>
                        <div className='moveLink absolute flex top-0 h-full bg-[#D3FD50] text-gray-700'>
                            <div className='moveX flex items-center gap-1 ' >
                                <h2 className='whitespace-nowrap font-[font2] text-[7vw] leading-[7vw] uppercase text-center'>See EveryThing</h2>
                                <img className='h-14 w-40 object-cover shrink-0 rounded-full' src="/nav/nav-img1.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[6vw] leading-[6vw] uppercase text-center'>See EveryThing</h2>
                                <img className='h-14 w-40 object-cover shrink-0 rounded-full' src="/nav/nav-img1.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center overflow-auto gap-1 ' >
                                <h2 className='whitespace-nowrap font-[font2] text-[6vw] leading-[6vw] uppercase text-center'>See EveryThing</h2>
                                <img className='h-14 w-40 object-cover shrink-0 rounded-full' src="/nav/nav-img1.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[6vw] leading-[6vw] uppercase text-center'>See EveryThing</h2>
                                <img className='h-14 w-40 object-cover shrink-0 rounded-full' src="/nav/nav-img1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='link origin-top border-t border-white relative  '>
                        <h1 className='font-[font2] text-[12vw] lg:text-[7vw] leading-[12vw] lg:leading-[7vw] py-2 lg:py-0   uppercase text-center'>Projects</h1>
                        <div className='moveLink absolute h-full  flex top-0 bg-[#D3FD50] text-gray-700'>
                            <div className='moveX flex items-center gap-1 ' >
                                <h2 className='whitespace-nowrap font-[font2] text-[7vw] leading-[7vw] uppercase text-center'>See EveryThing</h2>
                                <img className='h-14 w-40 object-cover shrink-0 rounded-full' src="/nav/nav-img1.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[6vw] leading-[6vw] uppercase text-center'>See EveryThing</h2>
                                <img className='h-14 w-40 object-cover shrink-0 rounded-full' src="/nav/nav-img1.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center overflow-auto gap-1 ' >
                                <h2 className='whitespace-nowrap font-[font2] text-[6vw] leading-[6vw] uppercase text-center'>See EveryThing</h2>
                                <img className='h-14 w-40 object-cover shrink-0 rounded-full' src="/nav/nav-img1.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[6vw] leading-[6vw] uppercase text-center'>See EveryThing</h2>
                                <img className='h-14 w-40 object-cover shrink-0 rounded-full' src="/nav/nav-img1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='link origin-top border-t border-white relative  '>
                        <h1 className='font-[font2] text-[12vw] lg:text-[7vw] leading-[12vw] lg:leading-[7vw] py-2 lg:py-0   uppercase text-center'>Projects</h1>
                        <div className='moveLink absolute h-full  flex top-0 bg-[#D3FD50] text-gray-700'>
                            <div className='moveX flex items-center gap-1 ' >
                                <h2 className='whitespace-nowrap font-[font2] text-[7vw] leading-[7vw] uppercase text-center'>See EveryThing</h2>
                                <img className='h-14 w-40 object-cover shrink-0 rounded-full' src="/nav/nav-img1.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[6vw] leading-[6vw] uppercase text-center'>See EveryThing</h2>
                                <img className='h-14 w-40 object-cover shrink-0 rounded-full' src="/nav/nav-img1.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center overflow-auto gap-1 ' >
                                <h2 className='whitespace-nowrap font-[font2] text-[6vw] leading-[6vw] uppercase text-center'>See EveryThing</h2>
                                <img className='h-14 w-40 object-cover shrink-0 rounded-full' src="/nav/nav-img1.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[6vw] leading-[6vw] uppercase text-center'>See EveryThing</h2>
                                <img className='h-14 w-40 object-cover shrink-0 rounded-full' src="/nav/nav-img1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='link origin-top border-y border-white relative  '>
                        <h1 className='font-[font2] text-[12vw] lg:text-[7vw] leading-[12vw] lg:leading-[7vw] py-2 lg:py-0   uppercase text-center'>Projects</h1>
                        <div className='moveLink absolute h-full  flex top-0 bg-[#D3FD50] text-gray-700'>
                            <div className='moveX flex items-center gap-1 ' >
                                <h2 className='whitespace-nowrap font-[font2] text-[7vw] leading-[7vw] uppercase text-center'>See EveryThing</h2>
                                <img className='h-14 w-40 object-cover shrink-0 rounded-full' src="/nav/nav-img1.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[6vw] leading-[6vw] uppercase text-center'>See EveryThing</h2>
                                <img className='h-14 w-40 object-cover shrink-0 rounded-full' src="/nav/nav-img1.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center overflow-auto gap-1 ' >
                                <h2 className='whitespace-nowrap font-[font2] text-[6vw] leading-[6vw] uppercase text-center'>See EveryThing</h2>
                                <img className='h-14 w-40 object-cover shrink-0 rounded-full' src="/nav/nav-img1.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] text-[6vw] leading-[6vw] uppercase text-center'>See EveryThing</h2>
                                <img className='h-14 w-40 object-cover shrink-0 rounded-full' src="/nav/nav-img1.jpg" alt="" />
                            </div>
                        </div>
                    </div>



                </div>

            </div>
            <div ref={myFooter} className=' w-full absolute bottom-0 flex flex-col lg:flex-row items-center justify-between px-4 py-2'>
                <div className=''>
                    <ul className='flex flex-col lg:flex-row items-center gap-2 uppercase font-[font1] text-[3vw] lg:text-[1vw] text-center'>
                        <li>Privacy Policy</li>
                        <li>Privacy Notice</li>
                        <li>Ethics Report</li>
                        <li>Consent Choices</li>
                    </ul>
                </div>
                <div className='flex items-center gap-2'>
                    <button className='px-4 lg:px-3 py-0.5 border-2 border-white rounded-2xl uppercase font-[font2] pt-1 text-[4vw] lg:text-[1.5vw]'>ig</button>
                    <button className='px-4 lg:px-3 py-0.5 border-2 border-white rounded-2xl uppercase font-[font2] pt-1 text-[4vw] lg:text-[1.5vw]'>fb</button>
                    <button className='px-4 lg:px-3 py-0.5 border-2 border-white rounded-2xl uppercase font-[font2] pt-1 text[4vw] lg:text-[1.5vw]'>in</button>
                    <button className='px-4 lg:px-3 py-0.5 border-2 border-white rounded-2xl uppercase font-[font2] pt-1 text[4vw] lg:text-[1.5vw]'>be</button>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav
