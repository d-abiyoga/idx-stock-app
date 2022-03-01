import styled from "styled-components";

export const Button = styled.button`
  --bg-opacity: 1;
  --text-opacity: 1;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),

  width: 10rem;
  border: none;
  border-radius: 0.75rem;
  background-color: rgba(5, 150, 105, var(--bg-opacity));
  display: block;
  padding: 0.25rem;

  color: rgba(236, 253, 245, var(--text-opacity));
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  box-shadow: var(--ring-offset-shadow, 0 0 #0000),
    var(--ring-shadow, 0 0 #0000), var(--shadow);

  &:hover {
    background-color: rgba(110, 231, 183, var(--bg-opacity));
  }

  &:focus {
    --ring-offset-shadow: var(--ring-inset) 0 0 0
      var(--ring-offset-width) var(--ring-offset-color);
    --ring-shadow: var(--ring-inset) 0 0 0
      calc(2px + var(--ring-offset-width)) var(--ring-color);
    box-shadow: var(--ring-offset-shadow), var(--ring-shadow),
      var(--shadow, 0 0 #0000);
    --ring-opacity: 1;
    --ring-color: rgba(5, 150, 105, var(--ring-opacity));
  }
  &:active {
    background-color: rgba(4, 120, 87, var(--bg-opacity));
  }
`;
