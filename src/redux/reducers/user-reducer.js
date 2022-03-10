import {
  GET_INSIGHT_DETAILS,
  GET_REPORT,
  APP_ERROR,
  APP_LOADING,
  INSIGHT_ERROR,
  INSIGHT_LOADING,
} from "../actions/user-action-types";

const initialState = {
  appLoading: false,
  report: {},
  insight: {},
  appError: "",
  insightLoading: false,
  insghtError: "",
};

function reportReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_REPORT:
      return { ...state, report: { ...payload }, AppLoading: false };

    case GET_INSIGHT_DETAILS:
      return {
        ...state,
        insight: { ...payload },
        insightLoading: false,
      };

    case APP_LOADING:
      return { ...state, appLoading: true };

    case APP_ERROR:
      return {
        ...state,
        appError: payload,
        appLoading: false,
      };

    case INSIGHT_ERROR:
      return { ...state, insightLoading: false, insightError: payload };

    case INSIGHT_LOADING:
      return { ...state, insightLoading: true };

    default:
      return state;
  }
}

export default reportReducer;
