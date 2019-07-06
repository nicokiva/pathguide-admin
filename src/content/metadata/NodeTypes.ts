export enum NodeType {
  FINAL = "Final",
  BATHROOM = "Bathroom",
  BEACON = "Beacon"
}

type NodeTypes = { [s in NodeType]: string };

export const NodeTypes = {
  [NodeType.FINAL]: NodeType.FINAL.toLowerCase(),
  [NodeType.BATHROOM]: NodeType.BATHROOM.toLowerCase(),
  [NodeType.BEACON]: NodeType.BEACON.toLowerCase()
};
