'use client';
import { motion } from 'framer-motion';
import { cn } from '@/utilities/cn';
import { ArrowLongSvg } from './icons';

interface TitleProps {
  title: string;
  description: string;
  classnameDesc?: string;
}

const Title = ({ ...props }: TitleProps) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-5 md:gap-10 lg:items-center mb-[38px] lg:mb-25">
      <div className="md:flex items-center md:gap-4">
        <motion.h2
          className="font-bold text-[26px] md:text-4xl self-center md:self-start text-center md:text-start"
          dangerouslySetInnerHTML={{
            __html: props.title,
          }}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        />
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <ArrowLongSvg />
        </motion.div>
      </div>
      <motion.p
        className={cn('text-xs md:text-base xl:basis-[661px]', props.classnameDesc)}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {props.description}
      </motion.p>
    </div>
  );
};

export default Title;
