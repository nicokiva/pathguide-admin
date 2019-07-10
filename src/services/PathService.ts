import { Path } from "../models/Path";
import { HttpService } from "./HttpService";
import { Node } from "../models/Node";
import { Edge } from "../models/Edge";

// https://api.myjson.com/bins/kzevw
class Service {
  private path: Path = {
    nodes: [],
    edges: []
  };

  async getPath() {
    const response = await HttpService.get<Path>(`path`);

    this.path = response.data;
    return this.path;
  }

  async setPath(path: Path) {
    await HttpService.post<Path>(`path`, path, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    return await this.getPath();
  }

  async getNodes() {
    const path = await this.getPath();

    return path.nodes;
  }

  async getNodeById(id: string) {
    return (await this.getNodes()).find(node => node.id === id);
  }

  async appendNode(node: Node) {
    const path = { ...this.path, nodes: [...this.path.nodes, node] };

    return await this.setPath(path);
  }

  async updateNode(node: Node) {
    const nodes = (await this.getNodes()).filter(
      currentNode => currentNode.id !== node.id
    );

    const path = { ...this.path, nodes: [...nodes, node] };

    return await this.setPath(path);
  }

  async deleteNode(node: Node) {
    const nodes = (await this.getNodes()).filter(
      currentNode => currentNode.id !== node.id
    );

    const path = { ...this.path, nodes };

    return await this.setPath(path);
  }

  async deleteEdge(edge: Edge) {
    const edges = (await this.getEdges()).filter(
      currentEdge =>
        currentEdge.to !== edge.to || currentEdge.from !== edge.from
    );

    const path = { ...this.path, edges };

    return await this.setPath(path);
  }

  async clearNodes() {
    const path = { edges: [], nodes: [] };

    return await this.setPath(path);
  }

  async clearEdges() {
    const path = { ...this.path, edges: [] };

    return await this.setPath(path);
  }

  async swapNodes(oldNode: Node, node: Node) {
    const old = { ...oldNode, id: node.id };
    const newNode = { ...node, id: oldNode.id };

    const ignoredNodes = [oldNode.id, node.id];
    const filteredNodes = this.path!.nodes.filter(
      node => !ignoredNodes.includes(node.id)
    );

    this.path = { ...this.path!, nodes: [...filteredNodes, old, newNode] };
    return await this.setPath(this.path);
  }

  async getEdges() {
    const path = await this.getPath();

    return path.edges;
  }

  async appendEdge(edge: Edge) {
    const path = { ...this.path, edges: [...this.path.edges, edge] };

    return await this.setPath(path);
  }
}

export const PathService = new Service();
