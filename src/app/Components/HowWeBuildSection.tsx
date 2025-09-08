import Image from 'next/image';
import Title from './Title';
import { MOCK_HOW_WE_BUILD } from '@/utilities/mocks';
import ArrowRightSvg from './icons/ArrowRight';

const HowWeBuildSection = () => {
  return (
    <section className="mb-28">
      <div className="container">
        <Title
          title={'HOW WE BUILD <br/> <span class="font-light">WITH HYDRA VR?</span>'}
          description={
            'Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.'
          }
        />
      </div>
      <div className="relative">
        <Image
          src={'/images/lines/line15.svg'}
          alt={''}
          width={1440}
          height={257}
          className="absolute inset-x-0 bottom-[25%] -z-1 pointer-events-none w-full hidden md:block"
        />
        <div className="container">
          <ul className="flex justify-between items-center gap-5 md:gap-10 overflow-auto">
            {MOCK_HOW_WE_BUILD.map((item, index) => (
              <li
                key={index}
                className="min-w-[70%] md:min-w-fit flex items-center justify-center flex-col"
              >
                <div className="w-[129px] h-[129px] rounded-full bg-[linear-gradient(268deg,#C0B7E8_-0.6%,#8176AF_98.31%)] flex items-center justify-center border-[12px] border-[#282424]">
                  <span className="text-purple text-[64px] font-bold"> 0{index + 1}</span>
                </div>
                <div className="flex gap-1 mt-[25px]">
                  <span className="mt-1.5 hidden lg:block">
                    <ArrowRightSvg />
                  </span>
                  <span
                    className="font-bold text-2xl"
                    dangerouslySetInnerHTML={{
                      __html: item.title,
                    }}
                  ></span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HowWeBuildSection;
