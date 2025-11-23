import React from 'react';
import Link from 'next/link';

interface CardProps {
  children: React.ReactNode;
  hover?: boolean;
  padding?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

const paddingStyles = {
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
};

export const Card: React.FC<CardProps> = ({
  children,
  hover = false,
  padding = 'md',
  href,
  className = '',
}) => {
  const baseStyles = 'bg-white rounded-xl shadow-sm border border-neutral-200';
  const hoverStyles = hover ? 'card-hover' : '';
  const combinedStyles = `${baseStyles} ${paddingStyles[padding]} ${hoverStyles} ${className}`;

  if (href) {
    return (
      <Link href={href} className={`${combinedStyles} block`}>
        {children}
      </Link>
    );
  }

  return <div className={combinedStyles}>{children}</div>;
};
