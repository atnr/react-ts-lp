/**@jsx jsx*/
import React from 'react'
import { jsx, css } from '@emotion/core'
import { useFormContext, initialFormData } from './context'
import { isValidData } from './functions/isValidData'
import InViewMonitor from 'react-inview-monitor'
import { mobileBreakPoint } from '../../constants'

export const SubmitButton = () => {
  const { formData, setFormData } = useFormContext()
  const onClickHandle = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    //Set your endpoint here
    alert('Set your endpoint here')

    //reset form data
    return setFormData(initialFormData)
  }
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: center;
      `}
    >
      <InViewMonitor
        classNameNotInView='hidden'
        classNameInView='animate__animated animate__fadeInUp slower'
      >
        <button
          css={css`
            width: 300px;
            font-size: 2rem;
            padding: 2rem 0.25rem;
            border-radius: 5px;
            border: 0;
            background: ${isValidData(formData) ? '#666' : '#aaa'};
            color: #fff;
            @media (max-width: ${mobileBreakPoint + 'px'}) {
              width: 90vw;
            }
          `}
          onClick={(e) => onClickHandle(e)}
          disabled={!isValidData(formData)}
        >
          Submit
        </button>
      </InViewMonitor>
    </div>
  )
}
