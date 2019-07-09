import React from "react";
import { PGButtonBar as ButtonBar } from "./PGButtonBar";
import { PGButton } from "./PGButton";
import styled from "styled-components";

type PGConfirmationFormProps = {
  onCancel: () => void;
  onSave: () => void;
  children: React.ReactNode;
};

const ButtonBarStyled = styled(ButtonBar)`
  justify-content: space-between;
`;

export const PGConfirmationForm: React.FC<PGConfirmationFormProps> = (
  props: PGConfirmationFormProps
) => (
  <>
    <div>{props.children}</div>
    <ButtonBarStyled>
      <PGButton variant="contained" color="secondary" onClick={props.onCancel}>
        Cancelar
      </PGButton>
      <PGButton variant="contained" color="primary" onClick={props.onSave}>
        Guardar
      </PGButton>
    </ButtonBarStyled>
  </>
);
