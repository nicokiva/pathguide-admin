import { Path } from "../models/Path";
import { HttpService } from "./HttpService";
import { Node } from "../models/Node";

class Service {
  private path: Path | undefined;

  async getPath() {
    if (this.path !== undefined) {
      return this.path;
    }

    const response = await HttpService.get<Path>(`path`);
    const { data } = response;

    this.path = {
      nodes: data.nodes || [],
      edges: data.edges || []
    };

    return this.path;
  }

  async setPath(path: Path) {
    this.path = undefined;

    await HttpService.post<Path>(`path`, path, {
      headers: {
        "Content-Type": "application/json"
      }
    });

    return this.getPath();
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
    if (!this.path) {
      await this.getPath();
    }

    return this.path!.nodes;
  }

  async getNodeById(id: string) {
    return (await this.getNodes()).find(node => node.id === id);
  }
}

export const PathService = new Service();
