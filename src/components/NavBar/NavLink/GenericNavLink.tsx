import Link from 'next/link'

interface GenericNavLinkProps {
  href: string
  linkClass?: string
  children: React.ReactNode
}

const GenericNavLink: React.FC<GenericNavLinkProps> = ({ href, linkClass, children }) => {
  return (
    <Link href={href} className={`capitalize ${linkClass ?? ''}`}>
      {children}
    </Link>
  )
}

export default GenericNavLink
