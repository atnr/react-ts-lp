/**@jsx jsx*/
import React from 'react'
import { jsx, css } from '@emotion/core'
import InViewMonitor from 'react-inview-monitor'

export const Headline = () => {
  return (
    <section
      css={css`
        background: #fff;
        width: 100vw;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8rem;
        background: #666;
        color: #fff;
      `}
    >
      <InViewMonitor
        classNameNotInView='hidden'
        classNameInView='animate__animated animate__fadeInUp slower'
      >
        <h1
          css={css`
            font-size: 3rem;
          `}
        >
          Form
        </h1>
      </InViewMonitor>
    </section>
  )
}
