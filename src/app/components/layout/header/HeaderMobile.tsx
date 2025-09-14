'use client';
import { useEffect } from 'react';
import { useCycle } from 'framer-motion';
import BurgerMenuBtn from './BurgerBtn';
import Sidebar from './Sidebar';
import { useLockBodyScroll } from '@/utilities/hooks/useLockBodyScroll';

const HeaderMobile = () => {
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
      <Sidebar isOpen={openSidebar} onNavigate={() => setOpenSidebar()} />
    </>
  );
};

const BodyScrollLocker = () => {
  useLockBodyScroll();
  return <></>;
};

export default HeaderMobile;
