import '@/css/tailwind.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import LayoutWrapper from '@/components/LayoutWrapper'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles'
import React, { useState } from 'react'
import ReactFlagsSelect from 'react-flags-select'

const I18N_STORAGE_KEY = 'i18nextLng'

const handleSelectChange = (code) => {
  code === 'US' ? (code = 'en-US') : (code = 'pt-BR')
  localStorage.setItem(I18N_STORAGE_KEY, code)
  window.location = location
}

const particlesInit = async (main) => {
  // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
  // starting from v2 you can add only the features you need reducing the bundle size
  await loadFull(main)
}

const particlesLoaded = (container) => {}

export default function App({ Component, pageProps }) {
  const [selected, setSelected] = useState('')
  return (
    <ThemeProvider attribute="class">
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -5,
        }}
      >
        <Particles
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              opacity: 80,
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: 'push',
                },
                onHover: {
                  enable: true,
                  mode: 'repulse',
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 1,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: '#d3d3d3',
              },
              links: {
                color: '#d3d3d3',
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 0.5,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: false,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 2000,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
      </div>
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
        <Head>
          <meta content="width=device-width, initial-scale=1" name="viewport" />
        </Head>
      </div>

      <div
        className="change-language"
        style={{
          paddingLeft: 1450,
        }}
      >
        <ReactFlagsSelect
          countries={['US', 'BR']}
          customLabels={{ US: '', BR: '' }}
          placeholder="Select Language"
          selected={selected}
          onSelect={(code) => handleSelectChange(code)}
          selectedSize={10}
          fullWidth={false}
        />
      </div>

      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
