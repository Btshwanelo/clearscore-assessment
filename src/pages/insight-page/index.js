import React from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";

import {
  electoral_roll,
  public_info,
  credit_utilisation,
} from "../../assets/helpers";
import style from "./insight-page.style";
import SimpleBackdrop from "../../components/loader";
import InsightCard from "../../components/card/index";
import { InsightInfo } from "../../assets/insight-data";
import CustomizedSnackbars from "../../components/snackbar";

//grid style
const gridStyle = {
  display: "grid",
  width: "100%",
  padding: { xs: "0 0 0.5rem 1rem", md: "0.5rem 2rem" },
  gridAutoColumns: {
    xs: "calc(50% - 1.25rem)",
    md: "repeat(2,1fr)",
    lg: "repeat(3, 1fr)",
  },
  gridAutoFlow: { xs: "column", md: "row" },
  gridGap: { xs: "0.5rem", md: "1rem" },
  gridTemplateColumns: {
    md: "repeat(2,1fr)",
    lg: "repeat(3, 1fr)",
  },
  overflowX: { xs: "auto", md: "none" },
  "&::-webkit-scrollbar": {
    width: "0",
  },
};

const InsightPage = () => {
  const data = useSelector((state) => state.report.report);
  const isLoading = useSelector((state) => state.report.appLoading);
  const isErrorMessage = useSelector((state) => state.report.appError.message);
  return (
    <React.Fragment>
      <CssBaseline />
      {isErrorMessage === "" ? (
        <CustomizedSnackbars errorMessage={isErrorMessage} />
      ) : null}
      {isLoading === true ? <SimpleBackdrop /> : null}
      <Grid container>
        <Grid item xs={12} sx={style.insight}>
          <Box sx={style.insight_box_one}>
            <Box sx={style.insight_box_two}>
              <Box sx={style.insight_box_three}>
                <Typography
                  variant="h4"
                  component="h1"
                  sx={style.insight_header}
                >
                  Insights
                </Typography>
              </Box>

              <Box sx={gridStyle}>
                {InsightInfo.map((item, idx) => (
                  <InsightCard
                    header={item.header}
                    body={item.body}
                    impact={item.impact}
                    track_status={
                      item.title === "Electoral roll"
                        ? electoral_roll(data)
                        : item.title === "Credit utilisation"
                        ? credit_utilisation(data)
                        : public_info(data)
                    }
                    key={idx}
                  />
                ))}
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default InsightPage;
