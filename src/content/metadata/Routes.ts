export enum ROUTES {
  BEACONS = "beacons",
  BEACON = "beacon/:id",
  PATH = "path",
  NODES = "nodes",
  NODE_ADD_EDIT = "nodes/:action/:id?"
}

export const getRoute = (route: ROUTES) =>
  `${process.env.REACT_APP_SITE_BASE_PATH}/${route}`;
