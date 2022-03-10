import React from "react";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";

import style from "./insight-modal.style";

const InsightModal = ({ isDialogOpened, handleCloseDialog, track_status }) => {
  /**
   * handle modal state
   * @return {[boolean]}      true or false
   */
  const handleClose = () => {
    handleCloseDialog(false);
  };

  // subscribe to the state
  const data = useSelector((state) => state.report.insight);
  return (
    <div>
      <Modal
        open={isDialogOpened}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.modal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {track_status}
          </Typography>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {track_status === "off track"
              ? data.offTrackDescription
              : data.onTrackDescription}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {data.title}
          </Typography>
          {data?.details?.map((item, idx) => (
            <div key={idx}>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {" "}
                {data.title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {" "}
                {item.description}
              </Typography>
            </div>
          ))}
        </Box>
      </Modal>
    </div>
  );
};

export default InsightModal;

InsightModal.propTypes = {
  isDialogOpened: PropTypes.bool.isRequired,
  handleCloseDialog: PropTypes.func.isRequired,
  track_status: PropTypes.string.isRequired,
};
