/**@jsx jsx*/
import React, { useContext } from 'react'
import { jsx, css } from '@emotion/core'
import { FormContext } from './context'

export const InputFirstName = () => {
  const { formData, setFormData } = useContext(FormContext)
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, firstName: e.target.value })
  }
  return (
    <div
      css={css`
        width: 50%;
        margin-bottom: 2em;
      `}
    >
      <h2
        css={css`
          font-size: 2em;
        `}
      >
        First Name
      </h2>
      <input
        value={formData.firstName}
        css={css`
          font-size: 2em;
          padding: 0.25em;
          border-radius: 5px;
          border: 0;
        `}
        onChange={(e) => onChangeHandle(e)}
        placeholder='firstName'
      />
    </div>
  )
}
