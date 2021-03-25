import { AppProps } from 'next/app'
import Head from 'next/head'

import NextNprogress from 'nextjs-progressbar'

import { DefaultSeo } from 'next-seo'
import SEO from '../../next-seo.config'

import GlobalStyles from 'styles/global'

import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Movie Town | Bem vindo a cidade da cinematografia</title>
        <link rel="shortcut icon" href="/img/icon-100.png" />
        <link rel="apple-touch-icon" href="/img/icon-100.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#E74C3C" />
        <meta
          name="description"
          content="Projeto Movie Town para listagem e busca de filmes no acervo"
        />
      </Head>
      <DefaultSeo {...SEO} />

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NextNprogress
          color={theme.colors.primary}
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
