import React from "react"

import {StyleText_1} from "../../styles/typography"
import { StyledInput, StyledDivInput } from "./style"


export const Input = React.forwardRef(function Input({ label, type, placeholder, id, ...rest }, ref) {
  return (
    <StyledDivInput>
      <StyleText_1>{label}</StyleText_1>
      <StyledInput
        type={type}
        placeholder={placeholder}
        ref={ref}
        {...rest}
      />
    </StyledDivInput>
  )
})