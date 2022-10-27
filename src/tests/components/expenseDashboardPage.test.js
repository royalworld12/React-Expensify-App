import React from "react";
import { shallow } from "enzyme";
import ExpenseDashboardPage from "../../components/expenseDashboardPage";

test('should render expense dashboard page',()=>{
    const wrapper = shallow(<ExpenseDashboardPage/>);
    expect(wrapper).toMatchSnapshot();
})