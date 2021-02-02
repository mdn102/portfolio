import styled from "styled-components"

export const ButtonSmall = styled.button`
  background: var(--textNormal);
  color: var(--textLink);
  width: 7rem;
  height: 2rem;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 1rem;
  transition: color 0.3s;

  :hover, :focus {
      animation: stripes-move 20s infinite linear;
      background: repeating-linear-gradient(-45deg, var(--textNormal) 0, var(--textNormal) 0.5rem, var(--accent) 0.5rem, var(--accent) 0.96rem);
      border: var(--textNormal) 2px solid;
      
  }

  @keyframes stripes-move {
  100% {
    background-position: 50em 0px;
  }
}

`
