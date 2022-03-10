import React from "react";

import PropTypes from "prop-types";
import Typography from "@mui/material/Typography";

import style from "./pill.style";

const Pill = ({ track_status }) => {
  return (
    <Typography
      variant="p"
      component="div"
      color={
        track_status === "on track"
          ? "primary.clr_green_pill_text"
          : "primary.clr_orange_pill_text"
      }
      backgroundColor={
        track_status === "on track"
          ? "custom.green_pill_background"
          : "custom.orange_pill_background"
      }
      sx={style.track}
    >
      {track_status}
    </Typography>
  );
};

export default Pill;

Pill.propTypes = {
  track_status: PropTypes.string.isRequired,
};
