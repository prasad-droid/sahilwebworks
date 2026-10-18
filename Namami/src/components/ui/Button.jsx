import { Link } from 'react-router-dom';

const variants = {
  primary: 'bg-[#1F4D3A] text-white hover:bg-[#12372A]',
  secondary: 'bg-[#12372A] text-white hover:bg-[#1F4D3A]',
  outline: 'border-2 border-[#1F4D3A] text-[#1F4D3A] hover:bg-[#1F4D3A] hover:text-white',
  ghost: 'text-[#1F4D3A] hover:bg-[#1F4D3A]/5',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-base',
  lg: 'px-8 py-3 text-lg',
};

export default function Button({ variant = 'primary', size = 'md', children, className = '', as, href, ...rest }) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 ${variants[variant]} ${sizes[size]} ${className}`;

  if (as === 'link' && href) {
    return (
      <Link to={href} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
