import styled from "styled-components";

export const PGButtonBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  height: 50px;

  margin-bottom: 20px;

  & > * {
    cursor: pointer;
    width: 80px;
  }
`;
