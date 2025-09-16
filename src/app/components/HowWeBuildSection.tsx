'use client';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Title from './Title';
import { MOCK_HOW_WE_BUILD } from '@/utilities/mocks';
import ArrowRightSvg from './icons/ArrowRight';

const HowWeBuildSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.3, once: false });

  const lineDuration = 5;

  const listVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: lineDuration / MOCK_HOW_WE_BUILD.length,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } },
  };

  return (
    <section ref={ref} className="pb-28 scroll-mt-17 md:scroll-mt-30" id="howto">
      <div className="container">
        <Title
          title={'HOW WE BUILD <br/> <span class="font-light">WITH HYDRA VR?</span>'}
          description={
            'Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.'
          }
          classnameDesc="md:w-[40%]"
        />
      </div>

      <div className="relative">
        {/* SVG line */}
        <motion.svg
          viewBox="0 0 1440 169"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-x-0 bottom-[40%] xl:bottom-[25%] -z-10 w-full hidden md:block"
        >
          <motion.path
            d="M-9 21.7335C6.47753 71.4205 88.0505 181.243 245.37 106.768C350.5 57 405.361 2.72575 539.107 91.2619C672.853 179.798 776.317 173.796 841.423 82.2582C906.53 -9.27916 1076.11 -33.7892 1139.7 74.7552C1203.29 183.3 1417.79 196.305 1440 106.768"
            stroke="url(#paint0_linear)"
            strokeWidth="6"
            initial={{ pathLength: 0 }}
            animate={inView ? { pathLength: 1 } : { pathLength: 0 }}
            transition={{ duration: lineDuration, ease: 'linear' }}
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="0.5"
              y1="85"
              x2="1440"
              y2="85"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#343045" />
              <stop offset="0.3" stopColor="#C0B7E8" />
              <stop offset="0.74" stopColor="#8176AF" />
              <stop offset="1" stopColor="#343045" />
            </linearGradient>
          </defs>
        </motion.svg>

        <div className="container">
          <motion.ul
            className="flex justify-between items-center gap-5 md:gap-10 overflow-auto"
            variants={listVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            {MOCK_HOW_WE_BUILD.map((item, index) => (
              <motion.li
                key={index}
                variants={cardVariants}
                className="min-w-[70%] md:min-w-fit flex items-center justify-center flex-col"
              >
                <div className="w-[129px] h-[129px] rounded-full bg-[linear-gradient(268deg,#C0B7E8_-0.6%,#8176AF_98.31%)] flex items-center justify-center border-[12px] border-[#282424]">
                  <span className="text-purple text-[64px] font-bold">0{index + 1}</span>
                </div>
                <div className="flex gap-1 mt-[25px]">
                  <span className="mt-1.5 hidden lg:block">
                    <ArrowRightSvg />
                  </span>
                  <span
                    className="font-bold text-2xl"
                    dangerouslySetInnerHTML={{ __html: item.title }}
                  ></span>
                </div>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default HowWeBuildSection;
