import React from "react";
import Enzyme from "enzyme";
import { shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import Loader from "../index";

Enzyme.configure({ adapter: new Adapter() });

describe("Loader component", () => {
  it("should render correctly", () => {
    const component = shallow(<Loader isLoading={true} />);

    expect(component.debug()).toMatchSnapshot();
  });
});
