import React from "react";
import { shallow } from "enzyme";
import {ExpenseListFilter} from "../../components/expenseListFilter";
import {filters,altFilters} from '../fixtures/filters';
import moment from "moment";

let setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate,wrapper;

beforeEach(()=>{
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilter 
    filters = {filters}
    setTextFilter={setTextFilter} 
    sortByDate={sortByDate} 
    sortByAmount={sortByAmount} 
    setStartDate={setStartDate}
    setEndDate = {setEndDate}
    />)
})

test('should render the expenseList filter correctly',()=>{
 expect(wrapper).toMatchSnapshot()
})

test('should render the expenseList filter with alt data',()=>{
    wrapper.setProps({
        filters : altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('should set text on text change',()=>{
    const value = 'rent';
    wrapper.find('input').at(0).simulate('change',{
        target : {value}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value);
})

test('should call on sort change',()=>{
    const value = 'date';
    wrapper.setProps({
        filters : altFilters
    })
    wrapper.find('select').simulate('change',{
        target : {value}
    })
    expect(sortByDate).toHaveBeenLastCalledWith();
})

test('should call on sort change for date',()=>{
    const value = 'date';
    wrapper.setProps({
        filters : altFilters
    })
    wrapper.find('select').simulate('change',{
        target : {value}
    })
    expect(sortByDate).toHaveBeenLastCalledWith();
})

test('should call on sort change for amount',()=>{
    const value = 'amount';
    wrapper.setProps({
        filters : altFilters
    })
    wrapper.find('select').simulate('change',{
        target : {value}
    })
    expect(sortByAmount).toHaveBeenLastCalledWith();
})

test('should call on date change',()=>{
    const startDate = moment(0).add(4,'years');
    const endDate = moment(0).add(8,'years');
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate});
    expect(setStartDate).toHaveBeenLastCalledWith(startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(endDate);

})

test('should call on date change',()=>{
    const calendarFocused = true;
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);

})