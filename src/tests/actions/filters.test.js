import moment from 'moment';
import {setTextFilter,setStartDate,setEndDate,sortByAmount,sortByDate} from '../../actions/filters'

test('should test setTextFilter function with provided value',()=>{
    const action = setTextFilter('Test');
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text : 'Test'
    })
})

test('should test setTextFilter function with default value',()=>{
    const action = setTextFilter();
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text : ''
    })
})

test('should test setStartDate function with provided value',()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date : moment(0)
    })
})

test('should test setEndDate function with provided value',()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date : moment(0)
    })
})

test('should test sortByDate function with provided value',()=>{
    const action = sortByDate();
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})

test('should test sortByAmount function with provided value',()=>{
    const action = sortByAmount();
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})