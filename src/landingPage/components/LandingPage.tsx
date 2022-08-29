/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { Container } from "react-bootstrap";

import { BlueBorderBackground } from "../../core";
import GroupPhoto from "../assets/groupe.jpg";

export const LandingPage: FC = () => (
  <>
    <BlueBorderBackground backgroundColor={"white"}>
      <Container
        css={css`
          margin-top: 5vh;
        `}
      >
        <h1>The one and only</h1>
        <img src={GroupPhoto} alt="La team" width="80%" />
      </Container>
    </BlueBorderBackground>
  </>
);
