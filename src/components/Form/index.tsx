/**@jsx jsx*/
import React from 'react'
import { jsx, css } from '@emotion/core'
import { FormContextWrapper } from './context'
import { InputFirstName } from './InputFirstName'
import { InputLastName } from './InputLastName'
import { InputEmail } from './InputEmail'
import { SubmitButton } from './SubmitButton'
import { CheckBoxAgreement } from './CheckBoxAgreement'

export const Form = () => {
  return (
    <FormContextWrapper>
      <section
        css={css`
          width: 100vw;
          height: 100vh;
          background: #ccc;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <h1
          css={css`
            font-size: 2em;
          `}
        >
          Form
        </h1>
        <section
          css={css`
            width: 50%;

            display: flex;
            flex-wrap: wrap;
          `}
        >
          <InputFirstName />
          <InputLastName />
          <InputEmail />
          <CheckBoxAgreement />
          <SubmitButton />
        </section>
      </section>
    </FormContextWrapper>
  )
}
