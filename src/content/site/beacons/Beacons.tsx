import React from "react";
import { Beacon } from "../../../models/Beacon";
import { withLoading } from "../../shared/WithLoading";
import styled from "styled-components";

type BeaconsProps = {
  beacons: Array<Beacon>;
};

const BeaconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const BeaconContainer = styled.div`
  height: 80px;
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
`;

const Image = styled.img`
  height: inherit;
  margin-right: 20px;
`;

const Title = styled.div`
  font-size: 18px;
  font-weight: bolder;
  margin-bottom: 10px;
`;

const Category = styled.div`
  font-weight: bold;
`;

const Content = styled.span`
  font-size: 13px;
`;

const Component: React.FC<BeaconsProps> = (props: BeaconsProps) =>
  (props.beacons.length > 0 && (
    <BeaconsWrapper>
      {props.beacons.map(b => (
        <BeaconContainer key={b.identifier}>
          <Image src={b.image} alt={b.color} />
          <div>
            <Title>{b.color}</Title>
            <Content>
              <Category>Identificador</Category>
              {b.identifier}
            </Content>
          </div>
        </BeaconContainer>
      ))}
    </BeaconsWrapper>
  )) ||
  null;

export const Beacons = withLoading(Component);
