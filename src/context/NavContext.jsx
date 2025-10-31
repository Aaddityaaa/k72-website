import React, { createContext, useState } from 'react'

export const FullNavContext = createContext();

const NavContext = ({children}) => {

    

    const [navOpen, setNavOpen] = useState(false)
  return (
    <div>
        <FullNavContext.Provider value={[navOpen,setNavOpen]}>
            {children}
        </FullNavContext.Provider>
    </div>
  )
}

export default NavContext
