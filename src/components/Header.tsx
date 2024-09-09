import Link from './common/Link'
import MobileNav from './MobileNav'
import Logo from './common/Logo'
import siteData from '@/data/siteData';
import LinkAsButton from './common/LinkAsButton';

const Header = () => {
  return (
    <header className="-mb-24 bg-gradient-to-b from-base-100 from-10% to-transparent sticky top-0 w-full z-10">
      <div className='h-24 px-8 flex items-center justify-between uppercase'>
        <div>
          <Link href="/" >
            <Logo width={80} />
          </Link>
        </div>
        <div className='desktop'>
          <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
            {siteData.routes.map((link) => (
              <Link
                key={link.title}
                href={link.href}
              >
                {link.title}
              </Link>
            ))}
            <LinkAsButton className="btn-primary " href="/" target="_blank">Trailer</LinkAsButton>
          </div>
        </div>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
