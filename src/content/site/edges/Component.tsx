import React from "react";
import { withLoading } from "../../shared/WithLoading";
import styled from "styled-components";
import { PGArticle as Article } from "../../shared/PGArticle";
import { PGBullet as Bullet } from "../../shared/PGBullet";
import autobind from "autobind-decorator";
import { history } from "../../structure/Main";
import { ROUTES, getRoute } from "../../metadata/Routes";
import { Node } from "../../../models/Node";
import { PGButtonAdd } from "../../shared/icons/PGButtonAdd";
import { PGButtonBar } from "../../shared/PGButtonBar";
import { PGButtonClearAll } from "../../shared/icons/PGButtonClearAll";
import { Edge } from "../../../models/Edge";

type Props = {
  edges: Array<Edge>;
  nodes: Array<Node>;
  onClearAll: () => void;
  onDelete: (item: Edge) => void;
};

const NodesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Component extends React.PureComponent<Props> {
  @autobind
  handleAdd() {
    history.push(getRoute(ROUTES.EDGE_ADD));
  }

  render() {
    return (
      <>
        <PGButtonBar>
          <PGButtonAdd onClick={this.handleAdd} />
          <PGButtonClearAll onClick={this.props.onClearAll} />
        </PGButtonBar>

        {this.props.edges.length > 0 && this.props.nodes.length > 0 ? (
          <NodesWrapper>
            {this.props.edges.map(e => {
              const key = `${e.from}-${e.to}`;
              const from = this.props.nodes.find(node => node.tag === e.from)!;
              const to = this.props.nodes.find(node => node.tag === e.to)!;
              const title = `${from.description} ---> ${to.description}`;
              return (
                <Article
                  item={e}
                  onDelete={this.props.onDelete as any}
                  key={key}
                  id={key}
                  title={title}
                >
                  <Bullet question="Instrucciones" answer={e.instructions} />
                  <Bullet question="Distancia (mts)" answer={e.distance} />
                </Article>
              );
            })}
          </NodesWrapper>
        ) : (
          "No hay data"
        )}
      </>
    );
  }
}

export const Edges = withLoading(Component);
