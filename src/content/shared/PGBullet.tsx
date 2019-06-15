import React from "react";
import styled from "styled-components";

type PGBulletProps = {
  question: React.ReactNode;
  answer: React.ReactNode;
};

const Bullet = styled.div`
  margin-bottom: 5px;
`;

const Category = styled.div`
  font-weight: bold;
`;

export const PGBullet: React.FC<PGBulletProps> = (props: PGBulletProps) => (
  <Bullet>
    <Category>{props.question}</Category>
    {props.answer}
  </Bullet>
);
