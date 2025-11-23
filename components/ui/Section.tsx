import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  container?: 'normal' | 'wide' | 'full';
  background?: 'white' | 'neutral' | 'navy' | 'gradient';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
}

const containerStyles = {
  normal: 'container-custom',
  wide: 'container-wide',
  full: 'w-full',
};

const backgroundStyles = {
  white: 'bg-white',
  neutral: 'bg-neutral-50',
  navy: 'bg-navy-900 text-white',
  gradient: 'bg-gradient-to-br from-navy-900 via-navy-800 to-teal-900 text-white',
};

const paddingStyles = {
  sm: 'py-8 sm:py-12',
  md: 'py-12 sm:py-16 lg:py-20',
  lg: 'py-16 sm:py-20 lg:py-28',
  xl: 'py-20 sm:py-28 lg:py-36',
};

export const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  container = 'normal',
  background = 'white',
  padding = 'md',
}) => {
  return (
    <section className={`${backgroundStyles[background]} ${paddingStyles[padding]} ${className}`}>
      <div className={containerStyles[container]}>{children}</div>
    </section>
  );
};
