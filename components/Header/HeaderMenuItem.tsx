import React from 'react'

const HeaderMenuItem: React.FC<React.ReactNode> = ({ children }) => {
  return <span className="hidden md:inline-flex">{children}</span>
}

export default HeaderMenuItem
