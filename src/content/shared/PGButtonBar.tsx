import React from "react";
import styled from "styled-components";

const BarStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

type PGButtonBarProps = {
  children: React.ReactChild[];
};

export const PGButtonBar: React.FC<PGButtonBarProps> = (
  props: PGButtonBarProps
) => <BarStyled>{props.children}</BarStyled>;
