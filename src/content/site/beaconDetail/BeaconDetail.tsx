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

type BeaconDetailProps = {
  beacon?: Beacon;
  nodes: Array<Node>;
  onSave: (beacon: Beacon) => void;
};

type BeaconDetailState = {
  node?: Node;
};

class Component extends React.PureComponent<
  BeaconDetailProps,
  BeaconDetailState
> {
  state: BeaconDetailState = {
    node: this.props.beacon ? this.props.beacon.node : undefined
  };

  @autobind
  handleChange(event: { target: { value: string } }) {
    const { value } = event.target;
    const node = this.props.nodes.find(node => node.tag === value)!;

    this.setState({ node });
  }

  @autobind
  handleSave() {
    if (!this.props.beacon || !this.state.node) {
      return;
    }

    this.props.onSave({ ...this.props.beacon!, node: this.state.node });
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
              <Select
                onChange={this.handleChange}
                selectedOptionValue={this.state.node!.tag}
                options={this.props.nodes.map(node => ({
                  value: node.tag,
                  label: node.description
                }))}
              />
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
