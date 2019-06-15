import React from "react";
import ListItem from "@material-ui/core/ListItem";
import styled from "styled-components";

type PGListItem = {
  imageUrl: string;
  label: string;
  onClick: () => void;
};

const Image = styled.img`
  height: auto;
  margin-right: 10px;
  width: 20px;
`;

export const PGListItem: React.FC<PGListItem> = (props: PGListItem) => (
  <ListItem onClick={props.onClick}>
    <Image src={props.imageUrl} />
    {props.label}
  </ListItem>
);
