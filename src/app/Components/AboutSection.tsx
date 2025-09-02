import Image from 'next/image';
import Title from './Title';
import Button from './Button';

const AboutSection = () => {
  return (
    <section id="about" className="mb-15 md:mb-[111px] overflow-hidden">
      <div className="container">
        <Title
          title={'INTRODUCTION <br/> <span class="font-light">TO HYDRA VR</span>'}
          description={
            'Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.'
          }
        />
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          <div className="relative">
            <div className="aspect-[337/356] lg:aspect-[524/550] overflow-hidden rounded-[100px_240px] shadow-[0_4px_4px_0_rgba(0,0,0,0.25)]">
              <Image
                src={'/images/about/about-img.webp'}
                alt={'ABOUT HYDRA VR'}
                width={524}
                height={550}
              />
            </div>
            <Image
              src={'/images/lines/line7.svg'}
              alt={''}
              width={1440}
              height={257}
              className="absolute left-0 top-0 md:-top-20 xl:top-0 -z-1 pointer-events-none max-w-[1440px]"
            />

            <Image
              src={'/images/lines/line8.svg'}
              alt={''}
              width={1440}
              height={252}
              className="absolute left-0 bottom-0 md:-bottom-20 xl:bottom-0 -z-1 pointer-events-none  max-w-[1440px]"
            />
          </div>
          <div className="md:basis-[630px]">
            <h2 className="font-bold text-[26px] md:text-4xl self-center md:self-start flex flex-col mb-[38px] md:mb-[42px]">
              ABOUT <span className="text-[rgba(255,255,255,0.95)] font-light">HYDRA VR</span>
            </h2>
            <p className="text-sm lg:text-base mb-7">
              Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus urna
              neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida dictum fusce
              ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam
              faucibus purus in massa. Est placerat in egestas erat imperdiet sed. Consequat semper
              viverra nam libero justo laoreet sit amet. Aliquam etiam erat velit scelerisque in
              dictum non consectetur a. Laoreet sit amet cursus sit amet. Vel eros donec ac odio
              tempor orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit adipiscing
              bibendum. Leo a diam sollicitudi n tempor.
            </p>
            <Button as="a" href="#joinhydra" className="w-full md:w-fit">
              LET’S GET IN TOUCH
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
