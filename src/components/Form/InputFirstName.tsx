/**@jsx jsx*/
import React, { useMemo, useCallback } from 'react'
import { jsx, css } from '@emotion/core'
import { useFormStateContext } from './context'
import InViewMonitor from 'react-inview-monitor'

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputFirstName = (props: Props) => {
  const { onChange } = props
  const { state } = useFormStateContext()

  return useMemo(() => {
    return (
      <div
        css={css`
          width: calc((100% - 2rem) / 2);
          margin-right: 2rem;
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
            First Name
          </h2>
          <input
            value={state.firstName}
            css={css`
              font-size: 2rem;
              padding: 0.5rem 1rem;
              border-radius: 5px;
              border: 1px solid #ccc;
              width: calc(100% - 2rem);
            `}
            onChange={onChange}
            placeholder='firstName'
          />
        </InViewMonitor>
      </div>
    )
  }, [onChange, state.firstName])
}
