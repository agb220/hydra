'use client';
import { motion } from 'framer-motion';
import FormBlock from './FormBlock';

const FormSection = () => {
  return (
    <motion.section
      className="container scroll-mt-17 md:scroll-mt-30"
      id="joinhydra"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="pt-[45px] md:pt-[90px] pb-[65px] md:pb-21 rounded-[100px] bg-[radial-gradient(50%_50%_at_50%_50%,#403a5f_0%,#211e2e_100%)] shadow-[0_4px_4px_rgba(0,0,0,0.25)] px-5 lg:px-[149px]">
        <div className="flex items-center flex-col gap-5 text-2xl md:text-4xl mb-[35px] md:mb-[65px]">
          <h2 className="font-bold pb-[30px] border-b border-solid border-transparent [border-image:linear-gradient(270deg,#343045_0%,#c0b7e8_34.9%,#8176af_68.75%,#343045_100%)_1] w-fit text-center">
            JOIN HYDRA
          </h2>
          <p className="font-light text-center">Let’s Build Your VR Experience</p>
        </div>
        <div>
          <FormBlock />
        </div>
      </div>
    </motion.section>
  );
};

export default FormSection;
