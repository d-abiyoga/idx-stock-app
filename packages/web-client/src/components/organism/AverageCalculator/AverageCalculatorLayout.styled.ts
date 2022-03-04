import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    padding-bottom: 2rem;

    .input-container,
    .output-container {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        max-width: 100vw;
        gap: 1rem;
        padding: 1rem;
        background-color: white;

        width: 100%;

        border-radius: 1rem;
        box-shadow: 1px 13px 13px 3px rgba(21, 128, 61, 0.2);
    }

    button {
        margin-top: 1rem;
        margin-left: 0;
    }
`;
