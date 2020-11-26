/**@jsx jsx*/
import { jsx, css, Global } from '@emotion/core'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Loading } from './components/Loading'
import { Hero } from './components/Hero'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'
import { Form } from './components/Form'
import { LoadingContextWrapper } from './components/Loading/context'
import 'animate.css/animate.css'

const App = () => {
  return (
    <div className='App'>
      <Helmet>
        <meta charSet='utf-8' />
        <title>React TypeScript Landing Page</title>
      </Helmet>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            padding: 0;
            font-size: 10px;
            font-family: sans-serif;
            overflow-x: hidden;
          }
          .hidden {
            opacity: 0;
          }
        `}
      />
      <LoadingContextWrapper>
        <Loading />
        <Hero />
        <Cards />
        <Form />
        <Footer />
      </LoadingContextWrapper>
    </div>
  )
}

export default App
