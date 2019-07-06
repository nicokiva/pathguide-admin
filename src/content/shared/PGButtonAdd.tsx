import React from "react";
import styled from "styled-components";

type Props = {
  onClick: () => void;
};

const SVGStyled = styled.svg`
  &:hover {
    cursor: pointer;
  }
`;

export const PGButtonAdd: React.FC<Props> = props => (
  <SVGStyled
    width="48px"
    height="48px"
    viewBox="0 0 48 48"
    onClick={props.onClick}
  >
    <path
      fill="#000000"
      d="M17,13H13V17H11V13H7V11H11V7H13V11H17M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
    />
  </SVGStyled>
);
