import React from "react";
import { Beacon } from "../../../models/Beacon";
import { Node } from "../../../models/Node";
import { PGArticle as Article } from "../../shared/PGArticle";
import { PGBullet as Bullet } from "../../shared/PGBullet";
import { PGSelect as Select } from "../../shared/PGSelect";
import { PGConfirmationForm as ConfirmationForm } from "../../shared/PGConfirmationForm";
import autobind from "autobind-decorator";
import { withLoading } from "../../shared/WithLoading";
import { history } from "../../structure/Main";
import { ROUTES, getRoute } from "../../metadata/Routes";

type Props = {
  beacon?: Beacon;
  nodes: Array<Node>;
  onSave: (beacon: Beacon) => void;
};

type State = {
  node?: Node;
};

class Component extends React.PureComponent<Props, State> {
  state: State = {
    node: this.props.beacon ? this.props.beacon.node : undefined
  };

  @autobind
  handleChange(event: { target: { value: string } }) {
    const { value } = event.target;
    const node = this.props.nodes.find(node => node.tag === value)!;

    this.setState({ node });
  }

  @autobind
  async handleSave() {
    if (!this.props.beacon || !this.state.node) {
      return;
    }

    await this.props.onSave({ ...this.props.beacon!, node: this.state.node });

    history.push(getRoute(ROUTES.BEACONS));
  }

  @autobind
  handleCancel() {
    history.goBack();
  }

  render() {
    return this.props.beacon !== undefined ? (
      <ConfirmationForm onCancel={this.handleCancel} onSave={this.handleSave}>
        <Article
          item={this.props.beacon}
          id={this.props.beacon.identifier}
          key={this.props.beacon.identifier}
          imageUrl={this.props.beacon.image}
          title={this.props.beacon.color}
        >
          <Bullet
            question="Identificador"
            answer={this.props.beacon.identifier}
          />

          <Bullet
            question="Asignado a"
            answer={
              this.props.nodes.length > 0 ? (
                <Select
                  onChange={this.handleChange}
                  value={this.state.node && this.state.node.tag}
                  options={this.props.nodes.map(node => ({
                    value: node.tag,
                    label: node.description
                  }))}
                />
              ) : (
                "No hay estaciones disponibles"
              )
            }
          />
        </Article>
      </ConfirmationForm>
    ) : (
      <>No beacon selected</>
    );
  }
}

export const BeaconDetail = withLoading(Component);
