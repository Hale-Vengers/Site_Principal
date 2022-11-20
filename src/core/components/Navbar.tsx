/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC, useEffect, useState } from "react";
import { Navbar as BootstrapNavbar, Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

import { LogoImage, SecretSound } from "../assets";
import { Pages } from "../types";

export const Navbar: FC = () => {
  const [currentPage, setCurrentPage] = useState<Pages>("/home");
  const location = useLocation();
  const [timesClicked, setTimesClicked] = useState<number>(0);

  useEffect(() => {
    setCurrentPage(location.pathname as Pages);
  }, [location]);

  // If the user clicks on the logo 5 times, a sound will play
  const handleLogoClick = () => {
    setTimesClicked(timesClicked + 1);
    if (timesClicked === 3) {
      const audio = new Audio(SecretSound);
      audio.play();
    }
  };

  return (
    <div
      css={css`
        padding: 0.5rem 1vw 1vw 1vw;
        display: flex;
        position: absolute;
        width: -webkit-fill-available;
        align-items: center;
        flex-direction: row;
        background: linear-gradient(
          180deg,
          rgba(0, 0, 0, 0.69) 0%,
          rgba(0, 0, 0, 0) 100%
        );
        z-index: 1;

        a {
          color: white;
          font-size: 1rem;
          text-decoration: none;
          padding-left: 2vw;
          padding-right: 2vw;
        }
      `}
    >
      <Col
        css={css`
          display: flex;
          justify-content: flex-start;
          align-items: center;

          img {
            cursor: pointer;
          }
        `}
      >
        <img
          src={LogoImage}
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="HV logo"
          onClick={handleLogoClick}
        />
      </Col>
      <Col>
        {/* for all Pages, display with line of currentPage */}
        {[
          ["/home", "Accueil"],
          ["/members", "Membres"],
          ["/manuscripts", "Manuscrits"],
          ["/gallery", "Gallerie"],
          ["/calendar", "Calendrier"],
        ].map((page, index) => (
          <Link
            to={page[0]}
            key={index}
            css={css`
              ${currentPage === page[0]
                ? `
                        border-bottom: 2px solid dodgerblue;
                        padding-bottom: 1rem;
                    `
                : ""}
            `}
          >
            {page[1]}
          </Link>
        ))}
      </Col>

      <Col
        css={css`
          display: flex;
          justify-content: flex-end;
          flex-direction: row;
        `}
      >
        <BootstrapNavbar.Brand
          href="#about"
          css={css`
            align-self: center;
          `}
        >
          Bonjour, penis-kun &#127814; &#128166; &#127825;
        </BootstrapNavbar.Brand>
        <img
          src="https://liavignon.fr/wp-content/uploads/sites/64/2022/01/avatar-grey-blue.png"
          width="39.164"
          height="42"
          className="d-inline-block align-top"
          alt="HV logo"
        />
      </Col>
    </div>
  );
};
