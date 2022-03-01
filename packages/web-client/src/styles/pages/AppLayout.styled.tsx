import styled from 'styled-components'

export const AppContainer = styled.div`

  @media(min-width: 500px) {
    display: grid;
    grid-template-areas: 'nav main';
  }

  header {
    grid-area: nav;
    position: fixed;
    width: 100vw;
    box-shadow: 10px 3px 13px 3px rgba(21, 128, 61, 0.2);
    bottom: 0;
    z-index: 99; 

    @media(min-width:500px) {
      width: max-content;
      height: 100%;
      bottom: initial;
      position: relative;
    }
  }

  main {
    grid-area: main;
    padding-bottom: 4rem;
  }
`
