import * as React from "react";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Badge, IconButton } from "@material-ui/core";

type NotificationsProps = {
  notificationsQuantity: number;
};

export const Notifications: React.FC<NotificationsProps> = (
  props: NotificationsProps
) => (
  <IconButton color="inherit">
    <Badge badgeContent={props.notificationsQuantity} color="secondary">
      <NotificationsIcon />
    </Badge>
  </IconButton>
);
