import React from "react";
import styled from "styled-components";

const BarStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

type PGButtonBarProps = {
  children: React.ReactChild;
};

export const PGButtonBar: React.FC<PGButtonBarProps> = (
  props: PGButtonBarProps
) => <BarStyled>{props.children}</BarStyled>;
