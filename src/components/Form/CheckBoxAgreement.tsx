/**@jsx jsx*/
import React, { useContext } from 'react'
import { jsx, css } from '@emotion/core'
import { FormContext } from './context'

export const CheckBoxAgreement = () => {
  const { formData, setFormData } = useContext(FormContext)
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, agreement: e.target.checked })
  }
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 2em;
      `}
    >
      <input
        css={css`
          font-size: 2em;
          padding: 0.25em;
          border-radius: 5px;
          border: 0;
        `}
        type='checkbox'
        checked={formData.agreement}
        onChange={(e) => onChangeHandle(e)}
      />
      <p
        css={css`
          font-size: 2em;
        `}
      >
        I checked all input information.
      </p>
    </div>
  )
}
