import styled from "@emotion/styled"

export const Button = styled.button`
  background: var(--textNormal);
  color: var(--textLink);
  width: 10rem;
  height: 3rem;
  border: 2px solid transparent;
  border-radius: 4px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
  transition: transform 0.3s;

  :hover {
      animation: stripes-move 20s infinite linear;
      background: repeating-linear-gradient(-45deg, var(--textNormal) 0, var(--textNormal) 0.5rem, var(--accent) 0.5rem, var(--accent) 0.99rem);
      border: 2px solid var(--accent);
      transform: scale(1.05);
  }

  @keyframes stripes-move {
  100% {
    background-position: 50em 0px;
  }
}

`
