import React from "react";
import { shallow } from "enzyme";
import {EditExpensePage} from "../../components/editExpensePage";
import expenses from '../fixtures/expenses';

let editExpense,removeExpense, history,wrapper;

beforeEach(()=>{
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = {push : jest.fn()};
    wrapper = shallow(<EditExpensePage 
        editExpense={editExpense} 
        history={history} 
        removeExpense={removeExpense}
        expense = {expenses[2]}
        />)
})

test('should render the edit expense correctly',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('should handle onsubmit',()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenLastCalledWith(expenses[2].id,expenses[2])
})

test('should handle remove',()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenLastCalledWith({
        id : expenses[2].id
    })
})

