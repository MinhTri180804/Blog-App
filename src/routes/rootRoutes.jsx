import React from "react";
import PropTypes from "prop-types";
import HeaderComponent from "../components/header";
import FooterComponent from "../components/footer";
import { Outlet } from "react-router-dom";

RootRoutes.propTypes = {};

function RootRoutes(props) {
  return (
    <>
      <HeaderComponent />

      <Outlet />

      <FooterComponent />
    </>
  );
}

export default RootRoutes;
