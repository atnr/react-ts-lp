/**@jsx jsx*/
import React from 'react'
import { jsx, css } from '@emotion/core'
import { Headline } from './Headline'

export const Hero = () => {
  return (
    <section
      css={css`
        width: 100vw;
        height: 100vh;
        background: #ccc;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <Headline />
    </section>
  )
}
