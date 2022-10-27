import expensesReducers from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state',()=>{
    const state = expensesReducers(undefined,{type : '@@INIT'});
    expect(state).toEqual([]);
})

test('should remove expense by id',()=>{
    const action = {
        type : 'REMOVE_EXPENSE',
        id : expenses[1].id
    }

    const state = expensesReducers(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('should not remove expense if id not found',()=>{
    const action = {
        type : 'REMOVE_EXPENSE',
        id : '-1'
    }

    const state = expensesReducers(expenses,action);
    expect(state).toEqual(expenses)
})

test('should add expense',()=>{
    const action = {
        type : 'ADD_EXPENSE',
        expense : {
            ...expenses[1],
            description : 'ssss'
        }
    }

    const state = expensesReducers(expenses,action);
    expect(state.length).toBe(4)
})

test('should edit expense by id',()=>{
    const amount = 122000;
    const action = {
        type : 'EDIT_EXPENSE',
        id : expenses[1].id,
        updates : {
            amount
        }
    }

    const state = expensesReducers(expenses,action);
    expect(state[1].amount).toBe(amount)
})

test('should edit expense if id not found',()=>{
    const amount = 122000;
    const action = {
        type : 'EDIT_EXPENSE',
        id : '4',
        updates : {
            amount
        }
    }

    const state = expensesReducers(expenses,action);
    expect(state).toEqual(expenses)
})