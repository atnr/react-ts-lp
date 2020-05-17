/**@jsx jsx*/
import React from 'react'
import { jsx, css } from '@emotion/core'
import { CardType } from './index'

export const Card = (props: CardType) => {
  const { title, description, imagePath } = props
  return (
    <section
      css={css`
        display: flex;
        flex-direction: row;
        width: 768px;
        margin-bottom: 5rem;
      `}
    >
      <section
        css={css`
          background: #eee;
          border-radius: 1em;
          width: calc(100% - 1em);
          margin-right: 1em;
        `}
      >
        {imagePath}
      </section>
      <section css={css``}>
        <h1
          css={css`
            font-size: 2em;
            margin: 0 0 1em 0;
          `}
        >
          {title}
        </h1>
        <section
          css={css`
            font-size: 2em;
          `}
        >
          {description}
        </section>
      </section>
    </section>
  )
}
