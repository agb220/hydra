'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuLink from '../../MenuLink';
import Button from '../../Button';
import HeaderMobile from './HeaderMobile';
import { cn } from '@/utilities/cn';
import { MOCK_MENU } from '@/utilities/mocks';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="container fixed top-0 left-0 right-0 z-10">
      <div
        className={cn('flex items-center justify-between gap-5 pt-2', {
          'backdrop-blur-[2px] bg-[rgba(26,26,26,0.01)]': isScrolled,
        })}
      >
        <Link href="/" className="max-h-[65px] xl:max-h-[103px] grow max-w-[193px]">
          <Image
            src={'/images/logo/logo-group.svg'}
            alt={'Hydra: Dive Into The Depths Of Virtual Reality'}
            width={193}
            height={103}
            className="relative z-5 max-h-[65px] xl:max-h-[103px] w-auto"
          />
        </Link>
        <nav className="hidden xl:flex">
          <ul className="flex gap-[42px]">
            {MOCK_MENU.map((item, index) => (
              <li key={index} className="font-bold relative group text-sm">
                <MenuLink href={item.href} name={item.name} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden xl:flex gap-9">
          <Button variant="outline" className="min-w-[154px]" as={'a'} href="tel:+1101111010">
            CONTACT US
          </Button>
          <Button className="min-w-[154px]" as={'a'} href="#joinhydra">
            JOIN HYDRA
          </Button>
        </div>
        <div className="xl:hidden">
          <HeaderMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
