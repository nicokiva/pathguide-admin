import React from "react";
import styled from "styled-components";

type Props = {
  onClick: () => void;
};

const Button = styled.svg`
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAQAAABIkb+zAAABnklEQVR4Ae3YMWoCQRTG8VepyKLpg8ZiuxGSvHc1D2DpEZJD2NukkG22WsxBBLFWzRCmk8mL6Cxv8Pt7ge+HuswO3SOEEEIIIcRzOf/vw3P78+0T9Pn2Cfp8SwQ5t/sBAAAAbg8AABBC+Z2JAAAAgIQBAAAAAACgBMBOnbizDKjKAa/+vE5clQOprAIq6RO5TpzAK9chkr5UFgG1n+8LhNh83y+htgaoXUG+OCHMD7lCakuAMP+CEJkfCI0VwOH1mS7yhK/I/JCM5WDlG2hkSBdNep4Qnz+08g0oBGW+AYBC0OdbAXiCK0gvzLcCUJ5G+nxbgEDQ59sFBII+3wZAIVw/HwD8hJq8/8SNDLN6jOrzFYL9o0TZnfQUgtnDXHgrMH2Y0+fncZw+yDg+P5MXmgSvlHipT3itEuZnfLFVZ3y1+PYkFS53cb0OAACPDNgnBewpdbxJCeBvSp0sUgJkQal7f+Fjqvl8lDGljz+SAT6pjcpumv8Bb8outZMreMmnu44/8dIV1GbTkcx4Ldubx295LbPpiK4OIYQQQgj9ACl274+hzZ9YAAAAAElFTkSuQmCC);
  background-repeat: no-repeat;
  background-size: 50px;

  height: 50px;
  width: 50px;
`;

export const PGButtonDelete: React.FC<Props> = props => (
  <Button onClick={props.onClick} />
);
