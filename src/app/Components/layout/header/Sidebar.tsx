'use client';

import Link from 'next/link';
import type { Variants } from 'framer-motion';
import { motion } from 'framer-motion';

import Button from '../../Button';
import { MOCK_MENU } from '@/utilities/mocks';

interface SidebarProps {
  isOpen: boolean;
  onNavigate: () => void;
}

const sidebarAnimation: Variants = {
  open: {
    x: 0,
    transition: { duration: 0.5 },
  },
  closed: {
    x: '-100%',
    transition: { duration: 0.5 },
  },
};

const Sidebar = (props: SidebarProps) => {
  return (
    <>
      <motion.div
        className="fixed right-0 top-[65px] xl:top-[110px] h-svh w-screen overflow-hidden z-40"
        variants={sidebarAnimation}
        initial={false}
        animate={props.isOpen ? 'open' : 'closed'}
        style={{
          height: 'var(--app-height)',
        }}
      >
        <div className="h-[calc(100%-73px)] md:h-[calc(100%-103px)] bg-bg-purple overflow-auto">
          <div className="flex w-full flex-col justify-between h-full">
            <nav className="pr-1 mt-6">
              <div className="container">
                <div className="flex flex-col gap-4 relative z-10">
                  {MOCK_MENU.map((menu, index) => (
                    <SidebarNavLink
                      href={menu.href}
                      name={menu.name}
                      onNavigate={props.onNavigate}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </nav>
            <div className="container flex flex-col gap-8 py-5 md:py-16 lg:py-18 xl:py-6 border-top-white border-top">
              <Button variant="outline" className="w-full text-base max-h-[52px]">
                CONTACT US
              </Button>
              <Button className="w-full text-base max-h-[52px]">JOIN HYDRA</Button>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export const SidebarNavLink = (props: { href: string; name: string; onNavigate: () => void }) => {
  return (
    <Link href={props.href} className="text-base px-2 py-5 text-white " onClick={props.onNavigate}>
      {props.name}
    </Link>
  );
};
export default Sidebar;
