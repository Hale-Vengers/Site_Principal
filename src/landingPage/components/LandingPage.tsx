/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import GroupPhoto from "../assets/groupe.jpg";

export const LandingPage: FC = () => (
  <div
    css={css`
      width: 100%;
      clip-path: polygon(0px 0px, 100% 0px, 100% 60%, 0px 100%);
      background: linear-gradient(205.98deg, #0a02ff 16.38%, #aa6bff 108.93%);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.19);
      height: 97vh;
      padding-top: 20rem;
      /* TODO Add from .App > *:first-child { */
    `}
  >
    <h1>The one and only</h1>
    <img src={GroupPhoto} alt="La team" width="20%" />
  </div>
);
