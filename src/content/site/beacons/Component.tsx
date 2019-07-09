import React from "react";
import { Beacon } from "../../../models/Beacon";
import { withLoading } from "../../shared/WithLoading";
import styled from "styled-components";
import { PGArticle as Article } from "../../shared/PGArticle";
import { PGBullet as Bullet } from "../../shared/PGBullet";
import autobind from "autobind-decorator";
import { history } from "../../structure/Main";
import { ROUTES, getRoute } from "../../metadata/Routes";

type Props = {
  beacons: Array<Beacon>;
};

const BeaconsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Component extends React.PureComponent<Props> {
  @autobind
  handleClick(item: Beacon) {
    history.push(getRoute(ROUTES.BEACON).replace(":id", item.identifier));
  }

  render() {
    return (
      (this.props.beacons.length > 0 && (
        <BeaconsWrapper>
          {this.props.beacons.map(b => (
            <Article
              selectable
              item={b}
              id={b.identifier}
              key={b.identifier}
              imageUrl={b.image}
              title={b.color}
              onClick={this.handleClick as (item: unknown) => void}
            >
              <Bullet question="Identificador" answer={b.identifier} />

              {b.node && (
                <Bullet question="Asignado a" answer={b.node.description} />
              )}
            </Article>
          ))}
        </BeaconsWrapper>
      )) ||
      null
    );
  }
}

export const Beacons = withLoading(Component);
