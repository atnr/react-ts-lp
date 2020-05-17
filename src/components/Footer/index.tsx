/**@jsx jsx*/
import React from 'react'
import { jsx, css } from '@emotion/core'

export const Footer = () => {
  return (
    <footer
      css={css`
        background: #666;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <p
        css={css`
          font-size: 2em;
          color: #fff;
        `}
      >
        &copy; 2020 This project.
      </p>
    </footer>
  )
}
