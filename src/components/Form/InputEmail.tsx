/**@jsx jsx*/
import React, { useContext } from 'react'
import { jsx, css } from '@emotion/core'
import { FormContext } from './context'

export const InputEmail = () => {
  const { formData, setFormData } = useContext(FormContext)
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value })
  }
  return (
    <div
      css={css`
        width: 100%;
        margin-bottom: 4rem;
        display: flex;
        flex-direction: column;
      `}
    >
      <h2
        css={css`
          font-size: 2rem;
        `}
      >
        Email
      </h2>
      <input
        value={formData.email}
        css={css`
          font-size: 2rem;
          padding: 0.25rem;
          border-radius: 5px;
          border: 1px solid #ccc;
        `}
        onChange={(e) => onChangeHandle(e)}
        placeholder='hoge@example.com'
      />
    </div>
  )
}
