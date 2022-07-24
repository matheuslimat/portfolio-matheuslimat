import '@/css/tailwind.css'

import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import LayoutWrapper from '@/components/LayoutWrapper'

const I18N_STORAGE_KEY = 'i18nextLng'

const handleSelectChange = (event) => {
  localStorage.setItem(I18N_STORAGE_KEY, event.target.value)
  window.location = location
}

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
        <select onChange={handleSelectChange}>
          <option>Choose your language</option>
          <option value="pt-BR">PT</option>
          <option value="en-US">EN</option>
        </select>
      </div>

      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
