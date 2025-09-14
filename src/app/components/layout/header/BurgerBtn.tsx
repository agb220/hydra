import { motion } from 'framer-motion';
import { cn } from '@/utilities/cn';

const BurgerMenuBtn = ({
  animateToClose,
  onClick,
}: {
  animateToClose: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className="relative z-[100] block h-4 w-[22px] cursor-pointer  backdrop-blur-sm"
      onClick={onClick}
    >
      <motion.div
        className={cn('absolute left-0 top-0 h-0.5 w-full rounded-md bg-white', {
          'bg-white': !animateToClose,
        })}
        style={{
          transformOrigin: 'top left',
        }}
        variants={{
          open: {
            rotate: 45,
          },
          closed: {
            rotate: 0,
          },
        }}
        transition={{
          duration: 0.2,
        }}
        initial={false}
        animate={animateToClose ? 'open' : 'closed'}
      />
      <motion.div
        className={cn('absolute left-0 top-1/2 h-0.5 w-full rounded-md bg-white', {
          'bg-white': !animateToClose,
        })}
        style={{
          translateY: '-50%',
        }}
        variants={{
          open: {
            x: 20,
            opacity: 0,
            width: '100%',
          },
          closed: {
            x: 0,
            opacity: 1,
            width: '100%',
          },
        }}
        transition={{
          duration: 0.3,
        }}
        initial={false}
        animate={animateToClose ? 'open' : 'closed'}
      />
      <motion.div
        className={cn('absolute bottom-0 left-0 h-0.5 w-full rounded-md bg-white', {
          'bg-white': !animateToClose,
        })}
        style={{
          transformOrigin: 'top left',
        }}
        variants={{
          open: {
            x: -1,
            y: 1,
            rotate: -45,
          },
          closed: {
            rotate: 0,
          },
        }}
        transition={{
          duration: 0.2,
        }}
        initial={false}
        animate={animateToClose ? 'open' : 'closed'}
      />
    </div>
  );
};

export default BurgerMenuBtn;
