import * as React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Badge, IconButton } from "@material-ui/core";

type PGNotificationsProps = {
  notificationsQuantity: number;
};

export const PGNotifications: React.FC<PGNotificationsProps> = (
  props: PGNotificationsProps
) => (
  <IconButton color="inherit">
    <Badge badgeContent={props.notificationsQuantity} color="secondary">
      <NotificationsIcon />
    </Badge>
  </IconButton>
);
