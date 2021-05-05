import React, {
  useState,
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from 'react'

import { FormData, FormAction, formReducer } from './reducer'

export type FormStateContextType = {
  state: FormData
  dispatch: Dispatch<FormAction>
}
export type FormDispatchContextType = {
  dispatch: Dispatch<FormAction>
}

export const initialFormData: FormData = {
  lastName: '',
  firstName: '',
  email: '',
  agreement: false,
}

export const FormStateContext = createContext<FormStateContextType>({
  state: initialFormData,
  dispatch: () => {},
})
export const FormDispatchContext = createContext<FormDispatchContextType>({
  dispatch: () => {},
})

export const useFormStateContext = () => useContext(FormStateContext)

export const FormContextWrapper = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(formReducer, initialFormData)
  return (
    <FormStateContext.Provider value={{ state, dispatch }}>
      {children}
    </FormStateContext.Provider>
  )
}
