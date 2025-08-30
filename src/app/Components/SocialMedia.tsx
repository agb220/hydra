import Image from 'next/image';
import Button from './Button';

const SocialMedia = () => {
  return (
    <div className="flex flex-col">
      <h4 className="mb-[39px] text-base font-bold uppercase self-center xl:self-start">
        SOCIALIZE WITH HYDRA
      </h4>
      <ul className="flex gap-5 mb-[49px]">
        <li className="rounded-full hover:brightness-200 duration-300">
          <a href="#">
            <Image
              src={'/images/socials/facebook.svg'}
              alt={'logo facebook'}
              width={32}
              height={32}
            />
          </a>
        </li>
        <li className="rounded-full hover:brightness-200 duration-300">
          <a href="#">
            <Image
              src={'/images/socials/twitter.svg'}
              alt={'logo twitter'}
              width={32}
              height={32}
            />
          </a>
        </li>
        <li className="rounded-full hover:brightness-200 duration-300">
          <a href="#">
            <Image
              src={'/images/socials/linkedin.svg'}
              alt={'logo linkedin'}
              width={32}
              height={32}
            />
          </a>
        </li>
        <li className="rounded-full hover:brightness-200 duration-300">
          <a href="#">
            <Image
              src={'/images/socials/youtube.svg'}
              alt={'logo youtube'}
              width={32}
              height={32}
            />
          </a>
        </li>
        <li className="rounded-full hover:brightness-200 duration-300">
          <a href="#">
            <Image
              src={'/images/socials/instagram.svg'}
              alt={'logo instagram'}
              width={32}
              height={32}
            />
          </a>
        </li>
        <li className="rounded-full hover:brightness-200 duration-300">
          <a href="#">
            <Image
              src={'/images/socials/pinterest.svg'}
              alt={'logo pinterest'}
              width={32}
              height={32}
            />
          </a>
        </li>
      </ul>
      <Button as="a" href="#goinhydra" className="w-full md:w-fit">
        BUILD YOUR WORLD
      </Button>
    </div>
  );
};

export default SocialMedia;
