'use client';
import Link from 'next/link';
import Logo from './ui/logo';
import { useRouter } from 'next/router';
import { GiHamburgerMenu, GiCancel } from 'react-icons/gi';
import { useState } from 'react';

export default function Header() {
  const [isMenuModal, setIsMenuModal] = useState(false);
  const router = useRouter();

  return (
    <header className="flex justify-between">
      <Logo />
      <nav
        className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden z-50 ${
          isMenuModal === true && '!grid place-content-center'
        }`}
      >
        <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
          <li
            className={`px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer ${
              router.asPath === '/' && 'text-primary'
            }}`}
            onClick={() => setIsMenuModal(false)}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer ${
              router.asPath === '/menu' && 'text-primary'
            }`}
            onClick={() => setIsMenuModal(false)}
          >
            <Link href="/menu">Menu</Link>
          </li>
          <li
            className={`px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer ${
              router.asPath === '/about' && 'text-primary'
            }`}
            onClick={() => setIsMenuModal(false)}
          >
            <Link href="/about">About</Link>
          </li>
          <li
            className={`px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer ${
              router.asPath === '/reservation' && 'text-primary'
            }`}
            onClick={() => setIsMenuModal(false)}
          >
            <Link href="/reservation">Book Table</Link>
          </li>
        </ul>
        {isMenuModal && (
          <button className="absolute  top-4 right-4 z-50" onClick={() => setIsMenuModal(false)}>
            <GiCancel size={25} className=" transition-all" />
          </button>
        )}
      </nav>
      <div className="flex"></div>
    </header>
  );
}
