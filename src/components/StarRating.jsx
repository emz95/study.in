import React, { useRef, useState } from 'react';

const StarRating = ({ value, onChange }) => {
  const [hoverValue, setHoverValue] = useState(null);
  const starRef = useRef();

  // Calculate value based on mouse/touch position
  const getValueFromPosition = (e) => {
    const rect = starRef.current.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    let percent = Math.max(0, Math.min(1, x / rect.width));
    let val = Math.round(percent * 10) / 2; // 0.5 increments
    return Math.min(5, Math.max(0, val));
  };

  const handleMove = (e) => {
    const val = getValueFromPosition(e);
    setHoverValue(val);
    if (onChange) onChange(val);
  };

  const handleLeave = () => setHoverValue(null);

  return (
    <div
      ref={starRef}
      className="flex cursor-pointer select-none"
      style={{ width: 120, height: 32, position: 'relative' }}
      onMouseDown={handleMove}
      onMouseMove={e => e.buttons === 1 && handleMove(e)}
      onMouseLeave={handleLeave}
      onTouchStart={handleMove}
      onTouchMove={handleMove}
      onTouchEnd={handleLeave}
    >
      {[...Array(5)].map((_, i) => {
        const fill = (hoverValue ?? value) >= i + 1 ? '#FFD600'
          : (hoverValue ?? value) >= i + 0.5 ? 'url(#half)' : '#E0E0E0';
        return (
          <svg key={i} width="24" height="24" viewBox="0 0 24 24">
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="#FFD600" />
                <stop offset="50%" stopColor="#E0E0E0" />
              </linearGradient>
            </defs>
            <polygon
              points="12,2 15,9 22,9 17,14 18,21 12,17 6,21 7,14 2,9 9,9"
              fill={fill}
              stroke="#FFD600"
              strokeWidth="1"
            />
          </svg>
        );
      })}
    </div>
  );
};

export default StarRating;