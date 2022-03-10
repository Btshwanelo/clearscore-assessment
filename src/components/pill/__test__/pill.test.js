import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Pill from "../index";

Enzyme.configure({ adapter: new Adapter() });

describe("pill component", () => {
  it("should render correctly", () => {
    const component = shallow(
      <Pill track_status={""}>
        {" "}
        <>...</>
      </Pill>
    );

    expect(component.debug()).toMatchSnapshot();
  });
});
