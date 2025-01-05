import React from 'react'
import aboutImg from '../assets/About2.png';
import {ABOUT_TEXT} from '../constants';
import { motion } from "framer-motion"
const About = () => {
  return (
    <div  className='border-b border-neutral-900 pb-4'>
    <h1 className='my-20 text-center text-4xl'> 🎅About
         <span className='text-neutral-500'> Me.🎄
        </span>
        </h1>
    <div  className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
            <motion.div whileInView={{opacity:1,x:0}}
               initial={{opacity:0,x:-100}}
               transition={{duration:0.5}} 
             className='flex items-center justify-center'>
                <img src = {aboutImg} alt='About' className='max-w-xs lg:max-w-md h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110'></img>
            </motion.div>
            </div>
            <div className='w-full lg:w-1/2 '>
                <motion.div whileInView={{opacity:1,x:0}}
                initial={{opacity:0,x:100}}
                transition={{duration:0.5}}
                 className='flex justify-center text-justify lg:justify-start '>
                    <p className='my-4 max-w-xl py-6 font-medium'>
                        Hello, I'm Jaideep Murthy, a driven senior pursuing a degree in Computer Science and Engineering at NIT, Allahabad. With a keen interest in artificial intelligence and blockchain technology, I'm passionate about exploring the intersections of technology, entrepreneurship, and sustainable development.
                        <br></br>
                        <br></br>
                        My journey began with a strong foundation in computer science, leading me to various enriching experiences. I honed my technical skills and gained practical knowledge during my summer internship at Telepresenz, where I contributed to real-world projects in JavaScript web application development. Additionally, my role as a Cisco tQb Student Body Member has further fueled my passion for fostering innovation and entrepreneurship among students and startups.
                        <br></br>
                        <br></br>
                        As a student-athlete, playing college-level basketball has taught me invaluable lessons in teamwork, leadership, and discipline. These experiences have shaped my ability to balance rigorous academic pursuits with athletic commitments, enhancing my overall personal and professional development.
                        <br></br>
                        <br></br>
                        Looking forward, I aim to leverage my skills and interests to build a career in the tech industry, focusing on emerging technologies like AI and blockchain. I'm eager to connect with like-minded professionals and explore opportunities that align with my goal of contributing to a sustainable and innovative future.
                    </p>

                </motion.div>
            </div>
        </div>
    </div> 
  )
}

export default About  