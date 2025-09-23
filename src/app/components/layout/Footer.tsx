import Image from 'next/image';
import Link from 'next/link';
import MenuLink from '../MenuLink';
import SocialMedia from '../SocialMedia';
import Button from '../Button';
import { MOCK_MENU } from '@/utilities/mocks';

const Footer = () => {
  return (
    <footer className="pb-[89px] md:pb-[59px] pt-[81px] md:pt-[129px] relative overflow-x-hidden">
      <Image
        src={'/images/lines/line19.svg'}
        alt={''}
        width={1440}
        height={1}
        className="absolute -top-1/3 left-0 md:left-20 pointer-events-none -z-1"
      />
      <Image
        src={'/images/lines/line18.svg'}
        alt={''}
        width={1440}
        height={1}
        className="absolute bottom-1/3 left-0 md:left-20 pointer-events-none -z-1"
      />

      <div className="container ">
        <div className="flex flex-col xl:flex-row justify-between gap-5 pb-[61px] md:pb-[77px]">
          <Link href={'/'} className="self-center xl:self-start max-h-[186px]">
            <Image
              src={'/images/logo/logo-icon.svg'}
              alt={'Hydra: Dive Into The Depths Of Virtual Reality'}
              width={185}
              height={187}
            />
          </Link>
          <div className="flex flex-row gap-5 justify-between mb-10">
            <div className="relative">
              <ul className="flex flex-col gap-5 md:pl-[81px] md:pr-[104px] md:before:content-[''] md:before:absolute before:left-0 md:before:top-0 md:before:h-full md:before:w-[6px] md:before:bg-[linear-gradient(180deg,#343045_0%,#C0B7E8_35%,#8176AF_68%,#343045_100%)]">
                {MOCK_MENU.map((item, index) => (
                  <li key={index} className="font-bold relative group text-base ">
                    <MenuLink href={item.href} name={item.name} />
                  </li>
                ))}
                <li className="font-bold relative group text-base ">
                  <MenuLink href={'#joinhydra'} name="JOIN HYDRA" />
                </li>
              </ul>
            </div>
            <div className="relative">
              <ul className="flex flex-col gap-5 md:pl-[107px] md:pr-[69px] md:before:absolute before:left-0 md:before:top-0 md:before:h-full md:before:w-[6px] md:before:bg-[linear-gradient(180deg,#343045_0%,#C0B7E8_35%,#8176AF_68%,#343045_100%)]">
                <li className="font-bold relative group text-base ">
                  <MenuLink href={'#'} name="F.A.Q" />
                </li>
                <li className="font-bold relative group text-base ">
                  <MenuLink href={'#'} name="SITEMAP" />
                </li>
                <li className="font-bold relative group text-base ">
                  <MenuLink href={'#'} name="CONDITIONS" />
                </li>
                <li className="font-bold relative group text-base ">
                  <MenuLink href={'#'} name="LICENSES" />
                </li>
              </ul>
            </div>
          </div>
          <div className="relative self-center xl:self-start">
            <div className="md:pl-[71px] md:before:absolute before:left-0 md:before:top-0 md:before:h-full md:before:w-[6px] md:before:bg-[linear-gradient(180deg,#343045_0%,#C0B7E8_35%,#8176AF_68%,#343045_100%)]">
              <SocialMedia />
              <Button as="a" href="#joinhydra" className="w-full md:w-fit">
                BUILD YOUR WORLD
              </Button>
            </div>
          </div>
        </div>
        <div className="pt-9 md:pt-[49px] font-bold text-sm text-center border-t-[2px] border-transparent [border-image:linear-gradient(90deg,#343045_0%,#C0B7E8_34.9%,#8176AF_68.75%,#343045_100%)_1]">
          2025 © HYDRA LANDING PAGE - ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
};

export default Footer;
