/**@jsx jsx*/
import React, { useContext } from 'react'
import { jsx, css } from '@emotion/core'
import { FormContext, initialFormData } from './context'
import { isValidData } from './functions/isValidData'

export const SubmitButton = () => {
  const { formData, setFormData } = useContext(FormContext)
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
      <button
        value={formData.lastName}
        css={css`
          width: 50%;
          font-size: 2em;
          padding: 0.25em;
          border-radius: 5px;
          border: 0;
          background: ${isValidData(formData) ? '#666' : '#aaa'};
          color: #fff;
        `}
        onClick={(e) => onClickHandle(e)}
        disabled={!isValidData(formData)}
      >
        Submit
      </button>
    </div>
  )
}
