import React from "react";
import styled from "styled-components";

type PGArticleProps = {
  item: unknown;
  id: string;
  imageUrl: string;
  title: React.ReactNode;
  children: React.ReactNode;
  selectable?: boolean;
  onClick?: (item: unknown) => void;
};

type PGArticleWrapperProps = Pick<PGArticleProps, "selectable">;

const PGArticleWrapper = styled.div<PGArticleWrapperProps>`
  height: 100px;
  display: flex;
  padding: 20px 0;

  &:not(:last-child) {
    background: linear-gradient(
        to left,
        rgb(255, 255, 255) 0%,
        rgb(199, 197, 198) 25%,
        rgb(86, 86, 86) 50%,
        rgb(199, 197, 198) 75%,
        rgb(255, 255, 255) 100%
      )
      left bottom #fff no-repeat;
    background-size: 100% 1px;
  }

  ${(props: PGArticleWrapperProps) =>
    props.selectable
      ? `&:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }`
      : ""}
`;

const Image = styled.img`
  height: inherit;
  margin-right: 20px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bolder;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

const Content = styled.span`
  font-size: 13px;
`;

export const PGArticle: React.FC<PGArticleProps> = (props: PGArticleProps) => (
  <PGArticleWrapper
    selectable={props.selectable}
    onClick={() => (props.onClick ? props.onClick(props.item) : undefined)}
  >
    <Image src={props.imageUrl} alt={String(props.title)} />
    <div>
      <Title>{props.title}</Title>
      <Content>{props.children}</Content>
    </div>
  </PGArticleWrapper>
);
