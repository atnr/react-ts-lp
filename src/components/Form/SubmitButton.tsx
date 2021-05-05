/**@jsx jsx*/
import React, { useCallback, useMemo } from 'react'
import { jsx, css } from '@emotion/core'
import { useFormStateContext } from './context'
import { isValidData } from './functions/isValidData'
import InViewMonitor from 'react-inview-monitor'
import { mobileBreakPoint } from '../../constants'

type Props = {
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const wrapperStyle = css`
  width: 100%;
  display: flex;
  justify-content: center;
`
const buttonStyle = css`
  width: 300px;
  font-size: 2rem;
  padding: 2rem 0.25rem;
  border-radius: 5px;
  border: 0;
  color: #fff;
  @media (max-width: ${mobileBreakPoint + 'px'}) {
    width: 90vw;
  }
`

export const SubmitButton = (props: Props) => {
  const { onClick } = props
  const { state } = useFormStateContext()

  return useMemo(() => {
    return (
      <div css={wrapperStyle}>
        <InViewMonitor
          classNameNotInView='hidden'
          classNameInView='animate__animated animate__fadeInUp slower'
        >
          <button
            css={css`
              ${buttonStyle}
              background: ${isValidData(state) ? '#666' : '#aaa'};
            `}
            onClick={onClick}
            disabled={!isValidData(state)}
          >
            Submit
          </button>
        </InViewMonitor>
      </div>
    )
  }, [onClick, state])
}
