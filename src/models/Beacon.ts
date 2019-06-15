import { Node } from "./Node";

export type Beacon = {
  identifier: string;
  color: string;
  type: string;
  hardware_type: string;
  image: string;

  node: Node;
};
