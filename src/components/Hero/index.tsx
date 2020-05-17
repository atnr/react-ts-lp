/**@jsx jsx*/
import React from 'react'
import { jsx, css } from '@emotion/core'

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
      <h1
        css={css`
          margin: 0;
          font-size: 6rem;
        `}
      >
        HERO is here
      </h1>
    </section>
  )
}
