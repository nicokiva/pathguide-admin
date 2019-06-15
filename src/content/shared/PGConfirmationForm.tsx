import React from "react";
import { PGButtonBar as ButtonBar } from "./PGButtonBar";
import { PGButton } from "./PGButton";

type PGConfirmationFormProps = {
  onCancel: () => void;
  onSave: () => void;
  children: React.ReactChild;
};

export const PGConfirmationForm: React.FC<PGConfirmationFormProps> = (
  props: PGConfirmationFormProps
) => (
  <>
    <div>{props.children}</div>
    <ButtonBar>
      <PGButton variant="contained" color="secondary" onClick={props.onCancel}>
        Cancelar
      </PGButton>
      <PGButton variant="contained" color="primary" onClick={props.onSave}>
        Guardar
      </PGButton>
    </ButtonBar>
  </>
);
