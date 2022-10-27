import React from "react";
import { shallow } from "enzyme";
import ExpenseListItem from "../../components/expenseListItem";
import expenses from '../fixtures/expenses';

test('Should render expenseListItem with expenses',()=>{
    const wrapper = shallow(<ExpenseListItem {...expenses[1]}/>)
    expect(wrapper).toMatchSnapshot();
})