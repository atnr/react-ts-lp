/**@jsx jsx*/
import { jsx, css, Global } from '@emotion/core'
import React from 'react'
import { Hero } from './components/Hero'
import { Cards } from './components/Cards'
import { Footer } from './components/Footer'
import { Form } from './components/Form'

const App = () => {
  return (
    <div className='App'>
      <Global
        styles={css`
          html,
          body {
            margin: 0;
            padding: 0;
            font-size: 10px;
            font-family: sans-serif;
          }
        `}
      />
      <Hero />
      <Cards />
      <Form />
      <Footer />
    </div>
  )
}

export default App
