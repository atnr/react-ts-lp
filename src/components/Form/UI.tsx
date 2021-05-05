/**@jsx jsx*/
import React, { Fragment, useMemo, useCallback, useContext } from 'react'
import { jsx, css } from '@emotion/core'

import { Headline } from './Headline'
import { InputFirstName } from './InputFirstName'
import { InputLastName } from './InputLastName'
import { InputEmail } from './InputEmail'
import { SubmitButton } from './SubmitButton'
import { CheckBoxAgreement } from './CheckBoxAgreement'

import { mobileBreakPoint } from '../../constants'
import { useFormStateContext, initialFormData } from './context'

const wrapperStyle = css`
  width: ${mobileBreakPoint + 'px'};
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${mobileBreakPoint + 'px'}) {
    width: 96vw;
  }
`

export const UI = () => {
  const { dispatch } = useFormStateContext()

  const onChangeCheck = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      dispatch({ type: 'agreement', value: e.target.checked })
    },
    [dispatch]
  )
  const onChangeFirstName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'firstName', value: e.target.value })
    },
    [dispatch]
  )
  const onChangeLastName = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'lastName', value: e.target.value })
    },
    [dispatch]
  )

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'email', value: e.target.value })
    },
    [dispatch]
  )
  const onClickSubmit = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      //Set your endpoint here
      alert('Set your endpoint here')

      //reset form data
      return dispatch({ type: 'reset', initialState: initialFormData })
    },
    [dispatch]
  )

  return useMemo(() => {
    return (
      <Fragment>
        <Headline />
        <section css={wrapperStyle}>
          <InputFirstName onChange={onChangeFirstName} />
          <InputLastName onChange={onChangeLastName} />
          <InputEmail onChange={onChangeEmail} />
          <CheckBoxAgreement onChange={onChangeCheck} />
          <SubmitButton onClick={onClickSubmit} />
        </section>
      </Fragment>
    )
  }, [
    onChangeCheck,
    onChangeEmail,
    onChangeFirstName,
    onChangeLastName,
    onClickSubmit,
  ])
}
