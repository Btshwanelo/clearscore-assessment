import {
  setReportLoading,
  setReport,
  setReportError,
  setInsight,
  setInsightError,
  setInsightLoading,
} from "../redux/actions/user-actions";
import httpCommon from "./http-common";

/**
 * fetch all report api
 * @param  {[Function]} arg1 dispatch
 */
export const fetchAll = (dispatch) => {
  dispatch(setReportLoading());
  httpCommon
    .get("/b/6107fbe9f14b8b153e05e714")
    .then((res) => {
      dispatch(setReport(res.data));
    })
    .catch((error) => {
      dispatch(setReportError(error));
      throw error;
    });
};

/**
 * fetch insight data
 * @param  {[Function]} arg1 dispatch
 */
export const fetchById = (dispatch) => {
  dispatch(setInsightLoading());
  httpCommon
    .get("/b/6128c389c5159b35ae04d4ed/1")
    .then((res) => {
      dispatch(setInsight(res.data));
    })
    .catch((error) => {
      dispatch(setInsightError(error));
    });
};
