import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type Variant = 'primary' | 'success' | 'danger' | 'secondary';

type ButtonProps = PropsWithChildren<{
  variant?: Variant;
  className?: string;
}> & Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'type' | 'onClick' | 'disabled'>;

const variantClasses: Record<Variant, string> = {
  primary: 'bg-blue-500 hover:bg-blue-700 text-white',
  success: 'bg-green-500 hover:bg-green-700 text-white',
  danger: 'bg-red-500 hover:bg-red-700 text-white',
  secondary: 'bg-gray-500 hover:bg-gray-700 text-white',
};

export function Button({
  variant = 'primary',
  className = '',
  type = 'button',
  disabled,
  onClick,
  children,
}: ButtonProps) {
  const base = 'font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline';
  const classes = `${variantClasses[variant]} ${base} ${className}`;
  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
