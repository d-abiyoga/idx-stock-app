import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: rgb(21 128 61);

  @media (min-width: 500px) {
    height: 100vh;
    position: fixed;
  }

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;

    @media (min-width: 500px) {
      flex-direction: column;
    }

    li {
      list-style: none;
      a {
        display: flex;
        gap: 0.5rem;
        align-items: end;
        padding: 1rem;
        --tw-text-opacity: 1;
        color: rgba(243, 244, 246, var(--tw-text-opacity));
        text-decoration: none;

        .icon-wrapper {
          width: 2rem;
          height: 2rem;
        }
      }
    }
  }
`;
