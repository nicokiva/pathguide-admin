import * as React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Badge, IconButton } from "@material-ui/core";

type Props = {
  notificationsQuantity: number;
};

export type PGNotificationsProps = Props;

export const PGNotifications: React.FC<Props> = (props: Props) => (
  <IconButton color="inherit">
    <Badge badgeContent={props.notificationsQuantity} color="secondary">
      <NotificationsIcon />
    </Badge>
  </IconButton>
);
