import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Snackbar from "../index";

Enzyme.configure({ adapter: new Adapter() });

describe("snackbar component", () => {
  it("should render correctly", () => {
    const component = shallow(<Snackbar errorMessage="" open={true} />);

    expect(component.debug()).toMatchSnapshot();
  });
});
