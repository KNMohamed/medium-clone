import Link from 'next/link'
import React from 'react'

interface HeaderMenuItemLinkProps {
  text: string
  href: string
}

const HeaderMenuItemLink: React.FC<HeaderMenuItemLinkProps> = ({
  text,
  href,
}) => {
  return (
    <p className="text-left text-sm">
      <Link href={href}>{text}</Link>
    </p>
  )
}

export default HeaderMenuItemLink
