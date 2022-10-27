import React from 'react';
import shallow from 'enzyme/build/shallow';
import {ExpenseList} from '../../components/expenseList';
import expenses from '../fixtures/expenses';

test('should render expenseList with expenses',()=>{
const wrapper = shallow(<ExpenseList expenses ={expenses}/>)
expect(wrapper).toMatchSnapshot();
})


test('should render expenseList with no expenses',()=>{
    const wrapper = shallow(<ExpenseList expenses ={[]}/>)
    expect(wrapper).toMatchSnapshot();
})
    
