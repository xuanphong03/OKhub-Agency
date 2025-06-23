'use client'
import React, {createContext, useState} from 'react'
interface AppContextType {
  openMenuMobile: boolean
  setOpenMenuMobile: React.Dispatch<React.SetStateAction<boolean>>
}
interface AppProviderProps {
  children: React.ReactNode
}
export const AppContext = createContext<AppContextType | null>(null)

export default function AppProvider({children}: AppProviderProps) {
  const [openMenuMobile, setOpenMenuMobile] = useState<boolean>(false)
  return (
    <AppContext.Provider value={{openMenuMobile, setOpenMenuMobile}}>
      {children}
    </AppContext.Provider>
  )
}
