/**@jsx jsx*/
import React, { useMemo, useCallback } from 'react'
import { jsx, css } from '@emotion/core'
import { useFormStateContext } from './context'
import InViewMonitor from 'react-inview-monitor'

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputEmail = (props: Props) => {
  const { onChange } = props
  const { state } = useFormStateContext()

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
            value={state.email}
            css={css`
              font-size: 2rem;
              padding: 0.5rem 1rem;
              width: calc(100% - 2rem);
              border-radius: 5px;
              border: 1px solid #ccc;
            `}
            onChange={onChange}
            placeholder='hoge@example.com'
          />
        </InViewMonitor>
      </div>
    )
  }, [onChange, state.email])
}
