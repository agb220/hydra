import Image from 'next/image';
import Button from './Button';
import { ArrowSvg, LocationSvg, MailSvg, PhoneSvg } from './icons';

const HeroSection = () => {
  return (
    <section className="min-h-svh container">
      <div className="flex flex-col-reverse xl:flex-row justify-between items-center gap-20 xl:gap-10 pt-5 pb-[53px] xl:pt-[100px] xl:pb-[100px]">
        <div className="relative">
          <Image
            src={'/images/lines/line4.svg'}
            alt={''}
            width={238}
            height={561}
            className="absolute -left-[10%] -top-60 hidden xl:block -z-1  pointer-events-none"
          />
          <div className="flex flex-col xl:max-w-[456px]">
            <h1 className="text-4xl md:text-[46px] font-bold mb-9">
              <span className="text-2xl  text-[40px] bg-[linear-gradient(92deg,#C0B7E8_-1.02%,#8176AF_36.25%)] bg-clip-text text-transparent">
                Dive{' '}
              </span>
              Into The Depths of{' '}
              <span className="text-2xl  text-[40px] bg-[linear-gradient(92deg,#C0B7E8_-1.02%,#8176AF_36.25%)] bg-clip-text text-transparent">
                Virtual Reality
              </span>
            </h1>
            <p className="mb-[53px] md:mb-[66px] text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore nisl tincidunt eget. Lectus mauris eros in vitae .
            </p>
            <Button
              as="a"
              href="#services"
              className="w-full md:w-fit md:max-w-60"
              icon={<ArrowSvg />}
            >
              BUILD YOUR WORLD
            </Button>
          </div>
        </div>
        <div className="relative">
          <Image
            src={'/images/lines/line1.svg'}
            alt={''}
            width={449}
            height={669}
            className="absolute right-0 -top-20 -z-1 pointer-events-none"
          />
          <Image
            src={'/images/lines/line3.svg'}
            alt={''}
            width={735}
            height={419}
            className="absolute -left-40 -bottom-10 md:-bottom-40 -z-1 pointer-events-none"
          />
          <Image
            src={'/images/lines/line2.svg'}
            alt={''}
            width={377}
            height={845}
            className="absolute left-1 md:left-20 -top-32 md:-top-[80%] -z-1 pointer-events-none"
          />
          <div className="overflow-hidden rounded-[100px_100px_100px_240px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
            <Image
              src={'/images/hero/hero-img.webp'}
              alt={'Dive Into The Depths of Virtual Reality'}
              width={490}
              height={426}
              className="pointer-events-none aspect-[319/277] md:aspect-[490/426]"
            />
          </div>
        </div>
      </div>
      <div className="py-[49px] px-5 md:px-[39px] bg-[radial-gradient(2900.76%_50.13%_at_50%_53.89%,rgba(58,52,86,0.95)_0%,#211E2E_100%)] rounded-[90px] mb-[94px]">
        <div className="overflow-x-auto">
          <ul className="flex gap-2">
            <li className="flex gap-1 items-center pr-5 md:pr-[42.5px] border-r border-[rgba(192,183,232,0.33)] min-w-80 md:min-w-100">
              <div className="min-w-10">
                <LocationSvg />
              </div>
              <div className="flex flex-col gap-2.5">
                <h4 className="font-bold text-sm xl:text-2xl">Pay Us a Visit</h4>
                <p className="text-xs md:text-sm">Union St, Seattle, WA 98101, United States</p>
              </div>
            </li>
            <li className="flex gap-1 items-center pr-5 pl-5 md:pl-[47.5px] md:pr-[66px] border-r border-[rgba(192,183,232,0.33)] min-w-70 md:min-w-100">
              <PhoneSvg />
              <div className="flex flex-col gap-[9px]">
                <h4 className="font-bold text-sm xl:text-2xl">Give Us a Call</h4>
                <a className="text-xs md:text-sm" href="tel:11011111010">
                  (110) 1111-1010
                </a>
              </div>
            </li>
            <li className="flex gap-1 items-center pl-5 md:pl-[47.5px] min-w-70 md:min-w-100">
              <MailSvg />
              <div className="flex flex-col gap-[9px]">
                <h4 className="font-bold text-sm xl:text-2xl">Send Us a Message</h4>
                <a
                  className="text-xs md:text-sm max-w-50 md:max-w-full"
                  href="mailto:contact@HydraVTech.com"
                >
                  Contact@HydraVTech.com
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
