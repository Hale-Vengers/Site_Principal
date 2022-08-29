/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

import { BlueBorderBackground } from "../../core";
import { default as SpinnerSvg } from "../assets";

export const LoadingScreen: FC = () => (
  <BlueBorderBackground backgroundColor={"white"}>
    <div
      className="container"
      css={css`
        flex: 1;
        flex-direction: column;
        display: flex;
        text-align: center;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
      `}
    >
      <h2>Chargement</h2>
      <img src={SpinnerSvg} alt="Spinner" width="10%" />
    </div>
  </BlueBorderBackground>
);
