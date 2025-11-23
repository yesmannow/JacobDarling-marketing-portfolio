import React from 'react';

export type TagVariant = 'default' | 'primary' | 'secondary' | 'success';

interface TagProps {
  children: React.ReactNode;
  variant?: TagVariant;
  className?: string;
}

const variantStyles: Record<TagVariant, string> = {
  default: 'bg-neutral-100 text-neutral-700',
  primary: 'bg-navy-100 text-navy-700',
  secondary: 'bg-aqua-100 text-aqua-800',
  success: 'bg-teal-100 text-teal-700',
};

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'default',
  className = '',
}) => {
  const baseStyles = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium';
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

  return <span className={combinedStyles}>{children}</span>;
};
