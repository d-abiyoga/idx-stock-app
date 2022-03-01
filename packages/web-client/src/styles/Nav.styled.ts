import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: rgb(21 128 61);
  padding: 0;
  padding-inline: 1.5rem;

  @media (min-width: 500px) {
    padding-inline: 1.5rem;
    height: inherit;
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
        display: block;
        padding: 1rem;
        --tw-text-opacity: 1;
        color: rgba(243, 244, 246, var(--tw-text-opacity));
        text-decoration: none;
      }
    }
  }
`;
