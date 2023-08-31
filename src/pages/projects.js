import AnimatedText from '@/components/AnimatedText'
import { GithubIcon } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import imgConversor from '../../public/images/projects/conversor-moedas.png'

const FeaturedProjects = ({ type, title, summary, img, link, github }) => {
  return (
    <article className="w-full flex items-center relative rounded-br-2xl justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 dark:border-light dark:bg-dark dark:text-light">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-1/2 flex flex-col items-start justify-between pl-6">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark dark:text-light">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {' '}
            <GithubIcon />{' '}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg underline bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-gray-700 transition-all dark:bg-light dark:text-dark hover:dark:bg-slate-200"
          >
            Confira o Projeto
          </Link>
        </div>
      </div>
    </article>
  )
}

const Project = ({ title, type, summary, img, link, github }) => {
  return (
    <article className="w-full relative flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6">
      <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[1.5rem] bg-dark rounded-br-3xl" />
      <Link
        href={link}
        target="_blank"
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-medium text-xl">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold">{title}</h2>
        </Link>
        <p className="my-2 font-medium text-dark">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            {' '}
            <GithubIcon />{' '}
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 rounded-lg underline bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-gray-800 transition-all"
          >
            Confira
          </Link>
        </div>
      </div>
    </article>
  )
}

const projects = () => {
  return (
    <>
      <Head>
        <title>Jonas Humberto | Projetos</title>
        <meta name="description" content="projetos" />
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Página de projetos" className="mb-16" />

          <div className="grid grid-cols-12 gap-24 gap-y-32">
            <div className="col-span-12">
              {' '}
              <FeaturedProjects
                type="Projeto realizado"
                title="Conversor de moedas"
                summary="É um conversor de moedas feito com Vue.js e com SpectreCss."
                link="https://consumindo-api-com-vue-nine.vercel.app/"
                github="https://github.com/Jonas1berto/Moedas-convertidas"
                img={imgConversor}
              />{' '}
            </div>

            <div className="col-span-6">
              <Project
                type="Projeto realizado"
                title="Conversor de moedas"
                summary="Feito com html, Css e Javascript"
                link="https://consumindo-api-com-vue-nine.vercel.app/"
                github="https://github.com/Jonas1berto/Moedas-convertidas"
                img={imgConversor}
              />
            </div>

            <div className="col-span-6">
              <Project
                type="Projeto realizado"
                title="Conversor de moedas"
                summary="Feito com html, Css e Javascript"
                link="https://consumindo-api-com-vue-nine.vercel.app/"
                github="https://github.com/Jonas1berto/Moedas-convertidas"
                img={imgConversor}
              />
            </div>

            <div className="col-span-12">
              {' '}
              <FeaturedProjects
                type="Projeto realizado"
                title="Conversor de moedas"
                summary="É um conversor de moedas feito com Vue.js e com SpectreCss."
                link="https://consumindo-api-com-vue-nine.vercel.app/"
                github="https://github.com/Jonas1berto/Moedas-convertidas"
                img={imgConversor}
              />{' '}
            </div>

            <div className="col-span-6">
              <Project
                type="Projeto realizado"
                title="Conversor de moedas"
                summary="Feito com html, Css e Javascript"
                link="https://consumindo-api-com-vue-nine.vercel.app/"
                github="https://github.com/Jonas1berto/Moedas-convertidas"
                img={imgConversor}
              />
            </div>
            <div className="col-span-6">
              <Project
                type="Projeto realizado"
                title="Conversor de moedas"
                summary="Feito com html, Css e Javascript"
                link="https://consumindo-api-com-vue-nine.vercel.app/"
                github="https://github.com/Jonas1berto/Moedas-convertidas"
                img={imgConversor}
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

export default projects
