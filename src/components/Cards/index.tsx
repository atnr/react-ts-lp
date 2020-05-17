/**@jsx jsx*/
import React from 'react'
import { jsx, css } from '@emotion/core'
import cards from './data.json'
import { Card } from './Card'

export type CardType = {
  title: string
  description: string
  imagePath: string
}

export const Cards = () => {
  return (
    <section
      css={css`
        display: flex;
        justify-content: center;
        padding: 10vh;
      `}
    >
      <section css={css``}>
        {cards.map((item: CardType, index: number) => {
          return (
            <Card
              title={item.title}
              description={item.description}
              imagePath={item.imagePath}
              key={index}
            />
          )
        })}
      </section>
    </section>
  )
}
