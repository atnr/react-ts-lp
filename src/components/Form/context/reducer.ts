export type FormData = {
  lastName: string
  firstName: string
  email: string
  agreement: boolean
}

export type FormAction =
  | { type: 'email'; value: string }
  | { type: 'lastName'; value: string }
  | { type: 'firstName'; value: string }
  | { type: 'agreement'; value: boolean }
  | { type: 'reset'; initialState: FormData }

export const formReducer = (state: FormData, action: FormAction) => {
  switch (action.type) {
    case 'email': {
      return { ...state, email: action.value }
    }
    case 'firstName': {
      return { ...state, firstName: action.value }
    }
    case 'lastName': {
      return { ...state, lastName: action.value }
    }
    case 'agreement': {
      return { ...state, agreement: action.value }
    }
    case 'reset': {
      return { ...state, ...action.initialState }
    }
  }
}
