import React from "react";

import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { useDispatch } from "react-redux";

import style from "./insight-card.style";
import BasicModal from "../modal";
import Pill from "../../components/pill";
import { fetchById } from "../../api/user-api";

const InsightCard = ({ header, body, track_status, impact }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const dispatch = useDispatch();

  /**
   * handle modal state
   * @return {[boolean]}      true or false
   */
  const handleOpen = () => {
    setIsOpen(!isOpen);

    !isOpen && fetchById(dispatch);
  };

  return (
    <Card sx={style.card} onClick={() => handleOpen()}>
      <BasicModal
        isDialogOpened={isOpen}
        handleCloseDialog={() => setIsOpen(false)}
        track_status={track_status}
      />
      <Box sx={style.car_box_one}>
        <CardContent sx={style.card_content}>
          <Box component="div" sx={style.card_box_two}>
            <Box sx={{ display: "inline-block" }}>
              <Pill track_status={track_status} />
              <Typography variant="p" component="div" sx={style.card_impact}>
                {impact}
              </Typography>
            </Box>
            <Box sx={style.card_box_three}>
              <Typography variant="p" component="div" sx={style.card_header}>
                {header}
              </Typography>
              <Typography variant="p" component="div" sx={style.card_body}>
                {body}
              </Typography>
            </Box>
          </Box>
          <Typography sx={style.card_lg_impact}>{impact}</Typography>
        </CardContent>
      </Box>
    </Card>
  );
};

export default InsightCard;

InsightCard.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  track_status: PropTypes.string.isRequired,
  impact: PropTypes.string.isRequired,
};
