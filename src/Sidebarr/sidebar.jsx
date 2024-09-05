import { motion } from 'framer-motion'
import React from 'react'
import './sidebar.css'

export default function sidebar({showSide}) {
console.log(showSide);
  return <>
   <div >
     <motion.nav
       initial={{ position: "relative", right: "2000px", opacity: 0 }}
       animate={{
         position: "relative",
         left: "0px",
         opacity: 1,
         transition: { duration: 2.0 },
       }}
       exit={{ position: "relative", opacity: 0, w: window.innerWidth}}
       className={showSide ? 'menu bg-danger' : 'toogle bg-danger'}
     >
       <ul>
         <motion.li className='Portfolio'
           initial={{
             position: "relative",
             right: "2000px",
             opacity: 0,
           }}
           animate={{
             position: "relative",
             left: "0px",
             opacity: 1,
             width: "100%",
             transition: { duration: 2.0 },
           }}
           exit={{
             position: "relative",
             opacity: 0,
             w: window.innerWidth,
           }}
         >
           Portfolio
         </motion.li>
         <motion.li
           initial={{
             position: "relative",
             right: "2000px",
             opacity: 0,
           }}
           animate={{
             position: "relative",
             left: "0px",
             opacity: 1,
             width: "100%",
             transition: { duration: 2.2 },
           }}
           exit={{
             position: "relative",
             opacity: 0,
             w: window.innerWidth,
           }}
         className='aboutr'
         >
           About
         </motion.li>
         <motion.li
           initial={{
             position: "relative",
             right: "2000px",
             opacity: 0,
           }}
           animate={{
             position: "relative",
             left: "0px",
             opacity: 1,
             width: "100%",
             transition: { duration: 2.3 },
           }}
           exit={{
             position: "relative",
             opacity: 0,
             w: window.innerWidth,
           }}
           className='contact'
         >
           Contact
         </motion.li>
         <motion.li
           initial={{
             position: "relative",
             right: "2000px",
             opacity: 0,
           }}
           animate={{
             position: "relative",
             left: "0px",
             opacity: 1,
             width: "100%",
             transition: { duration: 2.4 },
           }}
           exit={{
             position: "relative",
             opacity: 0,
             w: window.innerWidth,
           }}
           className='search'
         >
           Search
         </motion.li>
       </ul>
     </motion.nav>
   </div>
  </>
}
