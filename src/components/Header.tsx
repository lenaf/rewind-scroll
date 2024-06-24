import Link from './Link'
import MobileNav from './MobileNav'
import Logo from './Logo'
import siteData from '@/data/siteData';
import LinkAsButton from './LinkAsButton';

const Header = () => {
  return (
    <header className="flex items-center justify-between py-6 px-4">
      <div>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className='hidden sm:block'>
        <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
          {siteData.routes.map((link) => (
            <Link
              key={link.title}
              href={link.href}
            >
              {link.title}
            </Link>
          ))}
          <LinkAsButton className="btn-primary " href="https://givebutter.com/give2glys" target="_blank">Donate</LinkAsButton>
        </div>
      </div>
      <MobileNav />
    </header>
  )
}

export default Header
