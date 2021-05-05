/**@jsx jsx*/
import React from 'react'
import { jsx, css } from '@emotion/core'
import InViewMonitor from 'react-inview-monitor'

const wrapperStyle = css`
  background: #fff;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8rem;
  background: #666;
  color: #fff;
`
const headlineStyle = css`
  font-size: 3rem;
`

export const Headline = () => {
  return (
    <section css={wrapperStyle}>
      <InViewMonitor
        classNameNotInView='hidden'
        classNameInView='animate__animated animate__fadeInUp slower'
      >
        <h1 css={headlineStyle}>Form</h1>
      </InViewMonitor>
    </section>
  )
}
