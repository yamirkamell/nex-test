'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MdOutlineHome, MdFavoriteBorder } from "react-icons/md";

const links = [
  { name: 'Home',
    href: '/home',
    icon: <MdOutlineHome />
  },
  { name: 'Favorites',
    href: '/favorites',
    icon: <MdFavoriteBorder />
  }
]
const Header = () => {
  const pathname = usePathname()
  return (
    <header className='fixed w-full left-0 top-0 z-50 bg-[#0D7377] h-[74px]'>
      <div className='container mx-auto flex items-center justify-between p-5 lg:py-5 lg:px-5'>
        <section>
          <Link
            href='/home'
            className='font-bold text-[#D4D4D4] flex items-center text-3xl'
          >
            Aninex
          </Link>
        </section>
        <section>
          <ul className='hidden md:flex items-center gap-x-8'>
            {links.map((link)=>
            <li key={link.name}>
              <Link
                href={link.href}
                className={`flex items-center justify-between gap-x-2 text-xl text-[#D4D4D4]
                ${pathname === link.href ? 'font-semibold border-b-2 border-[#FF567F]' : 'font-normal border-b-2 border-[transparent]'}
                `}
              >
                {link.icon} {link.name}
              </Link>
            </li>
            )}
          </ul>
          <div className='relative md:hidden flex items-center gap-8'>
            {links.map((link)=>
              <Link key={link.name} href={link.href}
               className={`flex items-center justify-between gap-x-2 text-xl text-[#D4D4D4]
                ${pathname === link.href ? 'font-semibold border-b-2 border-[#FF567F]' : 'font-normal border-b-2 border-[transparent]'}
               `}
              > 
                {link.icon} 
              </Link>)}
          </div>
        </section>
      </div>
    </header>
  );
};

export default Header;