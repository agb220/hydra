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
        className="fixed right-0 top-[65px] xl:top-[110px] h-svh w-full overflow-hidden z-40"
        variants={sidebarAnimation}
        initial={false}
        animate={props.isOpen ? 'open' : 'closed'}
        style={{
          height: 'var(--app-height)',
        }}
      >
        <div className="h-[calc(100%-53px)] md:h-[calc(100%-60px)] bg-bg-purple overflow-auto">
          <div className="flex w-full flex-col justify-between h-full">
            <nav className="pr-1 mt-6">
              <div className="container">
                <ul className="flex flex-col gap-4 relative z-10">
                  {MOCK_MENU.map((menu, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 * index }}
                      viewport={{ once: false, amount: 0.3 }}
                    >
                      <SidebarNavLink
                        href={menu.href}
                        name={menu.name}
                        onNavigate={props.onNavigate}
                      />
                    </motion.li>
                  ))}
                </ul>
              </div>
            </nav>
            <motion.div
              className="container flex flex-col md:flex-row gap-8 py-10 md:py-16 lg:py-18 xl:py-6 border-white border-t items-center md:justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.div
                className="w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Button
                  variant="outline"
                  className="w-full md:w-fit text-base max-h-[52px]"
                  as={'a'}
                  href="tel:+1101111010"
                >
                  CONTACT US
                </Button>
              </motion.div>
              <motion.div
                className="w-full"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <Button
                  className="w-full  md:w-fit text-base max-h-[52px]"
                  as="a"
                  href="#joinhydra"
                  onClick={props.onNavigate}
                >
                  JOIN HYDRA
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export const SidebarNavLink = (props: { href: string; name: string; onNavigate: () => void }) => {
  return (
    <Link href={props.href} className="text-base px-2 py-5 text-white" onClick={props.onNavigate}>
      {props.name}
    </Link>
  );
};
export default Sidebar;
