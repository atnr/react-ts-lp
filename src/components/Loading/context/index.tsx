import React, { useState, createContext, Dispatch, ReactNode, useContext } from 'react'

export type LoadingContextType = {
  isLoading: boolean
  setIsLoading: Dispatch<boolean>
}

export const initialLoadingState = true

export const LoadingContext = createContext<LoadingContextType>({
  isLoading: initialLoadingState,
  setIsLoading: () => {},
})

export const LoadingContextWrapper = ({
  children,
}: {
  children: ReactNode
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(initialLoadingState)
  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

export const useLoadingContext = () => useContext(LoadingContext)