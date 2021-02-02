import styled from "@emotion/styled"
import {Link} from 'gatsby'

export const StyledLink = styled(Link)`
  font-size: ${props => props.big ? '2.2rem'  : '.9rem'};
  margin-right: 1.3rem;
  text-decoration: none;
  margin-top: 0.6rem;
  flex-wrap: nowrap;
  color: var(--textNormal);
  transition: color .4s ease;

  &:hover {
    color: var(--textLink);
  }

  

`
