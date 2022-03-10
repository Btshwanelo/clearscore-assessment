import {
  APP_ERROR,
  APP_LOADING,
  INSIGHT_ERROR,
  INSIGHT_LOADING,
  GET_REPORT,
  GET_INSIGHT_DETAILS,
} from "./user-action-types";

export const setReport = (items) => {
  return {
    type: GET_REPORT,
    payload: items,
  };
};

export const setInsight = (item) => {
  return {
    type: GET_INSIGHT_DETAILS,
    payload: item,
  };
};

export const setReportError = (error) => {
  return {
    type: APP_ERROR,
    payload: error,
  };
};

export const setReportLoading = () => {
  return {
    type: APP_LOADING,
  };
};

export const setInsightLoading = () => {
  return {
    type: INSIGHT_LOADING,
  };
};
export const setInsightError = () => {
  return {
    type: INSIGHT_ERROR,
  };
};
