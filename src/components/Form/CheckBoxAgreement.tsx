/**@jsx jsx*/
import React, { useCallback, useMemo } from 'react'
import { jsx, css } from '@emotion/core'
import { useFormStateContext } from './context'
import InViewMonitor from 'react-inview-monitor'

const wrapperStyle = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
`
const inputStyle = css`
  font-size: 2rem;
  padding: 0.25rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`
const labelStyle = css`
  font-size: 2rem;
`

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const CheckBoxAgreement = (props: Props) => {
  const { onChange } = props
  const { state } = useFormStateContext()

  return useMemo(() => {
    return (
      <div css={wrapperStyle}>
        <InViewMonitor
          classNameNotInView='hidden'
          classNameInView='animate__animated animate__fadeInUp slower'
        >
          <input
            css={inputStyle}
            type='checkbox'
            checked={state.agreement}
            onChange={onChange}
          />
          <label css={labelStyle}>I checked all input information.</label>
        </InViewMonitor>
      </div>
    )
  }, [onChange, state.agreement])
}
