import { forwardRef } from 'react';


export const Input = forwardRef(({ label, type, placeholder, id, ...rest }, ref) => { 
  return (
    <div>
        <label>{label}</label>
        <input
            type={type}
            placeholder={placeholder} 
            ref={ref}
            {...rest}
        />
    </div>
  );
});