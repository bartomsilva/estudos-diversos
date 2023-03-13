import { createContext, useState } from "react";
export const EcommerceContext = createContext()

export default function EcommerceProvider({ children }) {

  const [isLogin, setIsLogin] = useState([])

  const context = {
    isLogin,
    setIsLogin    
  }
  
  return (
    <EcommerceContext.Provider value={context}>
      {children}
    </EcommerceContext.Provider>
  )
}