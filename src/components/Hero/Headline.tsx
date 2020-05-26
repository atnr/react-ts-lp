/**@jsx jsx*/
import React from 'react'
import { jsx, css } from '@emotion/core'
import InViewMonitor from 'react-inview-monitor'
import 'animate.css'

export const Headline = () => {
  return (
    <div
      css={css`
        z-index: 999;
      `}
    >
      <InViewMonitor
        classNameNotInView='hidden'
        classNameInView='animate__animated animate__fadeInUp slower'
      >
        <div
          css={css`
            background: #333;
            padding: 0.5em 2em;
          `}
        >
          <h1
            css={css`
              margin: 0;
              font-size: 6rem;
              color: #fff;
            `}
          >
            HERO is here
          </h1>
        </div>
      </InViewMonitor>
    </div>
  )
}
