/**@jsx jsx*/
import React from 'react'
import { jsx, css } from '@emotion/core'
import { FormContextWrapper } from './context'
import { InputFirstName } from './InputFirstName'
import { InputLastName } from './InputLastName'
import { InputEmail } from './InputEmail'
import { SubmitButton } from './SubmitButton'
import { CheckBoxAgreement } from './CheckBoxAgreement'
import { Headline } from './Headline'
import InViewMonitor from 'react-inview-monitor'

import { mobileBreakPoint } from '../../consitants'

export const Form = () => {
  return (
    <FormContextWrapper>
      <section
        css={css`
          width: 100vw;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        `}
      >
        <Headline />

        <InViewMonitor
          classNameNotInView='hidden'
          classNameInView='animate__animated animate__fadeIn slower'
        >
          <section
            css={css`
              //width: 100%;
              display: flex;
              flex-wrap: wrap;
              @media (max-width: ${mobileBreakPoint + 'px'}) {
                width: 96vw;
              }
            `}
          >
            <InputFirstName />

            <InputLastName />
            <InputEmail />
            <CheckBoxAgreement />
            <SubmitButton />
          </section>
        </InViewMonitor>
      </section>
    </FormContextWrapper>
  )
}
