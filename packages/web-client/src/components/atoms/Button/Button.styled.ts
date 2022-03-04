import styled from 'styled-components';

export const CircularButton = styled.button`
    --radius: 3rem;
    width: var(--radius);
    height: var(--radius);
    border-radius: var(--radius);
    border: none;
    color: #fff;
    background-color: green;
    box-shadow: 6px 3px 6px 3px rgba(21, 128, 61, 0.5);
    cursor: pointer;
`;
