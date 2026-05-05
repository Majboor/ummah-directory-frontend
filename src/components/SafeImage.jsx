import React, { useEffect, useState } from 'react';

export const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=75&w=900&auto=format&fit=crop';

export const optimizedImageSrc = (src, width = 900) => {
  if (!src) return '';
  try {
    const url = new URL(src);
    if (url.hostname.includes('images.unsplash.com')) {
      url.searchParams.set('w', String(width));
      url.searchParams.set('q', '75');
      url.searchParams.set('auto', 'format');
      url.searchParams.set('fit', 'crop');
      return url.toString();
    }

    if (url.hostname === 'ummahdirectory.com.au' && url.pathname.includes('/wp-content/uploads/')) {
      return `https://i0.wp.com/${url.hostname}${url.pathname}?fit=${width}%2C${Math.round(width * 1.25)}&ssl=1`;
    }

    if (url.hostname.endsWith('wp.com')) {
      url.searchParams.set('fit', `${width},${Math.round(width * 1.25)}`);
      url.searchParams.set('ssl', '1');
      return url.toString();
    }
  } catch {
    return src;
  }
  return src;
};

const SafeImage = ({ src, alt, className = '', fallback = FALLBACK_IMAGE, optimizedWidth = 900, ...props }) => {
  const width = optimizedWidth;
  const fallbackSrc = optimizedImageSrc(fallback, width);
  const [currentSrc, setCurrentSrc] = useState(optimizedImageSrc(src, width) || fallbackSrc);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setFailed(false);
    setCurrentSrc(optimizedImageSrc(src, width) || fallbackSrc);
  }, [src, width, fallbackSrc]);

  return (
    <img
      {...props}
      src={currentSrc || fallback}
      alt={alt || ''}
      className={className}
      loading={props.loading || 'lazy'}
      decoding={props.decoding || 'async'}
      referrerPolicy={props.referrerPolicy || 'no-referrer'}
      onError={() => {
        if (!failed) {
          setFailed(true);
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
};

export default SafeImage;
