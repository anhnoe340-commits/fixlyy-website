import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** Utility function to merge tailwind classes */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const Button = React.forwardRef(({
  className,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  asChild = false,
  type = 'button',
  children,
  ...props
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-[#1E4FDD] shadow-md hover:shadow-lg transition-all",
    outline: "border-2 border-primary text-primary hover:bg-primary/5",
    ghost: "bg-transparent hover:bg-gray-100 text-secondary"
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg"
  };

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    fullWidth ? "w-full" : "",
    className
  );

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";
