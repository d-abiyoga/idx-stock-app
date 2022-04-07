import styled from 'styled-components';

export const AppContainer = styled.div`
  /* @media(min-width: 500px) {
    display: grid;
    grid-template-areas: 'nav main';
  } */

  header {
    position: fixed;
    width: 100vw;
    box-shadow: 10px 3px 13px 3px rgba(21, 128, 61, 0.2);
    bottom: 0;
    z-index: 99;

    @media (min-width: 500px) {
      width: max-content;
      height: 100%;
      bottom: initial;
      position: relative;
    }
  }

  main {
    /* grid-area: main; */
    padding-top: 1rem;
    padding-bottom: 5rem;
    padding-inline: clamp(1rem, 5%, 3rem);

    @media (min-width: 500px) {
      padding-left: clamp(5rem, 21%, 10rem);
    }

    h1 {
      padding-bottom: 2rem;
    }

    h2 {
      padding-bottom: 0.5rem;
    }
    /* h1,
    h2 {
      padding-left: 1.5rem;
    } */
  }
`;
