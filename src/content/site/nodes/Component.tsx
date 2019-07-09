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
import { Action } from "../../metadata/Actions";
import { PGButtonClearAll } from "../../shared/icons/PGButtonClearAll";

type Props = {
  nodes: Array<Node>;
  onClearAll: () => void;
  onDelete: (item: Node) => void;
};

const NodesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Component extends React.PureComponent<Props> {
  @autobind
  handleAdd() {
    history.push(
      getRoute(ROUTES.NODE_ADD_EDIT)
        .replace(":action", Action.ADD)
        .replace(":id", "")
    );
  }

  @autobind
  handleEdit(node: Node) {
    history.push(
      getRoute(ROUTES.NODE_ADD_EDIT)
        .replace(":action", Action.EDIT)
        .replace(":id", node.id)
    );
  }

  render() {
    return (
      <>
        <PGButtonBar>
          <PGButtonAdd onClick={this.handleAdd} />
          <PGButtonClearAll onClick={this.props.onClearAll} />
        </PGButtonBar>

        {this.props.nodes.length > 0 ? (
          <NodesWrapper>
            {this.props.nodes.map(n => (
              <Article
                item={n}
                onDelete={this.props.onDelete as any}
                onClick={this.handleEdit as any}
                key={n.id}
                selectable
                id={n.id}
                title={n.description}
              >
                <Bullet question="Extra" answer={n.extra} />
              </Article>
            ))}
          </NodesWrapper>
        ) : (
          "No hay data"
        )}
      </>
    );
  }
}

export const Nodes = withLoading(Component);
