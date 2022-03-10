import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

import Modal from "../index";

Enzyme.configure({ adapter: new Adapter() });

const mockStore = configureStore();
let store;

const initialState = {
  appLoading: false,
  report: {},
  insight: {},
  appError: "",
  insightLoading: false,
  insghtError: "",
};

describe("insight-modal component", () => {
  it("should render correctly", () => {
    store = mockStore(initialState);
    const component = shallow(
      <Provider store={store}>
        <Modal
          isDialogOpened={true}
          handleCloseDialog={jest.fn()}
          track_status={""}
        />
      </Provider>
    );

    expect(component.debug()).toMatchSnapshot();
  });
});
