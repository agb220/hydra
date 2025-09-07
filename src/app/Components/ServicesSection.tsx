import Image from 'next/image';
import Title from './Title';
import Button from './Button';
import { MOC_SERVICES } from '@/utilities/mocks';

const ServicesSection = () => {
  return (
    <section className="pb-14 md:pb-[114px] overflow-hidden" id="services">
      <div className="relative">
        <Image
          src={'/images/lines/line14.svg'}
          alt={''}
          width={1440}
          height={257}
          className="absolute left-40 bottom-[-45%] -z-1 pointer-events-none   max-w-[1440px] hidden md:block"
        />
        <div className="container">
          <Title
            title={'WHY BUILD <br/> <span class="font-light">WITH HYDRA?</span>'}
            description={
              'Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.'
            }
            classnameDesc="md:basis-[40%] xl:basis-[650px]"
          />
          <div className="flex gap-[11px] overflow-x-auto">
            {MOC_SERVICES.map((service, index) => (
              <ServiceCard {...service} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

interface ServiceCardProps {
  title: string;
  imgSrc: string;
  description: string;
}

const ServiceCard = ({ ...props }: ServiceCardProps) => {
  return (
    <article className="pt-[27px] md:pt-[23px] pr-[37px] md:pr-[35px] pb-9 md:pb-10 pl-[33px] md:pl-[25px] rounded-[40px] bg-[radial-gradient(50%_50%_at_50%_50%,#433D60_0%,#211E2E_100%)] w-full min-w-[310px] basis-[310px]">
      <div className="flex flex-col gap-[35px] items-center justify-between h-full">
        <div className="overflow-hidden border-[12px] border-[#0e0e0e7a] aspect-[190/190] max-h-[190px] rounded-full">
          <Image
            src={props.imgSrc}
            alt={props.title}
            width={190}
            height={190}
            className="w-full hover:scale-125 duration-300"
          />
        </div>
        <div className="flex flex-col gap-5 grow">
          <h4 className="text-center font-bold uppercase text-2xl pb-[17.5px] border-b border-[rgba(192,183,232,0.33)] max-w-fit self-center">
            {props.title}
          </h4>
          <p className="leading-[1.5] ">{props.description}</p>
        </div>
        <Button as="a" href="#joinhydra" className="md:max-w-[154px] self-center">
          TRY IT NOW
        </Button>
      </div>
    </article>
  );
};
