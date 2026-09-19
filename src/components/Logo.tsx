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
  variant = 'dark',
  size = 'md',
  iconOnly = false,
  style,
  className = '',
  onClick
}) => {
  let iconH = 36;
  let titleSize = '1.3rem';
  let subtitleSize = '0.56rem';
  let tagSize = '0.46rem';

  if (typeof size === 'number') {
    iconH = size;
  } else {
    switch (size) {
      case 'sm':
        iconH = 32;
        titleSize = '1.2rem';
        subtitleSize = '0.52rem';
        tagSize = '0.42rem';
        break;
      case 'md':
        iconH = 38;
        titleSize = '1.38rem';
        subtitleSize = '0.58rem';
        tagSize = '0.48rem';
        break;
      case 'lg':
        iconH = 48;
        titleSize = '1.7rem';
        subtitleSize = '0.7rem';
        tagSize = '0.56rem';
        break;
      case 'xl':
        iconH = 64;
        titleSize = '2.2rem';
        subtitleSize = '0.86rem';
        tagSize = '0.68rem';
        break;
    }
  }

  // If icon-only is requested (Ribbon 'N' with floating digital pixels)
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
          src="/assets/nexcoregen-icon-2x.png"
          alt="Nexcoregen Icon"
          style={{
            height: `${iconH}px`,
            width: 'auto',
            display: 'block',
            objectFit: 'contain'
          }}
          loading="eager"
        />
      </div>
    );
  }

  const isDark = variant === 'dark';

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
        lineHeight: 1.1,
        ...style
      }}
    >
      <img
        src="/assets/nexcoregen-icon-2x.png"
        alt="Nexcoregen Technologies Logo"
        style={{
          height: `${iconH}px`,
          width: 'auto',
          display: 'block',
          objectFit: 'contain',
          filter: 'drop-shadow(0 2px 8px rgba(0, 210, 255, 0.28))'
        }}
        loading="eager"
      />

      {/* Subtle vertical divider matching approved brand layout */}
      <div
        style={{
          width: '1px',
          height: `${iconH * 0.78}px`,
          background: isDark ? 'rgba(255, 255, 255, 0.2)' : 'rgba(15, 23, 42, 0.18)',
          margin: '0 0.1rem'
        }}
      />

      {/* Official Nexcoregen Typography */}
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
          <span
            style={{
              fontWeight: 800,
              fontSize: titleSize,
              letterSpacing: '-0.03em',
              color: isDark ? '#FFFFFF' : '#0F172A'
            }}
          >
            Nexcore
          </span>
          <span
            style={{
              fontWeight: 800,
              fontSize: titleSize,
              letterSpacing: '-0.03em',
              color: '#00D2FF',
              textShadow: '0 0 12px rgba(0, 210, 255, 0.45)'
            }}
          >
            gen
          </span>
        </div>

        <div
          style={{
            fontSize: subtitleSize,
            fontWeight: 700,
            letterSpacing: '0.24em',
            textTransform: 'uppercase',
            color: isDark ? 'rgba(255, 255, 255, 0.8)' : '#475569',
            fontFamily: "'Space Grotesk', sans-serif",
            marginTop: '1px'
          }}
        >
          TECHNOLOGIES
        </div>

        <div
          style={{
            fontSize: tagSize,
            fontWeight: 500,
            letterSpacing: '0.04em',
            color: '#38BDF8',
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            marginTop: '1px'
          }}
        >
          Ideas Today. A Better Tomorrow.
        </div>
      </div>
    </div>
  );
};

export default Logo;
