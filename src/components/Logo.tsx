import React from 'react';

export interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  iconOnly?: boolean;
  style?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
}

export const Logo: React.FC<LogoProps> = ({
  variant = 'light',
  size = 'md',
  iconOnly = false,
  style,
  className = '',
  onClick
}) => {
  // Height calculation
  let h = 40;
  if (typeof size === 'number') {
    h = size;
  } else {
    switch (size) {
      case 'sm':
        h = iconOnly ? 28 : 34;
        break;
      case 'md':
        h = iconOnly ? 36 : 42;
        break;
      case 'lg':
        h = iconOnly ? 48 : 54;
        break;
      case 'xl':
        h = iconOnly ? 64 : 70;
        break;
    }
  }

  // If icon-only is requested (The stylized Ribbon 'N' with floating digital pixels)
  if (iconOnly) {
    return (
      <div
        className={className}
        onClick={onClick}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: onClick ? 'pointer' : 'default',
          userSelect: 'none',
          ...style
        }}
      >
        <img
          src="/assets/nextcoregent-icon-2x.png"
          alt="NextcoreGent Icon"
          style={{
            height: `${h}px`,
            width: 'auto',
            display: 'block',
            objectFit: 'contain'
          }}
          loading="eager"
        />
      </div>
    );
  }

  // Full Logo selection:
  // Light variant: for white / light SaaS backgrounds
  // Dark variant: for navy / black / twilight backgrounds
  const logoSrc = variant === 'dark' 
    ? '/assets/nextcoregent-logo-dark-trans-2x.png' 
    : '/assets/nextcoregent-logo-light-trans-2x.png';

  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.65rem',
        cursor: onClick ? 'pointer' : 'default',
        userSelect: 'none',
        ...style
      }}
    >
      <img
        src={logoSrc}
        alt="NextcoreGent Technologies - Ideas Today. A Better Tomorrow."
        style={{
          height: `${h}px`,
          width: 'auto',
          display: 'block',
          objectFit: 'contain'
        }}
        loading="eager"
      />
    </div>
  );
};

export default Logo;
