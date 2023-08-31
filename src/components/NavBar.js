import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Logo from './Logo'
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from './Icons'
import { motion } from 'framer-motion'
import useThemeSwitcher from './hooks/useThemeSwitcher'

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter()

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}

      <span
        className={`
        h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5
      group-hover:w-full transition-[width] ease duration-300 dark:bg-light
      ${router.asPath === href ? 'w-full' : 'w-2'}`}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const NavBar = () => {
  const [mode, setMode] = useThemeSwitcher()

  return (
    <header className="w-full px-32 py-8 dark:text-light font-medium flex items-center justify-between ">
      <nav>
        <CustomLink href="/" title="Inicio" className="mr-4" />
        <CustomLink href="/about" title="Sobre" className="mx-4" />
        <CustomLink href="/projects" title="Projetos" className="ml-4" />
      </nav>

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>

      <nav className="flex justify-center items-center flex-wrap border-2 border-black rounded-2xl px-2 py-1">
        <motion.a
          href="https://github.com/Jonas1berto"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mr-3"
        >
          <GithubIcon />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/jonas-humberto-879a68233/"
          target={'_blank'}
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 mx-3"
        >
          <LinkedInIcon />
        </motion.a>
        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={`ml-3 flex items-center justify-center rounded-full p-1 ${
            mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
          }`}
        >
          {mode === 'dark' ? (
            <SunIcon className={'fill-dark'} />
          ) : (
            <MoonIcon className={'fill-dark'} />
          )}
        </button>
      </nav>
    </header>
  )
}

export default NavBar
