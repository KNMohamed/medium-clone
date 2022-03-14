import React from 'react'
import Link from 'next/link'
import HeaderMenuItem from './HeaderMenuItem'
import HeaderMenuItemLink from './HeaderMenuItemLink'
import styles from './Header.module.css'

function Header() {
  return (
    <React.Fragment>
      <header className="fixed inset-0 z-10 h-full w-full">
        <div className="flex justify-center border-b border-black">
          <div className="mx-6 w-full max-w-screen-xl md:mx-12 lg:mx-16">
            <div
              className={`${styles.headerHeight} flex items-center justify-between py-5`}
            >
              <div className="flex items-center">
                <Link href="/">
                  <img
                    src="https://links.papareact.com/yvf"
                    className="w-44 cursor-pointer object-contain"
                    alt="Medium logo"
                  />
                </Link>
              </div>
              <div className="flex items-center space-x-5">
                <HeaderMenuItem>
                  <HeaderMenuItemLink text="Our Story" href="/about" />
                </HeaderMenuItem>
                <HeaderMenuItem>
                  <HeaderMenuItemLink text="Membership" href="/membership" />
                </HeaderMenuItem>
                <HeaderMenuItem>
                  <HeaderMenuItemLink text="Write" href="/creators" />
                </HeaderMenuItem>
                <HeaderMenuItem>
                  <HeaderMenuItemLink text="Sign In" href="/signin" />
                </HeaderMenuItem>
                <div>
                  <span>
                    <Link href="/signin">
                      <button className="box-border cursor-pointer rounded-full border border-solid border-black bg-black px-4 py-2 text-sm text-white">
                        Get started
                      </button>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className={`${styles.headerHeight} block`} />
    </React.Fragment>
  )
}

export default Header
