/**@jsx jsx*/
import React from 'react'
import { jsx, css } from '@emotion/core'
import { FormContextWrapper } from './context'
import { UI } from './UI'

const wrapperStyle = css`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Form = () => {
  return (
    <FormContextWrapper>
      <section css={wrapperStyle}>
        <UI />
      </section>
    </FormContextWrapper>
  )
}
