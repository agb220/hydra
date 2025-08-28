import Image from 'next/image';

import MenuLink from '../../MenuLink';
import Button from '../../Button';
import HeaderMobile from './HeaderMobile';

export const MOCK_MENU = [
  {
    name: 'ABOUT',
    href: '#about',
  },
  {
    name: 'SERVICES',
    href: '#services',
  },
  {
    name: 'TECHNOLOGIES',
    href: '#technologies',
  },
  {
    name: 'HOW TO',
    href: '#howto',
  },
];

const Header = () => {
  return (
    <header className="container fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between gap-5 pt-2">
        <div className="max-h-[65px] xl:max-h-[103px] grow max-w-[193px]">
          <Image
            src={'/images/logo/logo-group.svg'}
            alt={'Hydra: Dive Into The Depths Of Virtual Reality'}
            width={193}
            height={103}
            className="relative z-5 max-h-[65px] xl:max-h-[103px] w-auto"
          />
        </div>
        <nav className="hidden xl:flex">
          <ul className="flex gap-[42px]">
            {MOCK_MENU.map((item, index) => (
              <li key={index} className="font-bold relative group">
                <MenuLink href={item.href} name={item.name} />
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden xl:flex gap-9">
          <Button variant="outline">CONTACT US</Button>
          <Button>JOIN HYDRA</Button>
        </div>
        <div className="xl:hidden">
          <HeaderMobile />
        </div>
      </div>
    </header>
  );
};

export default Header;
