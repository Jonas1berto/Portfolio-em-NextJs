import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light sm:text-base">
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6">
        <span>
          {new Date().getFullYear()} &copy; Todos os direitos Reservados.
        </span>
        <div className="flex items-center lg:py-2">
          Feito por{' '}
          <Link
            className="text-red-600 underline"
            target={'_blank'}
            href="https://www.instagram.com/jonas1berto/"
          >
            Jonas Humberto
          </Link>
          .
        </div>
      </Layout>
    </footer>
  )
}

export default Footer
