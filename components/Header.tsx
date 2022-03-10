import React from 'react'
import Link from 'next/link'
import Logo from './Logo'
function Header() {
  return (
    <header>
      <div className="flex items-center space-x-5">
        <Link href="/">
          <Logo />
        </Link>
        <div className="hidden items-center space-x-5 md:inline-flex">
          <h3>About</h3>
          <h3>Contact</h3>
          <h3>Follow</h3>
        </div>
      </div>
    </header>
  )
}

export default Header
