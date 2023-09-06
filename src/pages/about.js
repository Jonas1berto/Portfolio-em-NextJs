import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import fotoPerfil from '../../public/images/profile/profile.jpg'
import Image from 'next/image'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import TransitionEffect from '@/components/TransitionEffect'

const about = () => {
  return (
    <>
      <Head>
        <title>Jonas Humberto | Sobre mim</title>
        <meta name="description" content="any description" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
            text="Quem sou eu ?"
          />
          <div className="grid w-full grid-cols-4 gap-16 sm:gap-8">
            <div className="col-span-2 flex flex-col items-start justify-start xl:col-span-2 md:order-2 md:col-span-4">
              <h2 className="mb-14 text-lg font-bold uppercase text-dark/75 dark:text-light/70 md:w-[100%] md:text-center">
                Sobre mim
              </h2>
              <p className="font-medium w-[60%] md:w-[100%]">
                Olá, Meu nome é Jonas, tenho 22 anos, e sou estudante de
                programação, com foco no desenvolvimento web, especificamente no
                front-end, mas com o tempo pretendo dar uma focado no back-end,
                para me tornar um desenvolvedor full-stack.
              </p>

              <p className="font-medium my-4 w-[60%] md:w-[100%]">
                Estou cursando análise e desenvolvimento de sistemas, e
                estudando programação , atraves de cursos pelo youtube e a
                udemy.
              </p>
            </div>

            <div className="col-span-2 relative h-max rounded-2xl border-2 border-solid border-dark bg-light xl:col-span-2 md:col-span-4 p-8 md:order-1">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={fotoPerfil}
                alt="Foto de perfil de Jonas Humberto"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw,
                (max-width: 1200px) 50vw,
                50vw"
              />
            </div>
          </div>
          <Skills />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default about
