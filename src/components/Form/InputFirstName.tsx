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
        width: calc((100% - 2em) / 2);
        margin-right: 2em;
        margin-bottom: 4em;
        display: flex;
        flex-direction: column;
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
          border: 1px solid #ccc;
        `}
        onChange={(e) => onChangeHandle(e)}
        placeholder='firstName'
      />
    </div>
  )
}
