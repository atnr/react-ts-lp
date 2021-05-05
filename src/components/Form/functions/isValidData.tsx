import { FormData } from '../context/reducer'

export const isValidData = (formData: FormData) => {
  if (formData.firstName === '') return false
  if (formData.lastName === '') return false
  if (formData.email.match(/.+@.+\..+/) === null) return false
  if (formData.agreement === false) return false
  return true
}
