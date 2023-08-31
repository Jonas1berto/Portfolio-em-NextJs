import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark"
      whileHover={{ scale: 1.1 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">
        Habilidades
      </h2>
      <div className="w-full h-screen relative flex items-center justify-center bg-circularLight dark:bg-circularDark rounded-full">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark"
          whileHover={{ scale: 1.1 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="HTML" x="5vw" y="10vw" />
        <Skill name="JavaScript" x="-22vw" y="-4vw" />
        <Skill name="ReactJS" x="-15vw" y="5vw" />
        <Skill name="Git" x="15vw" y="-15vw" />
        <Skill name="Tailwind CSS" x="25vw" y="-2vw" />
      </div>
    </>
  )
}

export default Skills
