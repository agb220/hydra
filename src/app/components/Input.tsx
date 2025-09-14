import { cn } from '@/utilities/cn';
import type { DetailedHTMLProps, InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import React, { forwardRef } from 'react';

export interface InputOptions {
  variant?: 'outline';
  type?: string;
  error?: string;
  as?: 'input' | 'textarea';
  disabled?: boolean;
  id?: string;
  placeholder?: string;
}

type InputAsInput = InputOptions &
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    as?: 'input';
  };

type InputAsTextarea = InputOptions &
  DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement> & {
    as: 'textarea';
  };

export type InputProps = InputAsInput | InputAsTextarea;

const Input = forwardRef<HTMLInputElement | HTMLTextAreaElement, InputProps>((props, ref) => {
  const { as = 'input', variant = 'outline', error, ...rest } = props;

  const commonClasses = cn(
    'flex w-full items-center truncate border px-[42px] py-6 hover:border-purple-200 focus:outline-none disabled:cursor-not-allowed rounded-4xl duration-300',
    {
      'border-white text-white placeholder:text-grey focus:border-purple-100 focus:placeholder:text-grey active:border-purple-100 active:placeholder:text-white disabled:border-grey disabled:text-grey disabled:placeholder:text-grey':
        variant === 'outline',
      'border-red': error,
    }
  );

  if (as === 'textarea') {
    const textareaProps = rest as InputAsTextarea;
    return (
      <div className="flex flex-col gap-2 w-full">
        <textarea
          ref={ref as React.Ref<HTMLTextAreaElement>}
          className={cn('resize-none min-h-52', commonClasses)}
          {...textareaProps}
        />
        {error && <span className="text-red">{error}</span>}
      </div>
    );
  }

  // input
  const inputProps = rest as InputAsInput;
  return (
    <div className="flex flex-col gap-2 w-full">
      <input
        ref={ref as React.Ref<HTMLInputElement>}
        className={cn('h-12', commonClasses)}
        {...inputProps}
      />
      {error && <span className="text-red">{error}</span>}
    </div>
  );
});

Input.displayName = 'Input';
export default Input;
