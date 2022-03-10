import React from "react";

import PropTypes from "prop-types";
import Stack from "@mui/material/Stack";
import MuiAlert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import style from "./snackbar.style";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ErrorSnackbar = ({ errorMessage }) => {
  const [open, setOpen] = React.useState(errorMessage);

  /**
   * handle snackbar state
   * @param  {[event]} arg1 an event
   * @param  {[string]} arg2 event type
   * @return {[boolean]}      true or false
   */
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={open}
        anchorOrigin={style.snackbar}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity="error" sx={{ width: "100%" }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default ErrorSnackbar;

ErrorSnackbar.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  open: PropTypes.bool
};
