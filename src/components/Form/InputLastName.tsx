/**@jsx jsx*/
import React, { useMemo } from 'react'
import { jsx, css } from '@emotion/core'
import { useFormContext } from './context'
import InViewMonitor from 'react-inview-monitor'

export const InputLastName = () => {
  const { formData, setFormData } = useFormContext()
  const onChangeHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, lastName: e.target.value })
  }

  return useMemo(() => {
    return (
      <div
        css={css`
          width: calc((100% - 2rem) / 2);
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
              font-size: 2em;
            `}
          >
            Last Name
          </h2>
          <input
            value={formData.lastName}
            css={css`
              font-size: 2rem;
              padding: 0.5rem 1rem;
              border-radius: 5px;
              border: 1px solid #ccc;
              width: calc(100% - 2rem);
            `}
            onChange={(e) => onChangeHandle(e)}
            placeholder='lastName'
          />
        </InViewMonitor>
      </div>
    )
  }, [formData.lastName])
}
