import { Path } from "../models/Path";
import { HttpService } from "./HttpService";
import { Node } from "../models/Node";

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

    return this.getPath();
  }

  async appendNode(node: Node) {
    const path = { ...this.path, nodes: [...this.path.nodes, node] };

    return this.setPath(path);
  }

  async updateNode(node: Node) {
    const nodes = (await this.getNodes()).filter(
      currentNode => currentNode.id !== node.id
    );

    const path = { ...this.path, nodes: [...nodes, node] };

    return this.setPath(path);
  }

  async deleteNode(node: Node) {
    const nodes = (await this.getNodes()).filter(
      currentNode => currentNode.id !== node.id
    );

    const path = { ...this.path, nodes };

    return this.setPath(path);
  }

  async clearNodes() {
    const path = { ...this.path, nodes: [] };

    return this.setPath(path);
  }

  async swapNodes(oldNode: Node, node: Node) {
    const old = { ...oldNode, id: node.id };
    const newNode = { ...node, id: oldNode.id };

    const ignoredNodes = [oldNode.id, node.id];
    const filteredNodes = this.path!.nodes.filter(
      node => !ignoredNodes.includes(node.id)
    );

    this.path = { ...this.path!, nodes: [...filteredNodes, old, newNode] };
    return this.setPath(this.path);
  }

  async getNodes() {
    await this.getPath();

    return this.path!.nodes;
  }

  async getNodeById(id: string) {
    return (await this.getNodes()).find(node => node.id === id);
  }
}

export const PathService = new Service();
