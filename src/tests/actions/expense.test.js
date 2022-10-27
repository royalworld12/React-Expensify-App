import {addExpense, removeExpense, editExpense} from '../../actions/expenses';

test('should test removeExpense function',()=>{
    const action = removeExpense({id:'123abc'});
    expect(action).toEqual({
        type : 'REMOVE_EXPENSE',
        id : '123abc'
    })
})

test('should test editExpense function',()=>{
    const action = editExpense('123abc',{
        description: 'test'
    })

    expect(action).toEqual({
        type : 'EDIT_EXPENSE',
        id : '123abc',
        updates : {
            description: 'test'
        }
    })
})

test('should test addExpense function with provided values', ()=>{
    const expenseData = {
        description : 'test',
        amount : 123,
        createdAt: 200,
        note: 'test'
    }
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {...expenseData,
        id : expect.any(String)
        }
    })
})

test('should test addExpense function with default values',()=>{

    const action  = addExpense();
    expect(action).toEqual({
        type : 'ADD_EXPENSE',
        expense : {
            id : expect.any(String),
            amount: 0,
            createdAt: 0,
            description: "",
            note: ""
        }
    })
})