/** @jsxImportSource @emotion/react */
import { FC } from "react";
import { Navbar } from "./Navbar";


export const Layout: FC = ({ children }) => (
  <div className="App">
    <Navbar />
    {children}
  </div>
);
