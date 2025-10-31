import React from 'react'
import ProjectCard from '../components/Projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

const Projects = () => {

  const projects = [
    {
      image1: "https://k72.ca/images/teamMembers/CAMILLE_640X290_2.jpg?w=640&h=290&s=245670e7fb5e1d229c25bfc5129b8577",
      image2: "https://k72.ca/images/blog/blogImg/K72_article_ChatGPT_blogue.jpg?w=640&h=290&s=cec2aa341c22369e36e602c558c49e2a",
    }, {
      image1: "https://k72.ca/images/caseStudies/Opto_Reseau_Brand/opto_thumbnail2.jpg?w=1280&h=960&s=7f23d7d824eb04c784dcf51380fe3996",
      image2: "https://k72.ca/images/caseStudies/OKA/OKA_thumbnail.jpg?w=1280&h=960&s=c12c27c9db3c521e4c82a246a8d5c022",
    },
    {
      image1: "https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479",
      image2: "https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c",
    },
    {
      image1: "https://k72.ca/images/caseStudies/A_table/thumbnailimage_atable2.jpg?w=1280&h=960&s=b1cfc8abd6135cf78017737130e49e47",
      image2: "https://k72.ca/images/caseStudies/SollioAg/thumbnailimage_SollioAg.jpg?w=1280&h=960&s=3085861fabc3a15e7f8f8a01c07afa4f",
    },
    {
      image1: "https://k72.ca/images/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img.jpg?w=1280&h=960&s=1d30e394b903c242ad9a4f2cb2463cda",
      image2: "https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821"
    },{
      image1: "https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b",
      image2 : "https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail.jpg?w=640&h=290&s=c3eae0b44f029a1f39a666ffa3c2ca99"
    }




  ]

  gsap.registerPlugin(ScrollTrigger)
  
  useGSAP(() => {
    gsap.from('.hero',{
      height: '100px',
      stagger: {
        amount: 0.4,
      },
      scrollTrigger: {
        trigger: '.lol',
        // markers: true,
        start: 'top 90%',
        end: 'top -50%',
        scrub: true,

      }
    })
  })

  return (
    <div className='p-2 lg:p-4'>
      <div>
        <h2 className='font-[font2] text-[14vw] lg:text-[7vw] uppercase pt-[40vh]'>Projects</h2>
      </div>
      <div className='lol -lg:mt-7'>
        {projects.map(function (elem) {
          return (
          <div className='hero w-full lg:h-[350px] flex flex-col lg:flex-row gap-1 mb-2'>
            <ProjectCard image1={elem.image1} image2={elem.image2}/>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Projects
