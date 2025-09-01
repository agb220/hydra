import { ArrowLongSvg } from './icons';

interface TitleProps {
  title: string;
  description: string;
}

const Title = ({ ...props }: TitleProps) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-5 md:gap-10 lg:items-center mb-[38px] lg:mb-25">
      <div className="flex items-center gap-4">
        <h2
          className="font-bold text-[26px] md:text-4xl self-center md:self-start"
          dangerouslySetInnerHTML={{
            __html: props.title,
          }}
        />
        <div className="hidden md:block">
          <ArrowLongSvg />
        </div>
      </div>
      <p className="text-xs md:text-base xl:basis-[661px]">{props.description}</p>
    </div>
  );
};

export default Title;
