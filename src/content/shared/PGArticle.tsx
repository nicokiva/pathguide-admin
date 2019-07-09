import React from "react";
import styled from "styled-components";
import { PGButtonDelete } from "./icons/PGButtonDelete";

type PGArticleProps = {
  item: unknown;
  id: string;
  imageUrl?: string;
  title: React.ReactNode;
  children: React.ReactNode;
  selectable?: boolean;
  onClick?: (item: unknown) => void;
  onDelete?: (item: unknown) => void;
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

  & > div {
    width: 100%;
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

const Title = styled.span`
  font-size: 18px;
  font-weight: bolder;
  margin-bottom: 10px;
  text-transform: capitalize;
`;

const Content = styled.span`
  font-size: 13px;
`;

const TitleBar = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const ButtonSection = styled.div``;

export const PGArticle: React.FC<PGArticleProps> = (props: PGArticleProps) => (
  <PGArticleWrapper
    selectable={props.selectable}
    onClick={() => (props.onClick ? props.onClick(props.item) : undefined)}
  >
    {props.imageUrl && <Image src={props.imageUrl} alt={String(props.title)} />}

    <div>
      <TitleBar>
        <Title>{props.title}</Title>
        <ButtonSection>
          <PGButtonDelete
            onClick={() =>
              props.onDelete ? props.onDelete(props.item) : undefined
            }
          />
        </ButtonSection>
      </TitleBar>
      <Content>{props.children}</Content>
    </div>
  </PGArticleWrapper>
);
