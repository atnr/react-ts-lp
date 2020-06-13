/**@jsx jsx*/
import React, { useMemo } from 'react'
import { jsx, css } from '@emotion/core'
import { useFormContext } from './context'
import InViewMonitor from 'react-inview-monitor'

export const InputEmail = () => {
  const { formData, setFormData } = useFormContext()
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, email: e.target.value })
  }

  return useMemo(() => {
    return (
      <div
        css={css`
          width: 100%;
          margin-bottom: 4rem;
          display: flex;
          flex-direction: column;
        `}
      >
        <InViewMonitor
          classNameNotInView='hidden'
          classNameInView='animate__animated animate__fadeInUp slower'
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
              padding: 0.5rem 1rem;
              width: calc(100% - 2rem);
              border-radius: 5px;
              border: 1px solid #ccc;
            `}
            onChange={(e) => onChangeHandle(e)}
            placeholder='hoge@example.com'
          />
        </InViewMonitor>
      </div>
    )
  }, [formData.email])
}
