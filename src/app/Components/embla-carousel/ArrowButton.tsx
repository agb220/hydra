'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { ChevroneSvg } from '../icons';

export const usePrevNextButtons = (emblaApi: any) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: any) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('scroll', onSelect).on('slideFocus', onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

export const PrevButton = (props: any) => {
  return (
    <button
      className="h-12 w-12 rounded-full bg-purple-100 top-[40%] -left-2 absolute flex justify-center items-center z-10 hover:bg-purple-200 duration-300 active:bg-purple-200 disabled:bg-grey"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <ChevroneSvg className="rotate-90" />
    </button>
  );
};

export const NextButton = (props: any) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="h-12 w-12 rounded-full bg-purple-100 top-[40%] -right-2 absolute flex justify-center items-center z-10 hover:bg-purple-200 duration-300 active:bg-purple-200 disabled:bg-grey"
      onClick={props.onClick}
      disabled={props.disabled}
    >
      <ChevroneSvg className="-rotate-90" />
    </button>
  );
};
