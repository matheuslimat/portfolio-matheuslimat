import '@/css/tailwind.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import LayoutWrapper from '@/components/LayoutWrapper'
import ParticleBackground from './ParticleBackground'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <div className='particle'><ParticleBackground /></div>
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
      </div>

      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>

    </ThemeProvider>
  )
}
