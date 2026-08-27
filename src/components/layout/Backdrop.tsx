import React from 'react';
import useParallax from '../../hooks/useParallax';

/** The blurred steel field the glass panels refract, plus the vertical rules. */
export const Backdrop: React.FC = () => {
  const blobs = useParallax<HTMLDivElement>(0.14);
  const rules = useParallax<HTMLDivElement>(0.05);

  return (
    <>
      <div ref={blobs} className="backdrop" aria-hidden="true">
        <span className="backdrop__blob backdrop__blob--1" />
        <span className="backdrop__blob backdrop__blob--2" />
        <span className="backdrop__blob backdrop__blob--3" />
      </div>
      <div ref={rules} className="rules" aria-hidden="true" />
    </>
  );
};

export default Backdrop;
