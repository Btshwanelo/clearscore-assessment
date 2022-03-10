import React from "react";

import PropTypes from "prop-types";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

import style from "./loader.style";

const Loader = ({ isLoading }) => {
  return (
    <div>
      <Backdrop sx={style.loader} open={isLoading ? true : false}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default Loader;

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
