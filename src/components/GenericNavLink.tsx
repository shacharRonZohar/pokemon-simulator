import Link from 'next/link'

interface GenericNavLinkProps {
  href: string
  children: React.ReactNode
}

const GenericNavLink: React.FC<GenericNavLinkProps> = ({ href, children }) => {
  return (
    <Link href={href} className="capitalize">
      {children}
    </Link>
  )
}

export default GenericNavLink
