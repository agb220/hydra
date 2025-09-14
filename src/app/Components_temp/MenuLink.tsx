import Link from 'next/link';

interface MenuLinkProps {
  href: string;
  name: string;
}

const MenuLink = ({ href, name }: MenuLinkProps) => {
  return (
    <Link
      href={href}
      className="uppercase relative before:absolute before:-bottom-1 before:left-0 before:h-0.5 before:w-full 
                   before:bg-white before:origin-center before:scale-x-0 before:transition-transform 
                   before:duration-300 group-hover:before:scale-x-100"
    >
      {name}
    </Link>
  );
};

export default MenuLink;
