import React from "react";
import { PGButtonBar as ButtonBar } from "../shared/PGButtonBar";
import { PGButton } from "../shared/PGButton";

export const confirmableForm = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
  handleSave: () => void,
  handleCancel: () => void
) => {
  return class extends React.PureComponent<P> {
    innerRef = React.createRef();

    render() {
      return (
        <>
          <WrappedComponent {...this.props as P} ref={this.innerRef} />

          <ButtonBar>
            <PGButton
              variant="contained"
              color="secondary"
              onClick={() => handleCancel.apply(this)}
            >
              Cancelar
            </PGButton>
            <PGButton
              variant="contained"
              color="primary"
              onClick={() => handleSave.apply(this)}
            >
              Guardar
            </PGButton>
          </ButtonBar>
        </>
      );
    }
  };
};
