import React from "react";
import { withLoading } from "../../shared/WithLoading";
import styled from "styled-components";
import { PGArticle as Article } from "../../shared/PGArticle";
import { PGBullet as Bullet } from "../../shared/PGBullet";
import autobind from "autobind-decorator";
import { history } from "../../structure/Main";
import { ROUTES, getRoute } from "../../metadata/Routes";
import { Node } from "../../../models/Node";
import { PGButtonAdd } from "../../shared/PGButtonAdd";
import { PGButtonBar } from "../../shared/PGButtonBar";
import { Action } from "../../metadata/Actions";
import { PGButtonClearAll } from "../../shared/PGButtonClearAll";

type Props = {
  nodes: Array<Node>;
  onClearAll: () => void;
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
  handleClearAll() {
    this.props.onClearAll();
  }

  @autobind
  handleEdit() {}

  render() {
    return (
      <>
        <PGButtonBar>
          <PGButtonAdd onClick={this.handleAdd} />
          <PGButtonClearAll onClick={this.handleClearAll} />
        </PGButtonBar>

        {this.props.nodes.length > 0 ? (
          <NodesWrapper>
            {this.props.nodes.map(n => (
              <Article
                key={n.id}
                item={n}
                selectable
                id={n.id}
                imageUrl=""
                title={n.description}
                onClick={this.handleEdit}
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
