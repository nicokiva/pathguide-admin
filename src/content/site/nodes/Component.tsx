import React from "react";
import { withLoading } from "../../shared/WithLoading";
import styled from "styled-components";
import { PGArticle as Article } from "../../shared/PGArticle";
import { PGBullet as Bullet } from "../../shared/PGBullet";
import autobind from "autobind-decorator";
import { history } from "../../structure/Main";
import { ROUTES } from "../../metadata/Routes";
import { Node } from "../../../models/Node";
import { PGButtonAdd } from "../../shared/PGButtonAdd";
import { PGButtonBar } from "../../shared/PGButtonBar";
import { Action } from "../../metadata/Actions";

type Props = {
  nodes: Array<Node>;
};

const NodesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

class Component extends React.PureComponent<Props> {
  @autobind
  handleAdd() {
    history.push(
      ROUTES.NODE_ADD_EDIT.replace(":action", Action.ADD).replace(":id", "")
    );
  }

  @autobind
  handleEdit() {}

  render() {
    return (
      <>
        <PGButtonBar>
          <PGButtonAdd onClick={this.handleAdd} />
        </PGButtonBar>

        {this.props.nodes.length > 0 ? (
          <NodesWrapper>
            {this.props.nodes.map(n => (
              <Article
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
