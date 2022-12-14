import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from '../../components/expenseForm';
import expenses from '../fixtures/expenses'
import moment from 'moment';

test('should render expense form',()=>{
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot();
})

test('should render expense form with expenses',()=>{
    const wrapper = shallow(<ExpenseForm expenses={expenses[1]}/>);
    expect(wrapper).toMatchSnapshot();
})

test('should submit form with invalid data',()=>{
    const wrapper = shallow(<ExpenseForm/>);
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit',{
        preventDefault : () => {}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot()
})

test('should get description on change',()=>{
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change',{
      target : {value}
    })
    expect(wrapper.state('description')).toBe(value);
})

test('should get description on change',()=>{
    const value = 'New Note';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('textarea').simulate('change',{
      target : {value}
    })
    expect(wrapper.state('note')).toBe(value);
})

test('should set amount on change if valid',()=>{
    const value = '123.60';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change',{
      target : {value}
    })
    expect(wrapper.state('amount')).toBe(value);
})

test('should set amount on change if not valid',()=>{
    const value = '';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change',{
      target : {value}
    })
    expect(wrapper.state('amount')).toBe(value);
})

test('should call onsubmit prop for valid form submission',()=>{
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
    wrapper.find('form').simulate('submit',{
        preventDefault : () => {}
    })
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description : expenses[0].description,
        amount : expenses[0].amount,
        note : expenses[0].note,
        createdAt : expenses[0].createdAt
    })

})

test('should set new date on change',()=>{
    const now = moment();
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toBe(now)
})

test('should set new date on focused',()=>{
    const focused = true;
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
    expect(wrapper.state('calendarFocused')).toBe(focused)
})