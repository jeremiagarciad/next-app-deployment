import Link from 'next/link'
import { ReactElement } from 'react'
import DarkLayout from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'

export default function About() {
  return (
    <>

        <h1>Este es el About Page</h1>

        <h1 className="title">

          Ir a <Link href="/contact" >Contact</Link>
        </h1>

        <p className="description">
          Get started by editing{' '}
          <code className="code">pages/index.js</code>
        </p>

    </>
  )
}

About.getLayout = function getLayout( page: ReactElement ) {
  return (
    <MainLayout>
      <DarkLayout>
        { page }
      </DarkLayout>
    </MainLayout>
  )
}