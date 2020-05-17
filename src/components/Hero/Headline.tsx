/**@jsx jsx*/
import React from 'react'
import { jsx, css } from '@emotion/core'
import InViewMonitor from 'react-inview-monitor'
import 'animate.css'

export const Headline = () => {
  return (
    <InViewMonitor
      classNameNotInView='hidden'
      classNameInView='animate__animated animate__fadeIn delay-1s slower'
    >
      <h1
        css={css`
          margin: 0;
          font-size: 6rem;
        `}
      >
        HERO is here
      </h1>
    </InViewMonitor>
  )
}
