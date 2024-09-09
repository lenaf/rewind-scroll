import Link from '../common/Link'
import Logo from '../common/Logo'
import MobileNav from '../nav/MobileNav';
import NavLinks from '../nav/NavLinks';

const Header = () => {
  return (
    <header className="-mb-24 bg-gradient-to-b from-base-100 from-10% to-transparent sticky top-0 w-full z-10">
      <div className='h-24 px-8 flex items-center justify-between uppercase'>
        <Link href="/" >
          <Logo width={80} />
        </Link>
        <div className="desktop">
          <NavLinks className="flex items-center gap-4 md:gap-8" />
        </div>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
