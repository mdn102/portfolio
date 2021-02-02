import styled from '@emotion/styled'

export const TwoColumnGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 2rem;
    place-items: center;
    margin: 10vh 0 20vh 0;

    span {
      color: var(--textLink);
    }

    p {
      text-align: justify;
      font-size: 110%;
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;

      & img {
        width: 80%;
      }
    }
  `