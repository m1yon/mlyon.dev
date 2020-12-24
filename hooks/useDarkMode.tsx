import React, { useState, useContext, createContext } from 'react'

const DarkModeContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined)

type DarkModeProviderProps = {
  children: React.ReactNode
}

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const value = useState(false)

  return (
    <DarkModeContext.Provider value={value}>
      {children}
    </DarkModeContext.Provider>
  )
}

export const withDarkMode = (Component: (props: any) => React.ReactElement) => {
  return (props: any) => (
    <DarkModeProvider>
      <Component {...props} />
    </DarkModeProvider>
  )
}

const useDarkMode = () => {
  const context = useContext(DarkModeContext)

  if (!context) {
    throw new Error('useDarkMode must be used within a DarkModeProvider')
  }

  return context
}

export default useDarkMode
