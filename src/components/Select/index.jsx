import { forwardRef } from 'react'
import { StyleSelect } from './style'

export const Select = forwardRef(({ children, ...rest }, ref) => {
  return (
    <div>
      <StyleSelect {...rest} ref={ref}>
        {children}
      </StyleSelect>
       
    </div>
  );
});