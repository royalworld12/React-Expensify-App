import moment from 'moment';
import selectExpenses from '../../selectors/expenses'
import mockExpenseData from '../fixtures/expenses';


test('should filter by text value',()=>{
    const filter = {
        text : 'e',
        sortBy : 'date',
        startDate : undefined,
        endDate: undefined
    }

    const result = selectExpenses(mockExpenseData,filter);
    expect(result).toEqual([mockExpenseData[2],mockExpenseData[1]])
})

test('should filter by start date',()=>{
    const filter = {
        text : '',
        sortBy : 'date',
        startDate : moment(),
        endDate: undefined
    }

    const result = selectExpenses(mockExpenseData,filter);
    expect(result).toEqual([mockExpenseData[2],mockExpenseData[0]])
})

test('should filter by end date',()=>{
    const filter = {
        text : '',
        sortBy : 'date',
        startDate : undefined,
        endDate: moment().add(2,'days')
    }

    const result = selectExpenses(mockExpenseData,filter);
    expect(result).toEqual([mockExpenseData[0],mockExpenseData[1]])
})

test('should filter sort by date',()=>{
    const filter = {
        text : '',
        sortBy : 'date',
        startDate : undefined,
        endDate: undefined
    }

    const result = selectExpenses(mockExpenseData,filter);
    expect(result).toEqual([mockExpenseData[2],mockExpenseData[0],mockExpenseData[1]])
})

test('should filter sort by amount',()=>{
    const filter = {
        text : '',
        sortBy : 'amount',
        startDate : undefined,
        endDate: undefined
    }

    const result = selectExpenses(mockExpenseData,filter);
    expect(result).toEqual([mockExpenseData[1],mockExpenseData[2],mockExpenseData[0]])
})

