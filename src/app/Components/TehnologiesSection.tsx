'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ChevroneSvg } from './icons';

const TehnologiesSection = () => {
  return (
    <section>
      <div className="container ">
        <div className="relative mb-10">
          <div
            className="w-full h-[163px] md:h-[303px] 
                     bg-[linear-gradient(0deg,rgba(48,44,66,0.79)_0%,rgba(48,44,66,0.79)_100%),url('/images/tehnologies/tehnologies-bg.png')] 
                     bg-no-repeat bg-cover bg-[top_25%_center] md:bg-[top_30%_center] rounded-[160px]"
          >
            <h2 className="font-bold text-base md:text-4xl justify-center items-center flex flex-col h-full">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                TECHNOLOGIES & HARDWARE
              </motion.span>
              <motion.span
                className="font-light text-2xl md:text-4xl"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                USED BY HYDRA VR.
              </motion.span>
            </h2>
          </div>
          <motion.div
            className="absolute bottom-[-30px] left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            <div className="w-[60px] h-[60px] rounded-full hover:border-2 hover:border-white duration-300 bg-[linear-gradient(268deg,#C0B7E8_-0.6%,#8176AF_98.31%)] overflow-hidden">
              <a
                href="#technologies"
                className="flex items-center justify-center w-full h-full rounded-full"
              >
                <ChevroneSvg />
              </a>
            </div>
          </motion.div>
        </div>
        <div id="technologies" className="overflow-x-auto pb-10 scroll-mt-10 md:scroll-mt-0">
          <div className="flex gap-10 items-center justify-between">
            <motion.div
              className="aspect-[174 / 174] group min-w-[174px]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Image
                src="/images/tehnologies/tech1.png"
                alt="Tech Hydra: Unreal engine"
                width={174}
                height={174}
                className="object-contain filter group-hover:scale-110 transition duration-200 h-full"
              />
            </motion.div>
            <motion.div
              className="aspect-[252 / 252] group min-w-63"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Image
                src="/images/tehnologies/tech2.png"
                alt="Tech Hydra: Unity"
                width={252}
                height={252}
                className="object-contain filter group-hover:scale-110 transition duration-200 h-full"
              />
            </motion.div>
            <motion.div
              className="aspect-[263 / 263] group min-w-[263px]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Image
                src="/images/tehnologies/tech3.png"
                alt="Tech Hydra: Oculus"
                width={263}
                height={263}
                className="object-contain filter group-hover:scale-110 transition duration-200 h-full"
              />
            </motion.div>
            <motion.div
              className="aspect-[282 / 282] group min-w-[282px]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <Image
                src="/images/tehnologies/tech4.png"
                alt="Tech Hydra: Vive"
                width={282}
                height={282}
                className="object-contain filter group-hover:scale-110 transition duration-200"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TehnologiesSection;
