import Link from './Link'
import MobileNav from './MobileNav'
import Logo from './Logo'
import siteData from '@/data/index';

const Header = () => {
  return (
    <header className="flex items-center justify-between py-10">
      <div>
        <Link href="/" aria-label="GLYS">
          <Logo />
        </Link>
      </div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {siteData.routes.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
          >
            {link.title}
          </Link>
        ))}
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
