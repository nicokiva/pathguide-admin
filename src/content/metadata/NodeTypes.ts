export enum NodeType {
  GATEWAY = "Gateway",
  BATHROOM = "Bathroom",
  CLASSROOM = "Classroom"
}

type NodeTypes = { [s in NodeType]: string };

export const NodeTypes = {
  [NodeType.GATEWAY]: NodeType.GATEWAY.toLowerCase(),
  [NodeType.BATHROOM]: NodeType.BATHROOM.toLowerCase(),
  [NodeType.CLASSROOM]: NodeType.CLASSROOM.toLowerCase()
};
