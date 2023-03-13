import { createContext, useState } from "react";
export const EcommerceContext = createContext()

export default function EcommerceProvider({ children }) {

  const [loading, setLoading] = useState(false)

  const context = {
    loading,
    setLoading    
  }
  
  return (
    <EcommerceContext.Provider value={context}>
      {children}
    </EcommerceContext.Provider>
  )
}