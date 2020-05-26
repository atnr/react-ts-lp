/**@jsx jsx*/
import React, { useContext } from 'react'
import { jsx, css } from '@emotion/core'
import { FormContext } from './context'

export const InputLastName = () => {
  const { formData, setFormData } = useContext(FormContext)
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, lastName: e.target.value })
  }
  return (
    <div
      css={css`
        width: calc((100% - 2rem) / 2);
        display: flex;
        flex-direction: column;
      `}
    >
      <h2
        css={css`
          font-size: 2em;
        `}
      >
        Last Name
      </h2>
      <input
        value={formData.lastName}
        css={css`
          font-size: 2rem;
          padding: 0.25rem;
          border-radius: 5px;
          border: 1px solid #ccc;
        `}
        onChange={(e) => onChangeHandle(e)}
        placeholder='lastName'
      />
    </div>
  )
}
