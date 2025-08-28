'use client';
import { useEffect } from 'react';
import { useCycle } from 'framer-motion';

import BurgerMenuBtn from './BurgerBtn';
import Sidebar from '../Sidebar';
import { useLockBodyScroll } from '@/utilities/hooks/useLockBodyScroll';

export interface HeaderMobileProps {}

const HeaderMobile = (props: HeaderMobileProps) => {
  const [openSidebar, setOpenSidebar] = useCycle<boolean>(false, true);

  useEffect(() => {
    const appHeight = () => {
      const doc = document.documentElement;
      doc.style.setProperty('--app-height', `${document.documentElement.clientHeight}px`);
    };
    window.addEventListener('resize', appHeight);
    appHeight();
  }, []);

  return (
    <>
      {openSidebar ? <BodyScrollLocker /> : <></>}

      <BurgerMenuBtn animateToClose={openSidebar} onClick={() => setOpenSidebar()} />
      <Sidebar
        {...props}
        isOpen={openSidebar}
        onNavigate={() => setOpenSidebar()}
        // socialMedia={props.socialMedia}
      />
    </>
  );
};

const BodyScrollLocker = () => {
  useLockBodyScroll();
  return <></>;
};

export default HeaderMobile;
