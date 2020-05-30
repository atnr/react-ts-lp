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
        margin-bottom: 4rem;
      `}
    >
      <input
        css={css`
          font-size: 2rem;
          padding: 0.25rem;
          border-radius: 5px;
          border: 1px solid #ccc;
        `}
        type='checkbox'
        checked={formData.agreement}
        onChange={(e) => onChangeHandle(e)}
      />
      <label
        css={css`
          font-size: 2rem;
        `}
      >
        I checked all input information.
      </label>
    </div>
  )
}
