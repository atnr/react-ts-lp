/**@jsx jsx*/
import React from 'react'
import { jsx, css } from '@emotion/core'
export const Headline = () => {
  return (
    <section
      css={css`
        background: #fff;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8em;
        background: #666;
        color: #fff;
      `}
    >
      <h1
        css={css`
          font-size: 3em;
        `}
      >
        Form
      </h1>
    </section>
  )
}
