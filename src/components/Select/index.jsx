import { forwardRef } from 'react';

export const Select = forwardRef(({ children, ...rest }, ref) => {
  return (
    <div>
      <select {...rest} ref={ref}>
        {children}
      </select>
       
    </div>
  );
});