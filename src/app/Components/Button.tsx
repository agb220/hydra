'use client';
import { cn } from '@/utilities/cn';
import { ButtonHTMLAttributes, DetailedHTMLProps, forwardRef, ElementType, ReactNode } from 'react';

interface ButtonOptions {
  isLoading?: boolean;
  variant?: 'btn' | 'outline' | 'link' | 'iconOnlySec';
  as?: ElementType;
  icon?: ReactNode;
}

export type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLButtonElement
> &
  ButtonOptions;

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const {
    type = 'button',
    className,
    variant = 'btn',
    children,
    isLoading,
    disabled,
    icon,
    as: Component = 'button',
    ...rest
  } = props;

  const merged = cn(
    'group flex items-center hover:transition-all disabled:cursor-not-allowed relative justify-center duration-300 disabled:pointer-events-none py-4 px-[34px] max-h-12 font-bold w-full',
    {
      'bg-[linear-gradient(90deg,#8176af_0%,#c0b7e8_100%)] focus:bg-purple focus:ring-purple focus:border-purple focus:outline-none focus:ring-1 text-purple active:ring-purple active:text-white disabled:bg-purple disabled:text-white rounded-[40px] group-hover:bg-purple group-hover:text-white border-2 border-purple group-hover:border-white':
        variant === 'btn',
      'bg-transparent focus:ring-purple focus:border-purple focus:outline-none focus:ring-1  border-2 border-white hover:bg-[linear-gradient(90deg,#8176af_0%,#c0b7e8_100%)] hover:border-purple focus:backdrop-blur-none  rounded-[40px] hover:text-purple disabled:bg-purple disabled:text-white':
        variant === 'outline',
    },
    className
  );

  return (
    <div className={cn('group  w-full md:w-fit', { 'flex gap-10 items-center': icon })}>
      <Component ref={ref} type={type} className={merged} disabled={disabled} {...rest}>
        {children}
      </Component>

      {icon && (
        <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:stroke-white stroke-[#C0B7E8] hidden md:inline-block ">
          {icon}
        </span>
      )}
    </div>
  );
});

Button.displayName = 'Button';
export default Button;
