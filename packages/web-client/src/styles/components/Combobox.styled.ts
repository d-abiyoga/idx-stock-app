import styled from "styled-components";

export const Combobox = styled.div`
  display: inline-block;
  position: relative;
  width: 100%
`;

export const Menu = styled.ul`
  height: inherit;
  /* max-width: 300; */
  overflow-y: scroll;
  background-color: rgba(209, 250, 229, 0.9);
  padding: 0;
  list-style: none;
  position: absolute;
  top: 0.75rem;
  left: 0;
  width: 100%;
  z-index: 1;


  li {
    color: gray;
    background-color: rgba(209, 250, 229, 0.9);
    padding-left: 0.5rem;
    font-size: 0.875rem
  }
`;

export const DropdownArrowButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  fontsize: 0.5rem;
`;
