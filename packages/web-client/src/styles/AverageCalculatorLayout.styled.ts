import styled from "styled-components";

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
    overflow: scroll;
    gap: 1rem;
    padding: 1rem;
    background-color: white;

    width: 100%;

    border-radius: 1rem;
    box-shadow: 1px 13px 13px 3px rgba(21, 128, 61, 0.2);
  }

  /*TODO: visual bug: ticker box does not have the same width with other input box  */
  .input-box, .output-box {
    width: 100%;
  }

  .input-item,
  .output-item {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem;
    justify-content: space-between;

    @media (min-width: 500px) {
      gap: 1rem;
    }
  }

  .input-label,
  .output-label {
    padding-left: 0.5rem;
    white-space: nowrap;
    min-width: 25ch;

    @media (min-width: 900px) {
      text-align: right;
    }
  }


  .output-box,
  .input-box {
    min-width: 25ch;
  }

  button {
    margin-top: 1rem;
    margin-left: 0;
    padding: 0.5rem;
  }
`;
