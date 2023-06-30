import React from "react"
import { StyleSelect } from "./style"

export const Select = React.forwardRef(function Select({ children, ...rest }, ref) {
  return (
    <div>
      <StyleSelect {...rest} ref={ref}>
        {children}
      </StyleSelect>
    </div>
  )
})