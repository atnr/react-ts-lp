/**@jsx jsx*/
import React from 'react'
import { jsx, css } from '@emotion/core'
import InViewMonitor from 'react-inview-monitor'

import { mobileBreakPoint } from '../../constants'

type CardType = {
  title: string
  description: string
  imagePath: string
}

export const Card = (props: CardType) => {
  const { title, description, imagePath } = props
  return (
    <section
      css={css`
        display: flex;
        flex-direction: row;
        width: 768px;
        margin-bottom: 5rem;
        @media (max-width: ${mobileBreakPoint + 'px'}) {
          width: 96vw;
          flex-direction: column;
        }
      `}
    >
      <section
        css={css`
          width: calc(50% - 2rem);
          margin-right: 2rem;
          @media (max-width: ${mobileBreakPoint + 'px'}) {
            width: 100%;
            margin-bottom: 3rem;
          }
        `}
      >
        <InViewMonitor
          classNameNotInView='hidden'
          classNameInView='animate__animated animate__fadeInLeft slower'
        >
          <img
            css={css`
              width: 100%;
              background: #eee;
              border-radius: 1rem;
              object-fit: cover;
            `}
            src={imagePath}
            alt={title}
          />
        </InViewMonitor>
      </section>
      <section
        css={css`
          width: 50%;
          @media (max-width: ${mobileBreakPoint + 'px'}) {
            width: 100%;
          }
        `}
      >
        <InViewMonitor
          classNameNotInView='hidden'
          classNameInView='animate__animated animate__fadeInRight slower'
        >
          <h1
            css={css`
              font-size: 2rem;
              margin: 0 0 1rem 0;
            `}
          >
            {title}
          </h1>
        </InViewMonitor>
        <InViewMonitor
          classNameNotInView='hidden'
          classNameInView='animate__animated animate__fadeInUp slower'
        >
          <section
            css={css`
              font-size: 2rem;
            `}
          >
            {description}
          </section>
        </InViewMonitor>
      </section>
    </section>
  )
}
