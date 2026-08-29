import React from 'react';

/** The two elements useMagneticCursor() drives. Rendered once, at the root. */
export const Cursor: React.FC = () => (
  <>
    <div className="cursor-ring" aria-hidden="true" />
    <div className="cursor-dot" aria-hidden="true" />
  </>
);

export default Cursor;
