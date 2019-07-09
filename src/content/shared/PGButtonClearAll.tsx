import React from "react";
import styled from "styled-components";

type Props = {
  onClick: () => void;
};

const Button = styled.svg`
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgAQMAAADYVuV7AAAABlBMVEUAAAAzMzPI8eYgAAAAAXRSTlMAQObYZgAAABtJREFUeAFjoCsYBfz/weADDTmj3hn1DhSMAgC5ZadZcU1JvgAAAABJRU5ErkJggg==);
  background-repeat: no-repeat;
  background-size: 50px;
`;

export const PGButtonClearAll: React.FC<Props> = props => (
  <Button onClick={props.onClick} />
);
