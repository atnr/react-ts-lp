import React, {
  useState,
  createContext,
  Dispatch,
  ReactNode,
  useContext,
} from 'react'

export type FormData = {
  lastName: string
  firstName: string
  email: string
  agreement: boolean
}

export type FormContextType = {
  formData: FormData
  setFormData: Dispatch<FormData>
}

export const initialFormData: FormData = {
  lastName: '',
  firstName: '',
  email: '',
  agreement: false,
}

export const FormContext = createContext<FormContextType>({
  formData: initialFormData,
  setFormData: () => {},
})

export const useFormContext = () => useContext(FormContext)

export const FormContextWrapper = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<FormData>(initialFormData)
  return (
    <FormContext.Provider value={{ formData, setFormData }}>
      {children}
    </FormContext.Provider>
  )
}
