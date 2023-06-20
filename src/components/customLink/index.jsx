import { StyledLink } from "./style"

export function CustomLink({to, link, children}){
    return(
        <StyledLink to={to} link={link}>
            {children}
        </StyledLink>
    )
}