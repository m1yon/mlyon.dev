import React, { useState, useContext, createContext, useEffect } from 'react'

const DarkModeContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined)

type DarkModeProviderProps = {
  children: React.ReactNode
}

export const DarkModeProvider = ({ children }: DarkModeProviderProps) => {
  const value = useState(false)
  const [darkMode, setDarkMode] = value

  // grab the initial value from local storage
  useEffect(() => {
    // if this isn't running on the browser then just return
    if (typeof window === undefined) return

    // grab the value from local storage
    const localStorageValue = localStorage.getItem('darkMode')

    // if the stored value is true, then set darkMode to true
    if (localStorageValue === 'true') return setDarkMode(true)

    // if the stored value is false, then set darkMode to false
    if (localStorageValue === 'false') return setDarkMode(false)

    // if the stored value is undefined or invalid, then use the default system settings
    setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches)
  }, [])

  // update local storage when context changes
  useEffect(() => {
    localStorage.setItem('darkMode', darkMode.toString())
  }, [value])

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
